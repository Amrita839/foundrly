
import React, { useState } from 'react';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Users, Plus } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

type CreateCommunityFormValues = {
  name: string;
  description: string;
  category: string;
  rules: string;
};

const Community = () => {
  const { toast } = useToast();
  const { theme } = useTheme();
  const [communities, setCommunities] = useState<any[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const form = useForm<CreateCommunityFormValues>({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      rules: "",
    }
  });

  const onSubmit = (values: CreateCommunityFormValues) => {
    // In a real app, you would send this data to a backend
    setCommunities([...communities, { 
      id: Date.now().toString(),
      ...values, 
      members: 1,
      createdAt: new Date()
    }]);
    
    toast({
      title: "Community Created",
      description: `Your community "${values.name}" has been created!`,
    });
    
    setDialogOpen(false);
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section for Community page */}
        <motion.div 
          className="text-center mb-10 mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal via-lavender to-teal bg-clip-text text-transparent">Join a Community</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Connect with like-minded entrepreneurs and investors who share your interests
          </p>
        </motion.div>
        
        {/* Create Community Button */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-teal hover:bg-teal/80 text-white px-6 py-2 rounded-full flex items-center gap-2">
                <Plus size={20} />
                Create a Community
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Create a New Community</DialogTitle>
              </DialogHeader>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Community Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter community name" required />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            placeholder="Describe what your community is about" 
                            rows={3}
                            required
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <select 
                            {...field}
                            className="w-full px-3 py-2 rounded-md bg-background border border-border"
                            required
                          >
                            <option value="" disabled>Select a category</option>
                            <option value="fintech">FinTech</option>
                            <option value="healthtech">HealthTech</option>
                            <option value="edtech">EdTech</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="ai">AI & Machine Learning</option>
                            <option value="sustainability">Sustainability</option>
                            <option value="other">Other</option>
                          </select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="rules"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Community Guidelines</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            placeholder="Set some rules for your community members" 
                            rows={3}
                          />
                        </FormControl>
                        <FormDescription>
                          Optional: Share guidelines to help members know how to participate
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-end">
                    <Button 
                      type="submit"
                      className="bg-teal hover:bg-teal/80 text-white px-6"
                    >
                      Create Community
                    </Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </motion.div>
        
        {/* Community List */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {communities.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {communities.map((community) => (
                <div 
                  key={community.id}
                  className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2">{community.name}</h3>
                  <p className="text-foreground/70 mb-4">{community.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground/60">
                      {community.members} {community.members === 1 ? 'member' : 'members'}
                    </span>
                    <Button variant="outline" size="sm" className="border-teal text-teal hover:bg-teal/10">
                      Join
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-card rounded-xl border border-border shadow-sm">
              <Users className="w-16 h-16 mx-auto mb-4 text-foreground/30" />
              <h2 className="text-2xl font-bold mb-2">No Communities Yet</h2>
              <p className="text-foreground/70 mb-6">Be the first to create a community!</p>
            </div>
          )}
        </motion.div>
      </main>
      
      <footer className="bg-card py-4 mt-auto border-t border-border">
        <div className="container mx-auto px-4 text-center text-foreground/70">
          <p>Foundrly &copy; {new Date().getFullYear()}</p>
          <p className="text-sm mt-1">Discover, collaborate, innovate</p>
        </div>
      </footer>
    </div>
  );
};

export default Community;
