// src/store/userStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      onboardingStep: 1,
      onboardingCompleted: false,
      theme: 'light',

      // Set user and save to local storage
      setUser: (userData) => {
        set({ 
          user: userData,
          // If user is logging in (not registering), set onboardingCompleted from userData
          ...(userData.onboardingCompleted !== undefined && { onboardingCompleted: userData.onboardingCompleted })
        });
      },
      
      setOnboardingStep: (step) => set({ onboardingStep: step }),
      
      completeOnboarding: () => {
        const currentUser = get().user;
        if (currentUser) {
          // Update user in local storage
          const updatedUser = { ...currentUser, onboardingCompleted: true };
          localStorage.setItem(`user_${currentUser.username}`, JSON.stringify(updatedUser));
          
          // Update state
          set({ 
            user: updatedUser,
            onboardingCompleted: true 
          });
        }
      },
      
      logout: () => {
        set({ 
          user: null,
          onboardingCompleted: false,
          onboardingStep: 1
        });
      },
      
      setTheme: (theme) => {
        set({ theme });
        // Apply theme classes to <html>
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.classList.toggle('neon', theme === 'neon');
      },
    }),
    {
      name: 'user-storage', // unique name for localStorage key
      storage: createJSONStorage(() => localStorage), // use localStorage
      partialize: (state) => ({
        user: state.user,
        onboardingCompleted: state.onboardingCompleted,
        theme: state.theme,
      }),
    }
  )
);

export { useUserStore };