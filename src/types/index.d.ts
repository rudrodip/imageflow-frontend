import type { Icon } from "lucide-react"
import { Icons } from "@/components/icons"

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type MarketingConfig = {
  mainNav: MainNavItem[]
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
  workspaceNav: SidebarNavItem[]
}


export type GuideConfig = {
  steps: StepConfig[]
}

export type FeatureConfig = {
  name: string,
  desc: string,
  buttonText: string,
  imageUrl: string,
}

export type FeaturesConfig = {
  features: FeatureConfig[]
}

export type PriceConfig = {
  name: string;
  description: string;
  features: string[];
  price: string;
};

export type PriceConfigs = {
  [key: string]: PriceConfig;
};

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export type ReplicateOutput = {
  id: string;
  version: string;
  created_at: string;
  started_at: string | null;
  completed_at: string | null;
  status: string;
  input: {
    text: string;
  };
  output: any | null;
  error: any | null;
  logs: any | null;
  metrics: Record<string, any>;
};