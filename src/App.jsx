// src/App.jsx
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useUserStore } from './store/userStore';
import { lazy, Suspense, useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';

// Lazy load pages for better performance
const AuthPage = lazy(() => import('./pages/AuthPage'));
const OnboardingPage = lazy(() => import('./pages/OnboardingPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ChatList = lazy(() => import('./pages/ChatList'));
const ChatScreen = lazy(() => import('./pages/ChatScreen'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const CallScreen = lazy(() => import('./pages/CallScreen'));
const CreatorHub = lazy(() => import('./pages/CreatorHub'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const UserProfileView = lazy(() => import('./pages/UserProfileView'));
const Feed = lazy(() => import('./pages/Feed'));

// Page transition wrapper
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
    className="min-h-screen w-full"
  >
    {children}
  </motion.div>
);

// Loading component for Suspense
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white">
    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  const { user, onboardingCompleted } = useUserStore();
  const location = useLocation();
  const isAuthenticated = !!user; // User is authenticated if user object exists
  const [showSplash, setShowSplash] = useState(true);
  
  // Hide splash screen after it finishes
  const handleSplashFinish = () => {
    setShowSplash(false);
  };
  
  // Show onboarding only if user exists but onboarding is not completed
  const shouldShowOnboarding = isAuthenticated && !onboardingCompleted;

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <Suspense fallback={<LoadingFallback />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/feed" replace />
              ) : (
                <Navigate to="/auth" replace />
              )
            }
          />
          <Route
            path="/auth"
            element={
              isAuthenticated ? (
                <Navigate to="/feed" replace />
              ) : (
                <PageTransition>
                  <AuthPage />
                </PageTransition>
              )
            }
          />
          <Route
            path="/onboarding"
            element={
              shouldShowOnboarding ? (
                <PageTransition><OnboardingPage /></PageTransition>
              ) : isAuthenticated ? (
                <Navigate to="/feed" replace />
              ) : (
                <Navigate to="/auth" replace state={{ from: location }} />
              )
            }
          />
          <Route
            path="/feed"
            element={
              isAuthenticated ? (
                <PageTransition><Feed /></PageTransition>
              ) : (
                <Navigate to="/auth" replace state={{ from: location }} />
              )
            }
          />
          {/* Keep home route for backward compatibility, but redirect to feed */}
          <Route
            path="/home"
            element={
              <Navigate to="/feed" replace />
            }
          />
          <Route
            path="/chat"
            element={
              isAuthenticated ? (
                <PageTransition><ChatList /></PageTransition>
              ) : (
                <Navigate to="/auth" replace state={{ from: location }} />
              )
            }
          />
          <Route
            path="/chat/:chatId"
            element={
              isAuthenticated ? (
                <PageTransition><ChatScreen /></PageTransition>
              ) : (
                <Navigate to="/auth" replace state={{ from: location }} />
              )
            }
          />
          <Route
            path="/settings"
            element={
              isAuthenticated ? (
                <PageTransition><SettingsPage /></PageTransition>
              ) : (
                <Navigate to="/auth" replace state={{ from: location }} />
              )
            }
          />
          <Route
            path="/call/:callId"
            element={
              isAuthenticated ? (
                <PageTransition><CallScreen /></PageTransition>
              ) : (
                <Navigate to="/auth" replace state={{ from: location }} />
              )
            }
          />
          <Route
            path="/creator-hub"
            element={
              isAuthenticated ? (
                <PageTransition><CreatorHub /></PageTransition>
              ) : (
                <Navigate to="/auth" replace state={{ from: location }} />
              )
            }
          />
          <Route
            path="/profile"
            element={
              isAuthenticated ? (
                <PageTransition><UserProfile /></PageTransition>
              ) : (
                <Navigate to="/auth" replace state={{ from: location }} />
              )
            }
          />
          <Route
            path="/:username"
            element={
              isAuthenticated ? (
                <PageTransition><UserProfileView /></PageTransition>
              ) : (
                <Navigate to="/auth" replace state={{ from: location }} />
              )
            }
          />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}

export default App;