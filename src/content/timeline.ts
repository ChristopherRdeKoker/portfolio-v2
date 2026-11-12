export enum TimelineKindEnum {
  Work = 1,
  Education = 2,
}

export type TimelineEntryType = {
  kind: TimelineKindEnum;
  period: string;
  title: string;
  organisation: string;
  summary: string;
};

export const timeline: TimelineEntryType[] = [
  {
    kind: TimelineKindEnum.Work,
    period: "Feb 2023 – Present",
    title: "Intermediate Full-Stack Software Developer",
    organisation: "Enterprise-sized SaaS company",
    summary:
      "Build and maintain an enterprise-sized, multi-tenant HR and training SaaS platform: authentication, multi-step registration with email verification, type-safe server actions, database migrations and file-storage integrations.",
  },
  {
    kind: TimelineKindEnum.Work,
    period: "2019 – 2020",
    title: "Proposal Facilitator & Assistant Manager",
    organisation: "Blue Elevator Training Provider",
    summary:
      "Wrote and coordinated SETA training proposals, kept courses within SETA guidelines and BEE requirements, and prepared pricing and status reports for senior management.",
  },
  {
    kind: TimelineKindEnum.Work,
    period: "Jul 2015 – 2018",
    title: "Foreign English Teacher",
    organisation: "American Eagle Institute · Nanjing & Chengdu, China",
    summary:
      "Taught English to students and adults, developed lesson plans and assessments, and ran teacher-development workshops and presentations.",
  },
  {
    kind: TimelineKindEnum.Work,
    period: "Dec 2014 – Jun 2015",
    title: "Assistant Manager",
    organisation: "Beach View BnB & K.D.T.",
    summary:
      "Handled reservations, guest communication, staff scheduling, stock-taking and administration.",
  },
  {
    kind: TimelineKindEnum.Work,
    period: "Oct 2013 – Jun 2014",
    title: "Foreign English Teacher",
    organisation: "EF Education First · Baotou, Inner Mongolia, China",
    summary: "Taught English to students and adults, planned lessons and ran assessments.",
  },
  {
    kind: TimelineKindEnum.Education,
    period: "2012",
    title: "BSocSc Honours, Psychology",
    organisation: "University of KwaZulu-Natal (Howard College)",
    summary:
      "Neuropsychology, psychological assessment, research fundamentals and counselling. Volunteered as a teaching assistant at Open Air School, Glenwood.",
  },
  {
    kind: TimelineKindEnum.Education,
    period: "2009 – 2011",
    title: "Bachelor of Social Sciences, General & Industrial Psychology",
    organisation: "University of KwaZulu-Natal (Howard College)",
    summary: "Member of the Golden Key International Honour Society.",
  },
];
