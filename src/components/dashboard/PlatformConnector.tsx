"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

const platforms = [
  { id: 'leetcode', name: 'LeetCode', icon: 'LC', connected: true, handle: 'jdev_99' },
  { id: 'codeforces', name: 'Codeforces', icon: 'CF', connected: false, handle: '' },
  { id: 'github', name: 'GitHub', icon: 'GH', connected: true, handle: 'johndev' },
];

export function PlatformConnector() {
  const [handle, setHandle] = useState("");

  return (
    <Card className="border-none shadow-sm bg-card mb-6 overflow-hidden">
      <div className="bg-primary/5 p-4 border-b border-primary/10">
        <h3 className="text-sm font-headline font-semibold flex items-center gap-2 text-primary">
          <Link2 className="w-4 h-4" /> Connect Platforms
        </h3>
        <p className="text-[10px] text-muted-foreground">Link your profiles to sync your coding activity automatically.</p>
      </div>
      <CardContent className="p-4 space-y-4">
        {platforms.map((platform) => (
          <div key={platform.id} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-background border border-border flex items-center justify-center font-bold text-[10px]">
                {platform.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold">{platform.name}</span>
                {platform.connected ? (
                  <span className="text-[10px] text-green-600 flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5" /> {platform.handle}
                  </span>
                ) : (
                  <span className="text-[10px] text-muted-foreground">Not connected</span>
                )}
              </div>
            </div>
            {platform.connected ? (
              <Button variant="ghost" size="sm" className="h-7 text-[10px] px-2 text-muted-foreground">Edit</Button>
            ) : (
              <Button size="sm" className="h-7 text-[10px] px-2 bg-primary hover:bg-primary/90">Connect</Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
