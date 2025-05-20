
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { X, Mail, Phone, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const Submit = () => {
  const { toast } = useToast();
  const { theme } = useTheme();
  
  const [technicalRequirements, setTechnicalRequirements] = useState<string[]>([]);
  const [currentTechReq, setCurrentTechReq] = useState('');
  
  const [keysChallenges, setKeysChallenges] = useState<string[]>([]);
  const [currentChallenge, setCurrentChallenge] = useState('');
  
  const [feedbackAreas, setFeedbackAreas] = useState<string[]>([]);
  const [currentFeedbackArea, setCurrentFeedbackArea] = useState('');
  
  const handleAddTechReq = () => {
    if (currentTechReq.trim()) {
      setTechnicalRequirements([...technicalRequirements, currentTechReq.trim()]);
      setCurrentTechReq('');
    }
  };
  
  const handleRemoveTechReq = (index: number) => {
    setTechnicalRequirements(technicalRequirements.filter((_, i) => i !== index));
  };
  
  const handleAddChallenge = () => {
    if (currentChallenge.trim()) {
      setKeysChallenges([...keysChallenges, currentChallenge.trim()]);
      setCurrentChallenge('');
    }
  };
  
  const handleRemoveChallenge = (index: number) => {
    setKeysChallenges(keysChallenges.filter((_, i) => i !== index));
  };
  
  const handleAddFeedbackArea = () => {
    if (currentFeedbackArea.trim()) {
      setFeedbackAreas([...feedbackAreas, currentFeedbackArea.trim()]);
      setCurrentFeedbackArea('');
    }
  };
  
  const handleRemoveFeedbackArea = (index: number) => {
    setFeedbackAreas(feedbackAreas.filter((_, i) => i !== index));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a backend
    toast({
      title: "Idea Submitted",
      description: "Your startup idea has been submitted for review. You'll receive feedback soon!",
    });
  };
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-cream text-navy'}`}>
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-3xl font-bold mb-6 text-center ${theme === 'light' ? 'text-teal' : ''}`}>
            Submit Your Startup Idea
          </h1>
          
          <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white/90'} rounded-lg shadow-md p-6 border ${theme === 'light' ? 'border-lavender/30' : 'border-gray-700'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title" className={`${theme === 'light' ? 'text-navy' : 'text-white'} flex items-center`}>
                  Title <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input 
                  id="title" 
                  placeholder="Enter your idea title" 
                  required 
                  className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-cream border-lavender/30 text-navy'}`}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description" className={`${theme === 'light' ? 'text-navy' : 'text-white'} flex items-center`}>
                  Description <span className="text-red-500 ml-1">*</span>
                </Label>
                <Textarea 
                  id="description" 
                  rows={5} 
                  placeholder="Describe your idea in detail" 
                  className={`w-full ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-cream border-lavender/30 text-navy'}`}
                  required
                />
              </div>
              
              {/* Contact Information Section */}
              <div className={`p-4 rounded-md ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-lavender/10'} mb-2`}>
                <h3 className={`text-xl font-bold mb-4 ${theme === 'light' ? 'text-navy' : 'text-white'}`}>
                  Contact Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className={`${theme === 'light' ? 'text-navy' : 'text-white'} flex items-center`}>
                      <User size={16} className="mr-2" />
                      Full Name <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input 
                      id="fullName" 
                      placeholder="Enter your name" 
                      required 
                      className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-cream border-lavender/30 text-navy'}`}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className={`${theme === 'light' ? 'text-navy' : 'text-white'} flex items-center`}>
                      <Mail size={16} className="mr-2" />
                      Email <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="Enter your email" 
                      required 
                      className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-cream border-lavender/30 text-navy'}`}
                    />
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <Label htmlFor="phone" className={`${theme === 'light' ? 'text-navy' : 'text-white'} flex items-center`}>
                    <Phone size={16} className="mr-2" />
                    Phone Number
                  </Label>
                  <Input 
                    id="phone" 
                    placeholder="Enter your phone number" 
                    className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-cream border-lavender/30 text-navy'}`}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="marketSize" className={`${theme === 'light' ? 'text-navy' : 'text-white'}`}>
                    Market Size <span className="text-xs text-gray-500">(Optional)</span>
                  </Label>
                  <Input 
                    id="marketSize" 
                    placeholder="e.g., $50B+" 
                    className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-cream border-lavender/30 text-navy'}`}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="marketPotential" className={`${theme === 'light' ? 'text-navy' : 'text-white'}`}>
                    Market Potential <span className="text-xs text-gray-500">(Optional)</span>
                  </Label>
                  <Input 
                    id="marketPotential" 
                    placeholder="e.g., High growth potential" 
                    className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-cream border-lavender/30 text-navy'}`}
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <Label className={`${theme === 'light' ? 'text-navy' : 'text-white'}`}>
                  Technical Requirements <span className="text-xs text-gray-500">(Optional)</span>
                </Label>
                
                <div className="flex space-x-2">
                  <Input 
                    value={currentTechReq}
                    onChange={(e) => setCurrentTechReq(e.target.value)}
                    placeholder="e.g., Mobile Development" 
                    className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-cream border-lavender/30 text-navy'}`}
                  />
                  <Button 
                    type="button" 
                    onClick={handleAddTechReq}
                    className={`${theme === 'dark' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal hover:bg-teal/80'} text-white`}
                  >
                    Add
                  </Button>
                </div>
                
                {technicalRequirements.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {technicalRequirements.map((req, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center gap-1 px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-lavender/20'}`}
                      >
                        <span className={`text-sm ${theme === 'light' ? 'text-navy' : 'text-white'}`}>{req}</span>
                        <button 
                          type="button" 
                          onClick={() => handleRemoveTechReq(index)}
                          className="p-1 rounded-full hover:bg-gray-700"
                        >
                          <X size={14} className={theme === 'light' ? 'text-navy' : 'text-white'} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="financialRequirement" className={`${theme === 'light' ? 'text-navy' : 'text-white'}`}>
                    Financial Requirement <span className="text-xs text-gray-500">(Optional)</span>
                  </Label>
                  <Input 
                    id="financialRequirement" 
                    placeholder="e.g., $500K initial investment" 
                    className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-cream border-lavender/30 text-navy'}`}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timeline" className={`${theme === 'light' ? 'text-navy' : 'text-white'}`}>
                    Timeline <span className="text-xs text-gray-500">(Optional)</span>
                  </Label>
                  <Input 
                    id="timeline" 
                    placeholder="e.g., 12 months to MVP" 
                    className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-cream border-lavender/30 text-navy'}`}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category" className={`${theme === 'light' ? 'text-navy' : 'text-white'}`}>
                  Category <span className="text-xs text-gray-500">(Optional)</span>
                </Label>
                <select 
                  id="category"
                  className={`w-full px-3 py-2 rounded-md ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-cream border-lavender/30 text-navy'}`}
                >
                  <option value="">Select a category</option>
                  <option value="fintech">FinTech</option>
                  <option value="healthtech">HealthTech</option>
                  <option value="edtech">EdTech</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="ai">AI & Machine Learning</option>
                  <option value="sustainability">Sustainability</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-3">
                <Label className={`${theme === 'light' ? 'text-navy' : 'text-white'}`}>
                  Key Challenges <span className="text-xs text-gray-500">(Optional)</span>
                </Label>
                
                <div className="flex space-x-2">
                  <Input 
                    value={currentChallenge}
                    onChange={(e) => setCurrentChallenge(e.target.value)}
                    placeholder="e.g., User adoption" 
                    className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-cream border-lavender/30 text-navy'}`}
                  />
                  <Button 
                    type="button" 
                    onClick={handleAddChallenge}
                    className={`${theme === 'dark' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal hover:bg-teal/80'} text-white`}
                  >
                    Add
                  </Button>
                </div>
                
                {keysChallenges.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {keysChallenges.map((challenge, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center gap-1 px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-lavender/20'}`}
                      >
                        <span className={`text-sm ${theme === 'light' ? 'text-navy' : 'text-white'}`}>{challenge}</span>
                        <button 
                          type="button" 
                          onClick={() => handleRemoveChallenge(index)}
                          className="p-1 rounded-full hover:bg-gray-700"
                        >
                          <X size={14} className={theme === 'light' ? 'text-navy' : 'text-white'} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Feedback Areas - new section */}
              <div className="space-y-3">
                <Label className={`${theme === 'light' ? 'text-navy' : 'text-white'}`}>
                  Areas You Want Feedback On <span className="text-xs text-gray-500">(Optional)</span>
                </Label>
                
                <div className="flex space-x-2">
                  <Input 
                    value={currentFeedbackArea}
                    onChange={(e) => setCurrentFeedbackArea(e.target.value)}
                    placeholder="e.g., Business model viability" 
                    className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-cream border-lavender/30 text-navy'}`}
                  />
                  <Button 
                    type="button" 
                    onClick={handleAddFeedbackArea}
                    className={`${theme === 'dark' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal hover:bg-teal/80'} text-white`}
                  >
                    Add
                  </Button>
                </div>
                
                {feedbackAreas.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {feedbackAreas.map((area, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center gap-1 px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-lavender/20'}`}
                      >
                        <span className={`text-sm ${theme === 'light' ? 'text-navy' : 'text-white'}`}>{area}</span>
                        <button 
                          type="button" 
                          onClick={() => handleRemoveFeedbackArea(index)}
                          className="p-1 rounded-full hover:bg-gray-700"
                        >
                          <X size={14} className={theme === 'light' ? 'text-navy' : 'text-white'} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tags" className={`${theme === 'light' ? 'text-navy' : 'text-white'}`}>
                  Tags <span className="text-xs text-gray-500">(Optional)</span>
                </Label>
                <Input 
                  id="tags" 
                  placeholder="Enter tags separated by commas" 
                  className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-cream border-lavender/30 text-navy'}`}
                />
              </div>
              
              {/* Preferred Feedback Method - new section */}
              <div className="space-y-2">
                <Label htmlFor="feedbackMethod" className={`${theme === 'light' ? 'text-navy' : 'text-white'}`}>
                  Preferred Feedback Method <span className="text-xs text-gray-500">(Optional)</span>
                </Label>
                <select 
                  id="feedbackMethod"
                  className={`w-full px-3 py-2 rounded-md ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-cream border-lavender/30 text-navy'}`}
                >
                  <option value="">Select preferred method</option>
                  <option value="email">Email</option>
                  <option value="call">Phone Call</option>
                  <option value="video">Video Meeting</option>
                  <option value="platform">Platform Messages</option>
                </select>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className={`w-full ${theme === 'dark' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal hover:bg-teal/80'} text-white`}
                >
                  Submit Idea for Validation
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </main>
      
      <footer className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-lavender/10'} py-6 mt-auto`}>
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className={theme === 'light' ? 'text-navy/70' : ''}>Foundrly &copy; {new Date().getFullYear()}</p>
          <p className={`text-sm mt-2 ${theme === 'light' ? 'text-navy/60' : ''}`}>Discover, collaborate, innovate</p>
        </div>
      </footer>
    </div>
  );
};

export default Submit;
