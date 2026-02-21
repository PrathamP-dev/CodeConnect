import { Navbar } from "@/components/dashboard/Navbar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Search, Filter, ExternalLink, Code2 } from "lucide-react";

const problems = [
  { id: "1", title: "Two Sum", difficulty: "Easy", platform: "LeetCode", category: "Arrays", solved: true },
  { id: "2", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", platform: "LeetCode", category: "Sliding Window", solved: false },
  { id: "3", title: "Merge k Sorted Lists", difficulty: "Hard", platform: "LeetCode", category: "Heaps", solved: false },
  { id: "4", title: "Watering Flowers", difficulty: "Medium", platform: "Codeforces", category: "Greedy", solved: true },
  { id: "5", title: "Maximum Subarray Sum", difficulty: "Easy", platform: "Codeforces", category: "Math", solved: true },
  { id: "6", title: "Binary Tree Level Order Traversal", difficulty: "Medium", platform: "LeetCode", category: "Trees", solved: false },
];

export default function ProblemsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 max-w-7xl py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-headline font-bold tracking-tight">Coding Problems</h1>
            <p className="text-muted-foreground">Browse and track problems across multiple platforms.</p>
          </div>
          <div className="flex gap-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search problems..." className="pl-9 bg-card" />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" /> Filter
            </Button>
          </div>
        </div>

        <Card className="border-none shadow-sm bg-card">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%]">Problem Name</TableHead>
                  <TableHead>Platform</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {problems.map((problem) => (
                  <TableRow key={problem.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {problem.title}
                        {problem.solved && (
                          <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 text-[10px]">Solved</Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{problem.platform}</TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline"
                        className={
                          problem.difficulty === "Easy" ? "text-green-600 border-green-200" :
                          problem.difficulty === "Medium" ? "text-orange-600 border-orange-200" :
                          "text-red-600 border-red-200"
                        }
                      >
                        {problem.difficulty}
                      </Badge>
                    </TableCell>
                    <TableCell>{problem.category}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="gap-2 text-primary">
                        View <ExternalLink className="w-3 h-3" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
