
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { UserRound, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { StartupIdea } from '@/types/types';

const Profile = () => {
  const userEmail = localStorage.getItem('userEmail');
  const [userIdeas, setUserIdeas] = useState<StartupIdea[]>([]);
  
  // Simulate fetching user's submitted ideas
  useEffect(() => {
    // In a real app, this would be a fetch from an API/database
    const mockUserIdeas = localStorage.getItem('userSubmittedIdeas');
    if (mockUserIdeas) {
      try {
        setUserIdeas(JSON.parse(mockUserIdeas));
      } catch (e) {
        console.error("Error parsing stored ideas:", e);
        setUserIdeas([]);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center text-foreground">
                <UserRound size={48} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">User Profile</h2>
                <p className="text-foreground/70">{userEmail || 'Not logged in'}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">My Submitted Ideas</h3>
              <Link to="/submit">
                <Button className="bg-teal hover:bg-teal/80 text-white flex items-center gap-2">
                  <Plus size={16} />
                  Submit New Idea
                </Button>
              </Link>
            </div>
            
            {userIdeas.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-4">
                {userIdeas.map((idea) => (
                  <Card key={idea.id} className="border border-border hover:border-teal/50 transition-colors">
                    <CardHeader>
                      <CardTitle>{idea.title}</CardTitle>
                      <CardDescription>{idea.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3 text-sm text-foreground/70">{idea.description}</p>
                      <div className="flex gap-2 mt-4 flex-wrap">
                        {idea.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border border-dashed border-border rounded-lg">
                <p className="text-foreground/70 mb-4">You haven't submitted any ideas yet.</p>
                <Link to="/submit">
                  <Button className="bg-teal hover:bg-teal/80 text-white flex items-center gap-2">
                    <Plus size={16} />
                    Submit Your First Idea
                  </Button>
                </Link>
              </div>
            )}
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-6 mt-8">
            <h3 className="text-xl font-semibold mb-4">Activity</h3>
            <p className="text-foreground/70">
              Your liked ideas and feedback activity will appear here.
            </p>
          </div>
        </div>
      </main>
      
      <footer className="bg-card py-6 mt-auto border-t border-border">
        <div className="container mx-auto px-4 text-center text-foreground/70">
          <p>Foundrly &copy; {new Date().getFullYear()}</p>
          <p className="text-sm mt-2">Discover, collaborate, innovate</p>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
