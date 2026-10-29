export type MeetStatus = "live" | "upcoming" | "closed";

export type Meet = {
  id: string;
  title: string;
  tag: string;
  date: string;
  deadline: string;
  entries: number;
  color: "coral" | "violet" | "mint";
  status: MeetStatus;
  agenda: string[];
};

export const currentUser = {
  name: "ARSII",
  initials: "AR",
  role: "member" as const,
  level: 8,
  title: "Note Ninja",
};

export const meets: Meet[] = [
  { id: "q4-product-kickoff", title: "Q4 Product Kickoff", tag: "PRODUCT", date: "Oct 24, 2024", deadline: "2h 14m left", entries: 12, color: "coral", status: "live", agenda: ["Q4 north star", "Launch calendar", "Owners & next steps"] },
  { id: "design-systems-sync", title: "Design Systems Sync", tag: "DESIGN", date: "Oct 31, 2024", deadline: "Starts in 3 days", entries: 8, color: "violet", status: "upcoming", agenda: ["Component roadmap", "Accessibility audit", "Contribution model"] },
  { id: "platform-retro", title: "Platform Retrospective", tag: "ENGINEERING", date: "Oct 17, 2024", deadline: "Winner: Maya", entries: 16, color: "mint", status: "closed", agenda: ["What shipped", "What slowed us down", "Experiments"] },
];

export const rankings = [
  { place: 1, name: "Maya Chen", initials: "MC", score: 94, delta: "+4", color: "bg-[#f3b83f]" },
  { place: 2, name: "ARSII", initials: "AR", score: 88, delta: "+2", color: "bg-[#ff806b]" },
  { place: 3, name: "Sam Rivera", initials: "SR", score: 82, delta: "-1", color: "bg-[#8c78ff]" },
  { place: 4, name: "Leo Park", initials: "LP", score: 76, delta: "+1", color: "bg-[#65d7ad]" },
];

export const checks = [
  { label: "Required sections", detail: "All 4 sections found", points: 25, complete: true },
  { label: "Agenda coverage", detail: "3 of 3 topics covered", points: 30, complete: true },
  { label: "Actionable next steps", detail: "5 owners identified", points: 25, complete: true },
  { label: "Useful links", detail: "2 links found", points: 8, complete: true },
];
