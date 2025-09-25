export interface NavItem {
  id: string | number;
  title: string;
  href: string;
  description?: string;
  count?: number | string;
  isComingSoon?: boolean;
  isNew?: boolean;
  isLabel?: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigationSections: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        id: "intro",
        title: "Installation",
        href: "/docs",
        description: "Introduction and Usage Guideliness",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        id: 1,
        title: "AI-Input",
        href: "/docs/components/ai-input",
        description: "Modern AI Chat Interface Components",
        count: 16,
      },
      {
        id: 2,
        title: "Alerts",
        href: "/docs/components/alert",
        description: "Alert components and layouts",
        count: 7,
      },
      {
        id: 3,
        title: "Buttons",
        href: "/docs/components/button",
        description: "Interactive Button Component with Animations",
        count: 10,
      },
      {
        id: 4,
        title: "Card",
        href: "/docs/components/card",
        description: "Versatile Card Components and Layouts",
        count: 7,
      },
      {
        id: 5,
        title: "Faq",
        href: "/docs/components/faq",
        description: "Frequestly Asked Questions",
        count: 4,
      },
      {
        id: 6,
        title: "Input",
        href: "/docs/components/input",
        description: "More Components Coming Soon",
        count: 4,
      },
      {
        id: 7,
        title: "List",
        href: "/docs/components/list",
        description: "List Components and Layouts",
        count: 6,
      },
      {
        id: 8,
        title: "Pricing",
        href: "/docs/components/pricing",
        description: "Pricing Components and Layouts",
        count: 4,
        isNew: true,
      },
      {
        id: 9,
        title: "Profile",
        href: "/docs/components/profle",
        description: "Profile Components and Layouts",
        count: 5,
        isNew: true,
      },
      {
        id: 10,
        title: "Text",
        href: "/docs/components/text",
        description: "Typography and Text Animation Coponents",
        count: 6,
        isNew: true,
      },
    ],
  },
  {
    title: "Blocks",
    items: [
      {
        id: 1,
        title: "Block - 01",
        href: "/docs/components/block",
        isLabel: true,
      },
    ],
  },
];
