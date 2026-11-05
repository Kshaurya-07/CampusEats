import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface WaitlistEntry {
  id: string;
  name: string;
  contact: string;
  role: "student" | "outlet" | "delivery";
  blockOrOutlet?: string;
  createdAt: string;
}

const DATA_FILE = path.join(process.cwd(), "src", "data", "waitlist-records.json");

function getRecords(): WaitlistEntry[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Failed to read waitlist records:", err);
  }
  return [];
}

function saveRecords(records: WaitlistEntry[]): boolean {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(records, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Failed to write waitlist records:", err);
    return false;
  }
}

export async function GET() {
  const records = getRecords();
  return NextResponse.json({
    success: true,
    count: records.length,
    // Only return real count; if empty, client can opt to show or hide
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, role, blockOrOutlet } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide your full name." },
        { status: 400 }
      );
    }

    if (!contact || typeof contact !== "string") {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid email address or 10-digit mobile number.",
        },
        { status: 400 }
      );
    }

    // The error message promises an email OR a 10-digit mobile number, so
    // enforce that here instead of only checking length >= 6.
    const contactTrimmed = contact.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactTrimmed);
    const isMobile = /^\d{10}$/.test(contactTrimmed.replace(/[\s-]/g, ""));
    if (!isEmail && !isMobile) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid email address or 10-digit mobile number.",
        },
        { status: 400 }
      );
    }

    const validRoles = ["student", "outlet", "delivery"];
    if (!role || !validRoles.includes(role)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please select your role (Student, Campus Outlet, or Delivery Partner).",
        },
        { status: 400 }
      );
    }

    const newEntry: WaitlistEntry = {
      id: `w_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      contact: contactTrimmed,
      role,
      blockOrOutlet: blockOrOutlet ? String(blockOrOutlet).trim() : undefined,
      createdAt: new Date().toISOString(),
    };

    const records = getRecords();
    records.push(newEntry);
    // Do not report success if the record was not actually saved. In a
    // serverless deployment the repo file may be read-only, so a silent
    // write failure previously returned 201 and lost the registration.
    if (!saveRecords(records)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to save your registration right now. Please try again later.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "You've successfully joined the CampusEats early access waitlist!",
        waitlistNumber: records.length,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { success: false, error: "Unable to process registration. Please try again." },
      { status: 500 }
    );
  }
}
