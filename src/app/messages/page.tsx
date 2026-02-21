"use client"

import { Navbar } from "@/components/dashboard/Navbar";
import { Messenger } from "@/components/dashboard/Messenger";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Phone, Video, Info, MoreVertical, Paperclip, Smile } from "lucide-react";
import { useState } from "react";

const currentConversation = [
  { id: 1, senderId: 'me', text: "Hey Priya, how did you tackle that dynamic programming problem today?", time: "2:30 PM" },
  { id: 2, senderId: '2', text: "I used a bottom-up approach with memoization. The complexity was O(n*m).", time: "2:32 PM" },
  { id: 3, senderId: 'me', text: "Ah, I was trying recursion with a cache but I kept hitting a stack overflow on larger inputs.", time: "2:33 PM" },
  { id: 4, senderId: '2', text: "Yeah, the constraints were a bit tight. Try the iterative version!", time: "2:35 PM" },
];

export default function MessagesPage() {
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 max-w-7xl pt-4 pb-8 h-[calc(100vh-4rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-start">
          
          <div className="hidden lg:block lg:col-span-4 h-full">
            <Messenger />
          </div>

          <Card className="col-span-1 lg:col-span-8 h-full border-none shadow-sm flex flex-col bg-card overflow-hidden">
            <CardHeader className="p-4 border-b border-border/50 flex flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 border border-primary/10">
                  <AvatarImage src="https://picsum.photos/seed/user2/100/100" />
                  <AvatarFallback>PS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-semibold leading-none">Priya Sharma</h3>
                  <p className="text-[10px] text-green-500 font-medium">Online</p>
                </div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground"><Phone className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground"><Video className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground"><Info className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground"><MoreVertical className="w-4 h-4" /></Button>
              </div>
            </CardHeader>

            <CardContent className="flex-1 p-0 overflow-hidden flex flex-col">
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-6">
                  {currentConversation.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.senderId === 'me' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[70%] rounded-2xl px-4 py-2 text-sm ${
                        msg.senderId === 'me' 
                          ? 'bg-primary text-primary-foreground rounded-tr-none' 
                          : 'bg-secondary text-secondary-foreground rounded-tl-none'
                      }`}>
                        <p>{msg.text}</p>
                        <span className={`text-[9px] mt-1 block opacity-70 ${msg.senderId === 'me' ? 'text-right' : 'text-left'}`}>
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="p-4 border-t border-border/50 bg-secondary/10">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="shrink-0 h-9 w-9 text-muted-foreground"><Paperclip className="w-4 h-4" /></Button>
                  <div className="flex-1 relative">
                    <Input 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type a message..." 
                      className="pr-10 bg-card border-none shadow-none focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                    <Button variant="ghost" size="icon" className="absolute right-1 top-0.5 h-8 w-8 text-muted-foreground"><Smile className="w-4 h-4" /></Button>
                  </div>
                  <Button size="icon" className="shrink-0 h-9 w-9 bg-primary">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
}
