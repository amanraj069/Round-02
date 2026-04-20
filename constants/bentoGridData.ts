// ─── Type Definitions ───────────────────────────────────────────────

export interface ProfileStat {
  label: string;
  value: string;
  trend: "up" | "down" | "neutral";
}

export interface ActivationStep {
  label: string;
  progress: number;
}

export interface AlertDetails {
  [key: string]: string;
}

export interface EnrichmentDetail {
  key: string;
  value: string;
  type: "text" | "boolean";
}

export interface CRMRow {
  company: string;
  seats: string;
}

export interface BentoGridData {
  reports: {
    title: string;
    profile: {
      company: string;
      joined: string;
      stats: ProfileStat[];
    };
    activation: {
      title: string;
      percentage: string;
      steps: ActivationStep[];
    };
  };
  milestones: {
    title: string;
    description: string;
    alert: {
      time: string;
      app: string;
      title: string;
      user: string;
      email: string;
      details: AlertDetails;
    };
  };
  enrichment: {
    title: string;
    description: string;
    badge: string;
    details: EnrichmentDetail[];
  };
  crm: {
    title: string;
    description: string;
    table: {
      headers: string[];
      rows: CRMRow[];
    };
  };
}

// ─── Data ───────────────────────────────────────────────────────────

export const BENTO_GRID_DATA: BentoGridData = {
  reports: {
    title: "We automatically generate reports for each of your customers",
    profile: {
      company: "Intercom",
      joined: "Joined 9 Feb 2023",
      stats: [
        { label: "Total seats", value: "50", trend: "up" },
        { label: "Active seats", value: "22", trend: "up" },
        { label: "Active last 7 days", value: "True", trend: "up" },
      ],
    },
    activation: {
      title: "Company activation",
      percentage: "40%",
      steps: [
        { label: "Signed up", progress: 100 },
        { label: "Setup", progress: 80 },
        { label: "Aha moment", progress: 60 },
        { label: "Activated", progress: 40 },
        { label: "Active", progress: 80 },
      ],
    },
  },
  milestones: {
    title: "Celebrate milestones",
    description: "Instant alerts and weekly digests to keep your team aligned and celebrate wins",
    alert: {
      time: "10:36 AM",
      app: "June APP",
      title: "Qualified signup",
      user: "Eoghan McCabe",
      email: "eoghan@intercom.io",
      details: {
        "Company name:": "Intercom",
        "Location:": "Dublin, Ireland",
        "Role:": "CTO & Co-Founder",
        "Company website:": "intercom.io",
        "Company size:": "800",
        "LinkedIn:": "View profile",
        "Funding amount:": "33M",
        "Crunchbase:": "View company",
      },
    },
  },
  enrichment: {
    title: "Automatic enrichment",
    description: "Automatically enrich your customers profiles and their users powered by GPT",
    badge: "Enriched with AI",
    details: [
      { key: "Website", value: "intercom.io", type: "text" },
      { key: "Location", value: "Dublin, Ireland", type: "text" },
      { key: "Employees", value: "800", type: "text" },
      { key: "Twitter", value: "@intercom", type: "text" },
      { key: "Funding", value: "$241M", type: "text" },
      { key: "Qualified", value: "true", type: "boolean" },
    ],
  },
  crm: {
    title: "Integrated with your CRM",
    description: "Connect June to your CRM and sync product usage data with your CS and sales teams",
    table: {
      headers: ["Company", "Active seats"],
      rows: [
        { company: "Intercom", seats: "22 (+3)" },
        { company: "Amie", seats: "20 (-2)" },
      ],
    },
  },
};
