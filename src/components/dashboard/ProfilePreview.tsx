import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Code2, Trophy, Users, LayoutDashboard, MessageSquare, Settings } from "lucide-react";
import Link from 'next/link';

export function ProfilePreview() {
  return (
    <div className="space-y-4">
      <Card className="border-none shadow-sm overflow-hidden bg-card">
        <div className="h-20 bg-primary relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-50" />
        </div>
        <CardContent className="relative px-4 pb-4">
          <div className="flex flex-col items-center -mt-10">
            <Avatar className="w-20 h-20 border-4 border-background shadow-lg">
              <AvatarImage src="https://picsum.photos/seed/me/200/200" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-center mt-3">
              <h2 className="text-lg font-headline font-bold">John Dev</h2>
              <p className="text-xs text-muted-foreground">Full Stack Engineer @ TechCorp</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mt-6 py-4 border-y border-border/50">
            <div className="text-center">
              <div className="text-sm font-bold">142</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Solved</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold">1.2k</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Rank</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold">854</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Friends</div>
            </div>
          </div>

          <div className="mt-4">
            <Button asChild variant="outline" className="w-full text-xs font-medium border-primary/20 hover:bg-primary/5 text-primary">
              <Link href="/profile">View Full Profile</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm bg-card p-2">
        <nav className="space-y-1">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary transition-colors">
            <LayoutDashboard className="w-4 h-4" /> Feed
          </Link>
          <Link href="/problems" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors">
            <Code2 className="w-4 h-4" /> Problems
          </Link>
          <Link href="/leaderboard" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors">
            <Trophy className="w-4 h-4" /> Leaderboard
          </Link>
          <Link href="/communities" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors">
            <Users className="w-4 h-4" /> Communities
          </Link>
          <Link href="/messages" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors">
            <MessageSquare className="w-4 h-4" /> Messages
          </Link>
          <Link href="/settings" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors">
            <Settings className="w-4 h-4" /> Settings
          </Link>
        </nav>
      </Card>
    </div>
  );
}
