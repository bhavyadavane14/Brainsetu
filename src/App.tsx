import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { BackToTopButton } from './components/layout/BackToTopButton';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { ProgramDetails } from './pages/ProgramDetails';
import { LearningApproach } from './pages/LearningApproach';
import { Technology } from './pages/Technology';
import { StudentDevelopment } from './pages/StudentDevelopment';
import { Parents } from './pages/Parents';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { LearningLab } from './pages/LearningLab';
import { NotFound } from './pages/NotFound';

// Inner layout that hides standard header/footer on full-screen portal & auth screens if desired
const AppLayout: React.FC = () => {
  const location = useLocation();
  const isPortalOrAuth = 
    location.pathname === '/learning-lab' ||
    location.pathname === '/login' ||
    location.pathname === '/signup';

  return (
    <div className="flex flex-col min-h-screen bg-brand-slate-bg text-brand-navy-800">
      {!isPortalOrAuth && <Navbar />}
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:slug" element={<ProgramDetails />} />
          <Route path="/learning-approach" element={<LearningApproach />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/student-development" element={<StudentDevelopment />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Authentication & Protected Student Lab */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route 
            path="/learning-lab" 
            element={
              <ProtectedRoute>
                <LearningLab />
              </ProtectedRoute>
            } 
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {!isPortalOrAuth && <Footer />}
      {!isPortalOrAuth && <BackToTopButton />}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <AppLayout />
      </AuthProvider>
    </Router>
  );
};

export default App;
