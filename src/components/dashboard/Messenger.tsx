"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const friends = [
  { id: 1, name: "Priya Sharma", status: "online", avatar: "https://picsum.photos/seed/user2/100/100", lastMessage: "How did you solve the Hard problem?" },
  { id: 2, name: "Rohan Gupta", status: "offline", avatar: "https://picsum.photos/seed/user3/100/100", lastMessage: "Check out this repo!" },
  { id: 3, name: "Ananya Iyer", status: "online", avatar: "https://picsum.photos/seed/user4/100/100", lastMessage: "Let's code together tonight." },
  { id: 4, name: "Vikram Singh", status: "online", avatar: "https://picsum.photos/seed/user5/100/100", lastMessage: "Thanks for the help!" },
  { id: 5, name: "Sneha Patil", status: "offline", avatar: "https://picsum.photos/seed/user6/100/100", lastMessage: "Sent you the solution link." },
];

export function Messenger() {
  return (
    <Card className="border-none shadow-sm h-[calc(100vh-6rem)] sticky top-20 bg-card overflow-hidden flex flex-col">
      <CardHeader className="p-4 border-b border-border/50">
        <CardTitle className="text-sm font-headline flex items-center justify-between">
          Messages
          <Badge variant="secondary" className="text-[10px] h-5 bg-accent/20 text-accent-foreground border-accent/20">3 New</Badge>
        </CardTitle>
        <div className="relative mt-2">
          <Search className="absolute left-2 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
          <Input placeholder="Search friends..." className="pl-8 h-8 text-xs bg-secondary/30 border-none" />
        </div>
      </CardHeader>
      <CardContent className="p-0 flex-1">
        <ScrollArea className="h-full">
          <div className="p-2 space-y-1">
            {friends.map((friend) => (
              <div
                key={friend.id}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors group"
              >
                <div className="relative">
                  <Avatar className="w-10 h-10 border border-primary/5">
                    <AvatarImage src={friend.avatar} />
                    <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {friend.status === 'online' && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card shadow-sm" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold truncate leading-none mb-1 group-hover:text-primary transition-colors">{friend.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{friend.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 px-4 pb-2">
            <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Coding Groups</h4>
            <div className="space-y-1">
              {["Algorithm Masters", "LeetCode Daily", "React Enthusiasts"].map((group, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs border border-primary/20">
                    #
                  </div>
                  <span className="text-sm font-medium text-muted-foreground truncate">{group}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
