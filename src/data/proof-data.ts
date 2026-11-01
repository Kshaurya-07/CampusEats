/**
 * =======================================================================
 * PROOF & VALIDATION DATA
 * =======================================================================
 * Rigorous adherence to truth in advertising: NO fake statistical figures
 * (strictly no "+48%", "-21%", "21%" or fake percentages).
 * 
 * Legitimate proof points:
 * 1. Pilot testing with selected campus food outlets.
 * 2. Positive student feedback gathered during pilot ordering rounds.
 * 3. Consistent repeat interest and user base enthusiasm across student blocks.
 * =======================================================================
 */

export interface ProofCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  badge: string;
}

export const LEGITIMATE_PROOF_CARDS: ProofCard[] = [
  {
    id: "pilot-testing",
    tag: "Pilot Validation",
    title: "Tested with Selected Campus Outlets",
    description:
      "Direct on-ground trials with food stalls at VIT-AP Food Street verified seamless slot scheduling, reduced counter rush, and accurate order handoffs.",
    badge: "Verified Pilot",
  },
  {
    id: "student-feedback",
    tag: "Student Approved",
    title: "Overwhelmingly Positive Student Response",
    description:
      "Hostelers and day scholars consistently appreciated skipping 20-minute peak counter queues between packed back-to-back lectures and lab sessions.",
    badge: "Real Student Need",
  },
  {
    id: "repeat-demand",
    tag: "Campus Momentum",
    title: "Growing Community & Repeat Order Interest",
    description:
      "Pre-launch pilot participants regularly requested everyday meal pre-booking, demonstrating strong retention and genuine organic word-of-mouth adoption.",
    badge: "Organic Growth",
  },
];

/**
 * Flag to control visibility of sample testimonials from the earlier site.
 * Default is FALSE as mandated by specification.
 */
export const SHOW_TESTIMONIALS = false;

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  quote: string;
}

/**
 * SAMPLE DATA: Preserved from earlier draft content.
 * Displayed only if SHOW_TESTIMONIALS is set to true.
 */
export const SAMPLE_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    author: "Aditya K.",
    role: "B.Tech Student, VIT-AP",
    quote:
      "CampusEats made my short lunch breaks stress-free! No more running to the Food Street just to stand in a queue for 20 minutes.",
  },
  {
    id: "test-2",
    author: "Ramesh M.",
    role: "Food Street Stall Partner",
    quote:
      "Receiving scheduled orders in advance helps us prepare food at an even pace instead of chaos when the bell rings.",
  },
  {
    id: "test-3",
    author: "Sneha P.",
    role: "Student Delivery Partner",
    quote:
      "Earning ₹5–₹10 per delivery while walking back to my dorm block is the most convenient pocket money gig on campus.",
  },
];
