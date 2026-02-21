import { Navbar } from "@/components/dashboard/Navbar";
import { ProfilePreview } from "@/components/dashboard/ProfilePreview";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { Messenger } from "@/components/dashboard/Messenger";
import { PlatformConnector } from "@/components/dashboard/PlatformConnector";
import { Button } from "@/components/ui/button";
import { SquarePen, Code } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 max-w-7xl pt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column - Profile & Nav */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            <ProfilePreview />
          </div>

          {/* Middle Column - Activity Feed */}
          <div className="col-span-1 lg:col-span-6 space-y-6">
            <div className="bg-card rounded-xl p-4 shadow-sm space-y-4 border border-border/50">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary animate-pulse" />
                <div className="flex-1 bg-secondary/50 rounded-full flex items-center px-4 text-sm text-muted-foreground cursor-pointer hover:bg-secondary transition-colors">
                  Share a problem solution or thought...
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-border/50">
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm" className="text-xs text-muted-foreground gap-2">
                    <Code className="w-4 h-4 text-primary" /> Solve Problem
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs text-muted-foreground gap-2">
                    <SquarePen className="w-4 h-4 text-orange-500" /> Write Article
                  </Button>
                </div>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs px-6">
                  Post
                </Button>
              </div>
            </div>

            <ActivityFeed />
          </div>

          {/* Right Column - Messaging & Utils */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            <PlatformConnector />
            <Messenger />
          </div>

        </div>
      </main>
    </div>
  );
}
