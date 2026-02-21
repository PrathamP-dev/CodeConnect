import { Code2, Bell, MessageSquare, User, Search, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 max-w-7xl h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="p-1.5 bg-primary rounded-lg">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-headline font-bold hidden sm:block tracking-tight">CodeConnect</span>
          </Link>
          
          <div className="relative ml-4 hidden md:block w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search problems, friends..." 
              className="pl-9 h-10 w-full bg-secondary/50 border-none shadow-none focus-visible:ring-1 focus-visible:ring-primary/20"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-4">
          <Button variant="ghost" size="icon" asChild className="hidden sm:flex text-muted-foreground hover:text-primary relative">
            <Link href="/"><Home className="w-5 h-5" /></Link>
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-background" />
          </Button>
          <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary">
            <Link href="/messages"><MessageSquare className="w-5 h-5" /></Link>
          </Button>
          
          <div className="w-px h-6 bg-border mx-1 hidden sm:block" />
          
          <Link href="/profile" className="flex items-center gap-2 ml-1 cursor-pointer">
            <Avatar className="w-8 h-8 border-2 border-primary/20">
              <AvatarImage src="https://picsum.photos/seed/me/200/200" />
              <AvatarFallback>ID</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium hidden lg:block">Ishaan Dev</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
