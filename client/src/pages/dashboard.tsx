import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Database, Smartphone, MapPin, Layout, Tv, Search,
  BookOpen, Handshake, Mail, Activity, BarChart3, Paintbrush, Crosshair,
  Twitter, Layers, Zap, CheckCircle2, Flag, ArrowRight,
} from "lucide-react";
import type { Segment } from "@shared/schema";

const ICON_MAP: Record<string, any> = {
  Database, Smartphone, MapPin, Layout, Tv, Search, BookOpen, Handshake,
  Mail, Activity, BarChart3, Paintbrush, Crosshair, Twitter,
  Facebook: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
};

const STATUS_LABELS: Record<string, string> = {
  not_started: "Not Started",
  in_progress: "In Progress",
  active: "Active",
  optimizing: "Optimizing",
};

const STATUS_VARIANTS: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  not_started: "secondary",
  in_progress: "outline",
  active: "default",
  optimizing: "default",
};

type SegmentWithCount = Segment & { moduleCount: number };

interface Stats {
  totalSegments: number;
  activeModules: number;
  totalModules: number;
  completedTasks: number;
  totalTasks: number;
  averageProgress: number;
}

const PHASES = [
  { name: "Foundation", months: "Month 1-2", active: true },
  { name: "Launch", months: "Month 3-4", active: false },
  { name: "Scale", months: "Month 5-8", active: false },
  { name: "Optimize", months: "Month 9-12", active: false },
];

function ProgressRing({ value, size = 40 }: { value: number; size?: number }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <svg width={size} height={size} className="shrink-0 -rotate-90">
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset} className="transition-all duration-700" />
    </svg>
  );
}

function KPICards({ stats }: { stats?: Stats }) {
  if (!stats) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="border border-card-border">
            <CardContent className="p-4">
              <Skeleton className="h-4 w-20 mb-3" />
              <Skeleton className="h-7 w-16" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      <Card className="border border-card-border" data-testid="kpi-total-segments">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Total Segments</p>
              <p className="text-xl font-display font-bold mt-1">{stats.totalSegments}</p>
            </div>
            <ProgressRing value={stats.averageProgress} />
          </div>
        </CardContent>
      </Card>

      <Card className="border border-card-border" data-testid="kpi-active-modules">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Active Modules</p>
              <p className="text-xl font-display font-bold mt-1">{stats.activeModules}<span className="text-sm text-muted-foreground font-normal">/{stats.totalModules}</span></p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Layers className="w-5 h-5 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-card-border" data-testid="kpi-tasks-completed">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Tasks Completed</p>
              <p className="text-xl font-display font-bold mt-1">{stats.completedTasks}<span className="text-sm text-muted-foreground font-normal">/{stats.totalTasks || "0"}</span></p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-card-border" data-testid="kpi-plan-status">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Plan Status</p>
              <Badge variant="outline" className="mt-2 text-xs border-primary text-primary">Phase 1 — Foundation</Badge>
            </div>
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
              <Flag className="w-5 h-5 text-amber-500" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function SegmentCard({ segment }: { segment: SegmentWithCount }) {
  const IconComponent = ICON_MAP[segment.icon];
  return (
    <Link href={`/segment/${segment.slug}`}>
      <Card className="border border-card-border hover:border-primary/30 transition-all duration-200 cursor-pointer group h-full" data-testid={`card-segment-${segment.slug}`}>
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              {IconComponent && (typeof IconComponent === "function" ? <IconComponent className="w-4.5 h-4.5 text-primary" /> : <IconComponent className="w-4 h-4 text-primary" />)}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-display font-bold truncate">{segment.name}</h3>
                <Badge variant={STATUS_VARIANTS[segment.status]} className="text-[10px] shrink-0 h-5">
                  {STATUS_LABELS[segment.status]}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{segment.description}</p>
              <div className="flex items-center gap-3">
                <Progress value={segment.progress} className="flex-1 h-1.5" />
                <span className="text-[10px] text-muted-foreground font-mono shrink-0">{segment.moduleCount} modules</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function Dashboard() {
  const { data: stats, isLoading: statsLoading } = useQuery<Stats>({
    queryKey: ["/api/stats"],
  });

  const { data: segments, isLoading: segLoading } = useQuery<SegmentWithCount[]>({
    queryKey: ["/api/segments"],
  });

  const strategies = segments?.filter(s => s.category === "strategy") || [];
  const operations = segments?.filter(s => s.category === "operations") || [];
  const intelligence = segments?.filter(s => s.category === "intelligence") || [];

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-xl font-display font-bold" data-testid="text-dashboard-title">Marketing Command Center</h1>
          <p className="text-sm text-muted-foreground mt-1">Monitor and execute your entire marketing plan from one place.</p>
        </div>

        {/* KPIs */}
        <KPICards stats={stats} />

        {/* Segment Grid */}
        {segLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="border border-card-border">
                <CardContent className="p-4"><Skeleton className="h-20" /></CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <>
            <div>
              <h2 className="text-sm font-display font-bold uppercase tracking-wider text-muted-foreground mb-3" data-testid="text-strategies-heading">Strategies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {strategies.map(s => <SegmentCard key={s.id} segment={s} />)}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-display font-bold uppercase tracking-wider text-muted-foreground mb-3" data-testid="text-operations-heading">Operations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {operations.map(s => <SegmentCard key={s.id} segment={s} />)}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-display font-bold uppercase tracking-wider text-muted-foreground mb-3" data-testid="text-intelligence-heading">Intelligence</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {intelligence.map(s => <SegmentCard key={s.id} segment={s} />)}
              </div>
            </div>
          </>
        )}

        {/* Quick Actions */}
        <Card className="border border-card-border" data-testid="card-quick-actions">
          <CardContent className="p-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-sm font-display font-bold">Ready to Launch?</h2>
                <p className="text-xs text-muted-foreground mt-1">Begin Phase 1 — Foundation to start building your marketing infrastructure.</p>
              </div>
              <Button className="shrink-0 gap-2" data-testid="button-start-phase1">
                <Zap className="w-4 h-4" /> Start Phase 1 <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Phase Timeline */}
            <div className="mt-5 pt-4 border-t border-border">
              <div className="flex items-center gap-1">
                {PHASES.map((phase, i) => (
                  <div key={phase.name} className="flex-1" data-testid={`phase-${i + 1}`}>
                    <div className={`h-1.5 rounded-full ${phase.active ? "bg-primary" : "bg-muted"} transition-colors`} />
                    <div className="mt-2 px-1">
                      <p className={`text-[10px] font-bold ${phase.active ? "text-primary" : "text-muted-foreground"}`}>{phase.name}</p>
                      <p className="text-[10px] text-muted-foreground">{phase.months}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
