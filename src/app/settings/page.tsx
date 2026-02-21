import { Navbar } from "@/components/dashboard/Navbar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Bell, Shield, User, Link2, Monitor, Globe } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 max-w-5xl py-8">
        <h1 className="text-3xl font-headline font-bold mb-8">Settings</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <nav className="lg:col-span-3 space-y-1">
            <Button variant="secondary" className="w-full justify-start gap-3 bg-primary/10 text-primary hover:bg-primary/20">
              <User className="w-4 h-4" /> Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:bg-secondary/50">
              <Shield className="w-4 h-4" /> Account & Security
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:bg-secondary/50">
              <Bell className="w-4 h-4" /> Notifications
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:bg-secondary/50">
              <Link2 className="w-4 h-4" /> Platform Connections
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:bg-secondary/50">
              <Monitor className="w-4 h-4" /> Appearance
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:bg-secondary/50">
              <Globe className="w-4 h-4" /> Language
            </Button>
          </nav>

          <div className="lg:col-span-9 space-y-6">
            <Card className="border-none shadow-sm bg-card">
              <CardHeader>
                <CardTitle className="text-xl font-headline">Public Profile</CardTitle>
                <CardDescription>This information will be displayed publicly to other coders.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="w-20 h-20 border-2 border-primary/20">
                    <AvatarImage src="https://picsum.photos/seed/me/200/200" />
                    <AvatarFallback>ID</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">Change Avatar</Button>
                    <p className="text-[10px] text-muted-foreground">JPG, GIF or PNG. Max size 2MB.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Ishaan" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Dev" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="ishaandev_99" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" placeholder="Tell us about your coding journey..." defaultValue="Full Stack Engineer passionate about algorithms and building scalable systems." />
                </div>
              </CardContent>
              <CardFooter className="border-t border-border/50 py-4">
                <Button className="bg-primary hover:bg-primary/90">Save Changes</Button>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-sm bg-card">
              <CardHeader>
                <CardTitle className="text-xl font-headline">Preferences</CardTitle>
                <CardDescription>Manage your app experience and visibility.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show solved problems count</Label>
                    <p className="text-xs text-muted-foreground">Display your total solved count on your profile preview.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-xs text-muted-foreground">Receive weekly progress summaries and friend activity.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Public Profile</Label>
                    <p className="text-xs text-muted-foreground">Allow others to search for and view your profile.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
    </div>
  );
}
