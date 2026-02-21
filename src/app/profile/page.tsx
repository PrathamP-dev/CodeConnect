import { Navbar } from "@/components/dashboard/Navbar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Github, Twitter, Linkedin, ExternalLink, Calendar, MapPin, Link as LinkIcon, Edit3 } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="h-64 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
      </div>

      <main className="container mx-auto px-4 max-w-5xl -mt-32 relative z-10 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-4 space-y-6">
            <Card className="border-none shadow-xl bg-card overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-32 h-32 border-4 border-background shadow-lg mb-4">
                    <AvatarImage src="https://picsum.photos/seed/me/200/200" />
                    <AvatarFallback>ID</AvatarFallback>
                  </Avatar>
                  <h1 className="text-2xl font-headline font-bold">Ishaan Dev</h1>
                  <p className="text-muted-foreground text-sm mb-4">Full Stack Engineer @ TechCorp</p>
                  
                  <div className="flex gap-2 mb-6">
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full"><Github className="w-4 h-4" /></Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full"><Twitter className="w-4 h-4" /></Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full"><Linkedin className="w-4 h-4" /></Button>
                  </div>

                  <Button className="w-full gap-2 mb-4">
                    <Edit3 className="w-4 h-4" /> Edit Profile
                  </Button>
                </div>

                <div className="space-y-3 pt-6 border-t border-border/50 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Bengaluru, India</div>
                  <div className="flex items-center gap-3"><Calendar className="w-4 h-4" /> Joined March 2024</div>
                  <div className="flex items-center gap-3"><LinkIcon className="w-4 h-4" /> <a href="#" className="text-primary hover:underline">ishaandev.io</a></div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-card">
              <CardHeader><CardTitle className="text-sm">Skills & Tech</CardTitle></CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "C++", "Python", "PostgreSQL", "Tailwind"].map(skill => (
                  <Badge key={skill} variant="secondary" className="text-[10px] font-medium">{skill}</Badge>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Solved", value: "842", sub: "+12 this month" },
                { label: "Global Rank", value: "#1.2k", sub: "Top 2%" },
                { label: "Streak", value: "45", sub: "days" },
                { label: "Communities", value: "14", sub: "active" }
              ].map((stat, i) => (
                <Card key={i} className="border-none shadow-sm bg-card text-center p-4">
                  <div className="text-2xl font-bold font-headline">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">{stat.label}</div>
                  <div className="text-[10px] text-green-600 mt-1 font-medium">{stat.sub}</div>
                </Card>
              ))}
            </div>

            <Card className="border-none shadow-sm bg-card min-h-[400px]">
              <CardContent className="p-6">
                <Tabs defaultValue="activity">
                  <TabsList className="mb-6">
                    <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                    <TabsTrigger value="achievements">Achievements</TabsTrigger>
                    <TabsTrigger value="solutions">My Solutions</TabsTrigger>
                  </TabsList>
                  <TabsContent value="activity" className="space-y-6">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex gap-4 p-4 rounded-lg bg-secondary/20 border border-border/30">
                        <div className="p-2 bg-primary/10 rounded-lg h-fit"><LinkIcon className="w-5 h-5 text-primary" /></div>
                        <div>
                          <h4 className="font-semibold text-sm">Solved "Merge Interval" on LeetCode</h4>
                          <p className="text-xs text-muted-foreground mt-1">Difficulty: Hard • 2 hours ago</p>
                          <Button variant="link" className="p-0 h-auto text-xs mt-2 text-primary">View submission <ExternalLink className="w-3 h-3 ml-1" /></Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
    </div>
  );
}
