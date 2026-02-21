import { Navbar } from "@/components/dashboard/Navbar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Trophy, Medal, Crown } from "lucide-react";

const leaders = [
  { rank: 1, name: "Arjun Verma", score: 2450, solved: 842, avatar: "https://picsum.photos/seed/user1/100/100" },
  { rank: 2, name: "Priya Sharma", score: 2310, solved: 789, avatar: "https://picsum.photos/seed/user2/100/100" },
  { rank: 3, name: "Rohan Gupta", score: 2180, solved: 712, avatar: "https://picsum.photos/seed/user3/100/100" },
  { rank: 4, name: "Ananya Iyer", score: 1950, solved: 654, avatar: "https://picsum.photos/seed/user4/100/100" },
  { rank: 5, name: "Vikram Singh", score: 1820, solved: 612, avatar: "https://picsum.photos/seed/user5/100/100" },
  { rank: 6, name: "Sneha Patil", score: 1740, solved: 598, avatar: "https://picsum.photos/seed/user6/100/100" },
];

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 max-w-7xl py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-headline font-bold mb-2">Leaderboard</h1>
          <p className="text-muted-foreground">Celebrating the top coders in the CodeConnect community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {leaders.slice(0, 3).map((leader, i) => (
            <Card key={leader.rank} className={`border-none shadow-lg bg-card text-center ${i === 0 ? 'scale-110 z-10 md:-translate-y-4 border-t-4 border-primary' : ''}`}>
              <CardContent className="pt-8">
                <div className="relative inline-block mb-4">
                  <Avatar className="w-24 h-24 border-4 border-primary/10">
                    <AvatarImage src={leader.avatar} />
                    <AvatarFallback>{leader.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-2 text-primary-foreground shadow-lg">
                    {i === 0 ? <Crown className="w-6 h-6" /> : <Trophy className="w-6 h-6" />}
                  </div>
                </div>
                <h2 className="text-xl font-headline font-bold">{leader.name}</h2>
                <p className="text-sm text-muted-foreground mb-4">Rank #{leader.rank}</p>
                <div className="grid grid-cols-2 gap-4 border-t pt-4 border-border/50">
                  <div>
                    <div className="text-lg font-bold">{leader.score}</div>
                    <div className="text-[10px] text-muted-foreground uppercase">Points</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold">{leader.solved}</div>
                    <div className="text-[10px] text-muted-foreground uppercase">Solved</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="global" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-3 mb-8 mx-auto">
            <TabsTrigger value="global">Global</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          <TabsContent value="global" className="space-y-4">
            {leaders.slice(3).map((leader) => (
              <Card key={leader.rank} className="border-none shadow-sm bg-card hover:bg-secondary/20 transition-colors">
                <CardContent className="flex items-center gap-6 p-4">
                  <div className="text-2xl font-bold text-muted-foreground w-8">#{leader.rank}</div>
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={leader.avatar} />
                    <AvatarFallback>{leader.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">{leader.name}</h3>
                    <p className="text-xs text-muted-foreground">{leader.solved} problems solved</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">{leader.score}</div>
                    <div className="text-[10px] text-muted-foreground uppercase">Points</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
