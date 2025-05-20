
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface LoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

const LoginDialog: React.FC<LoginDialogProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would typically connect to a backend service
    // For now we'll just simulate a successful login/signup
    
    const action = isLogin ? "login" : "signup";
    
    // Simulate processing time
    setTimeout(() => {
      toast({
        title: isLogin ? "Login Successful" : "Account Created",
        description: `${action === "login" ? "Logged in" : "Signed up"} with ${values.email}`,
      });
      
      // Store email in localStorage to simulate authentication
      localStorage.setItem('userEmail', values.email);
      
      // Close the dialog
      onClose();
      
      // Reload the page to reflect logged in state
      window.location.reload();
    }, 1000);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-white">{isLogin ? "Log in" : "Sign up"}</DialogTitle>
          <DialogDescription className="text-gray-400">
            {isLogin 
              ? "Enter your email to log in to your account." 
              : "Enter your email to create a new account."}
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="example@email.com" 
                      {...field} 
                      className="bg-gray-800 border-gray-700 text-white" 
                    />
                  </FormControl>
                  <FormDescription className="text-gray-500">
                    We'll never share your email with anyone else.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsLogin(!isLogin)}
                className="w-full sm:w-auto bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                {isLogin ? "Need an account?" : "Already have an account?"}
              </Button>
              <Button 
                type="submit" 
                className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white"
              >
                {isLogin ? "Log in" : "Sign up"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
