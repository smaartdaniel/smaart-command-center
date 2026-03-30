import { useQuery } from "@tanstack/react-query";
import { useHashLocation } from "wouter/use-hash-location";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  LayoutDashboard, Database, Smartphone, MapPin, Layout, Tv, Search,
  BookOpen, Handshake, Mail, Activity, BarChart3, Paintbrush, Crosshair,
  ChevronDown, Twitter, ExternalLink,
} from "lucide-react";
import type { Segment } from "@shared/schema";

const ICON_MAP: Record<string, any> = {
  Database, Smartphone, MapPin, Layout, Tv, Search, BookOpen, Handshake,
  Mail, Activity, BarChart3, Paintbrush, Crosshair, Twitter,
  Facebook: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
};

const STATUS_COLORS: Record<string, string> = {
  not_started: "bg-gray-400",
  in_progress: "bg-amber-400",
  active: "bg-emerald-400",
  optimizing: "bg-blue-400",
};

function SmaartLogo() {
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7 shrink-0" aria-label="SMAART Logo">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="hsl(var(--primary))" />
      <path d="M10 21.5C10 21.5 11.5 17 16 17C20.5 17 22 21.5 22 21.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      <path d="M10 14.5C10 14.5 11.5 10 16 10C20.5 10 22 14.5 22 14.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

type SegmentWithCount = Segment & { moduleCount: number };

export function AppSidebar() {
  const [location, navigate] = useHashLocation();
  const { data: segmentsList } = useQuery<SegmentWithCount[]>({
    queryKey: ["/api/segments"],
    queryFn: async () => {
      const res = await fetch("/api/segments");
      if (!res.ok) throw new Error("Failed to load segments");
      return res.json();
    },
  });

  const strategies = segmentsList?.filter(s => s.category === "strategy") || [];
  const operations = segmentsList?.filter(s => s.category === "operations") || [];
  const intelligence = segmentsList?.filter(s => s.category === "intelligence") || [];

  const renderSegmentItem = (seg: SegmentWithCount) => {
    const IconComponent = ICON_MAP[seg.icon];
    const isActive = location === `/segment/${seg.slug}`;
    return (
      <SidebarMenuItem key={seg.slug}>
        <SidebarMenuButton
          isActive={isActive}
          data-testid={`nav-segment-${seg.slug}`}
          onClick={() => navigate(`/segment/${seg.slug}`)}
          className="cursor-pointer"
        >
          <span className="flex items-center gap-2 min-w-0">
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${STATUS_COLORS[seg.status]}`} />
            {IconComponent && (typeof IconComponent === "function" ? <IconComponent className="w-4 h-4 shrink-0 opacity-60" /> : <IconComponent className="w-4 h-4 shrink-0 opacity-60" />)}
            <span className="truncate text-sm">{seg.name}</span>
          </span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar data-testid="app-sidebar">
      <SidebarHeader className="px-4 py-4">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigate("/")} data-testid="nav-logo">
          <SmaartLogo />
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight">SMAART</span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Command Center</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {/* Overview */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={location === "/"}
                  data-testid="nav-dashboard"
                  onClick={() => navigate("/")}
                  className="cursor-pointer"
                >
                  <LayoutDashboard className="w-4 h-4 opacity-60" />
                  <span className="text-sm">Overview</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Strategies */}
        <Collapsible defaultOpen>
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <SidebarGroupLabel className="cursor-pointer flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-group-strategies">
                Strategies
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {strategies.map(renderSegmentItem)}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        {/* Operations */}
        <Collapsible defaultOpen>
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <SidebarGroupLabel className="cursor-pointer flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-group-operations">
                Operations
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {operations.map(renderSegmentItem)}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        {/* Intelligence */}
        <Collapsible defaultOpen>
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <SidebarGroupLabel className="cursor-pointer flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-group-intelligence">
                Intelligence
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {intelligence.map(renderSegmentItem)}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>

      <SidebarFooter className="px-4 pb-4">
        <div className="flex items-center justify-between text-[10px] text-muted-foreground">
          <span className="px-1.5 py-0.5 rounded bg-muted font-mono" data-testid="text-version">v3.0</span>
          <a href="https://smaartcompany.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-foreground transition-colors" data-testid="link-smaart-company">
            SMAART Company <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
