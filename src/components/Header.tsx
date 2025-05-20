
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Menu, X } from 'lucide-react';
import LoginDialog from './LoginDialog';
import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Check if user is logged in
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email);
    }
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setUserEmail(null);
    window.location.reload();
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <header className="bg-background text-foreground py-4 shadow-md border-b border-border relative z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Foundrly</h1>
        </Link>
        
        {/* Mobile menu toggle */}
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        )}
        
        {/* Desktop navigation */}
        <nav className={`md:flex items-center gap-6 ${isMobile ? 'hidden' : 'flex'}`}>
          <Link to="/explore" className="text-foreground hover:text-primary transition-colors">
            Explore
          </Link>
          
          <Link to="/submit" className="text-foreground hover:text-primary transition-colors">
            Submit Idea
          </Link>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-foreground hover:text-primary mr-2"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          
          {userEmail ? (
            <div className="flex items-center gap-3">
              <Link to="/profile" className="text-foreground hover:text-primary transition-colors">
                Profile
              </Link>
              <Button 
                variant="ghost" 
                onClick={handleLogout}
                className="text-foreground hover:text-primary"
              >
                Log out
              </Button>
            </div>
          ) : (
            <Button 
              variant="ghost" 
              onClick={() => setShowLoginDialog(true)}
              className="text-foreground hover:text-primary"
            >
              Log in
            </Button>
          )}
        </nav>
        
        {/* Mobile navigation overlay */}
        {isMobile && mobileMenuOpen && (
          <div className="fixed inset-0 top-[73px] bg-background border-t border-border z-50 animate-fade-in">
            <nav className="flex flex-col gap-4 p-6">
              <Link 
                to="/explore" 
                className="text-foreground hover:text-primary transition-colors py-3 text-lg font-medium"
                onClick={closeMobileMenu}
              >
                Explore
              </Link>
              
              <Link 
                to="/submit" 
                className="text-foreground hover:text-primary transition-colors py-3 text-lg font-medium"
                onClick={closeMobileMenu}
              >
                Submit Idea
              </Link>
              
              <Link 
                to="/community" 
                className="text-foreground hover:text-primary transition-colors py-3 text-lg font-medium"
                onClick={closeMobileMenu}
              >
                Community
              </Link>
              
              {userEmail ? (
                <>
                  <Link 
                    to="/profile" 
                    className="text-foreground hover:text-primary transition-colors py-3 text-lg font-medium"
                    onClick={closeMobileMenu}
                  >
                    Profile
                  </Link>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      handleLogout();
                      closeMobileMenu();
                    }}
                    className="w-full justify-center mt-2"
                  >
                    Log out
                  </Button>
                </>
              ) : (
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setShowLoginDialog(true);
                    closeMobileMenu();
                  }}
                  className="w-full justify-center mt-2"
                >
                  Log in
                </Button>
              )}
              
              <div className="flex justify-center mt-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="text-foreground hover:text-primary"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      <LoginDialog 
        isOpen={showLoginDialog} 
        onClose={() => setShowLoginDialog(false)} 
      />
    </header>
  );
};

export default Header;
