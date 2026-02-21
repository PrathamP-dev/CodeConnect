import { Navbar } from "@/components/dashboard/Navbar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Globe, Lock, Plus } from "lucide-react";

const communities = [
  { id: 1, name: "Algorithm Masters", description: "Deep dive into complex algorithms and data structures.", members: "12.4k", type: "Public", tag: "Competitive" },
  { id: 2, name: "React Enthusiasts India", description: "Building the next generation of web apps with React.", members: "8.2k", type: "Public", tag: "Web Dev" },
  { id: 3, name: "LeetCode Daily", description: "Daily problem solving and discussion for interview prep.", members: "45k", type: "Public", tag: "Preparation" },
  { id: 4, name: "C++ Ninjas", description: "Mastering the power of C++ for performance-critical apps.", members: "5.6k", type: "Private", tag: "Systems" },
  { id: 5, name: "Python Automation", description: "Automating everything with Python scripts and tools.", members: "15.1k", type: "Public", tag: "Scripting" },
  { id: 6, name: "Cloud Architects", description: "Discussing AWS, Azure, and Google Cloud infrastructure.", members: "3.2k", type: "Public", tag: "DevOps" },
];

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 max-w-7xl py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-headline font-bold">Communities</h1>
            <p className="text-muted-foreground">Join groups that match your interests and expertise.</p>
          </div>
          <Button className="gap-2 bg-primary">
            <Plus className="w-4 h-4" /> Create Community
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community) => (
            <Card key={community.id} className="border-none shadow-sm hover:shadow-md transition-shadow bg-card flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    {community.name[0]}
                  </div>
                  <Badge variant="secondary" className="text-[10px]">
                    {community.tag}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-headline">{community.name}</CardTitle>
                <CardDescription className="line-clamp-2">{community.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" /> {community.members}
                  </div>
                  <div className="flex items-center gap-1">
                    {community.type === 'Public' ? <Globe className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                    {community.type}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  Join Community
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
