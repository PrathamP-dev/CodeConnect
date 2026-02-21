"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsUp, Share2, ExternalLink, Code } from "lucide-react";

const activities = [
  {
    id: 1,
    user: {
      name: "Arjun Verma",
      username: "@averma",
      avatar: "https://picsum.photos/seed/user1/200/200",
    },
    platform: "LeetCode",
    problem: "Two Sum",
    difficulty: "Easy",
    time: "2 hours ago",
    language: "Python",
    comment: "Finally cracked this one with O(n) space complexity! Excited to keep moving forward.",
  },
  {
    id: 2,
    user: {
      name: "Priya Sharma",
      username: "@priya_codes",
      avatar: "https://picsum.photos/seed/user2/200/200",
    },
    platform: "Codeforces",
    problem: "B. Longest Divisors Interval",
    difficulty: "Medium",
    time: "4 hours ago",
    language: "C++",
    comment: "Interesting number theory problem from the latest contest.",
  },
  {
    id: 3,
    user: {
      name: "Rohan Gupta",
      username: "@rgupta_dev",
      avatar: "https://picsum.photos/seed/user3/200/200",
    },
    platform: "LeetCode",
    problem: "Longest Palindromic Substring",
    difficulty: "Hard",
    time: "Yesterday",
    language: "Java",
    comment: "Dynamic programming approach is definitely the way to go here.",
  },
];

export function ActivityFeed() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <Card key={activity.id} className="border-none shadow-sm hover:shadow-md transition-shadow bg-card">
          <CardHeader className="flex flex-row items-start space-y-0 gap-4 p-4">
            <Avatar className="w-12 h-12 border-2 border-primary/10">
              <AvatarImage src={activity.user.avatar} />
              <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold truncate leading-none mb-1">{activity.user.name}</h3>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{activity.user.username}</p>
              <div className="flex gap-2">
                <Badge variant="secondary" className="text-[10px] py-0 px-2 h-5 bg-primary/5 text-primary border-primary/20">
                  {activity.platform}
                </Badge>
                <Badge variant="outline" className="text-[10px] py-0 px-2 h-5">
                  {activity.language}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0 space-y-4">
            <div className="bg-secondary/30 rounded-lg p-4 border border-border/50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  <span className="font-headline font-semibold text-sm">{activity.problem}</span>
                </div>
                <Badge 
                  className={`text-[10px] font-bold ${
                    activity.difficulty === 'Easy' ? 'bg-green-500/10 text-green-600 border-green-200' :
                    activity.difficulty === 'Medium' ? 'bg-orange-500/10 text-orange-600 border-orange-200' :
                    'bg-red-500/10 text-red-600 border-red-200'
                  }`}
                  variant="outline"
                >
                  {activity.difficulty}
                </Badge>
              </div>
              <p className="text-sm text-foreground/80 italic">"{activity.comment}"</p>
              <Button variant="ghost" size="sm" className="w-full mt-3 text-xs text-primary hover:text-primary/80 hover:bg-primary/5">
                View Solution <ExternalLink className="ml-1 w-3 h-3" />
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-2 border-t border-border/50">
              <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                <ThumbsUp className="w-4 h-4" /> 24
              </button>
              <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="w-4 h-4" /> 12
              </button>
              <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" /> 3
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
