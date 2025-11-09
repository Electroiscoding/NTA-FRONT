// src/pages/OnboardingPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

const steps = [
  {
    id: 1,
    title: 'Your Privacy, Fortified',
    content: (
      <>
        <p className="text-gray-600 text-center leading-relaxed">
          We believe your conversations are yours alone. Netuark uses state-of-the-art end-to-end encryption to secure your data.
        </p>
        <div className="space-y-6 mt-8">
          <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4">
            <div>
              <p className="font-semibold">Vanish Mode Default</p>
              <p className="text-sm text-gray-500">Messages disappear automatically.</p>
            </div>
            <div className="w-14 h-8 bg-blue-600 rounded-full flex items-center px-1">
              <div className="w-6 h-6 bg-white rounded-full shadow"></div>
            </div>
          </div>
          <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4">
            <div>
              <p className="font-semibold">Account Shield</p>
              <p className="text-sm text-gray-500">Extra layer of login security.</p>
            </div>
            <div className="w-14 h-8 bg-gray-200 rounded-full"></div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 text-center">
            <p className="font-semibold text-green-700">All Breach Alert</p>
            <p className="text-sm text-green-600">No threats detected.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: 'Tell us about yourself...',
    content: (
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="w-32 h-32 bg-amber-700 rounded-full flex items-center justify-center text-4xl">
            📷
          </div>
        </div>
        <input
          type="text"
          placeholder="Tell us about yourself..."
          maxLength={140}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 text-center"
        />
        <input
          type="text"
          placeholder="yournname.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 text-center"
        />
      </div>
    ),
  },
  {
    id: 3,
    title: 'Choose a Theme',
    content: (
      <div className="grid grid-cols-3 gap-4 mt-8">
        <button className="border-4 border-blue-600 rounded-3xl p-8">
          <div className="bg-white rounded-2xl h-32 flex flex-col items-center justify-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full mb-2"></div>
            <div className="h-2 bg-gray-300 w-20 rounded-full"></div>
          </div>
          <p className="mt-4 font-semibold">Light</p>
        </button>
        <button className="rounded-3xl p-8">
          <div className="bg-gray-800 rounded-2xl h-32 flex flex-col items-center justify-center">
            <div className="w-10 h-10 bg-gray-600 rounded-full mb-2"></div>
            <div className="h-2 bg-gray-600 w-20 rounded-full"></div>
          </div>
          <p className="mt-4 font-semibold">Dark</p>
        </button>
        <button className="rounded-3xl p-8">
          <div className="bg-black rounded-2xl h-32 flex flex-col items-center justify-center">
            <div className="w-10 h-10 bg-purple-600 rounded-full mb-2 animate-pulse"></div>
            <div className="h-2 bg-purple-500 w-20 rounded-full"></div>
          </div>
          <p className="mt-4 font-semibold">Neon</p>
        </button>
      </div>
    ),
  },
];

const OnboardingPage = () => {
  const { onboardingStep, setOnboardingStep, completeOnboarding, setTheme, setUser } = useUserStore();
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState('light');

  const current = steps.find((s) => s.id === onboardingStep);

  const next = () => {
    if (onboardingStep === 3) {
      setTheme(selectedTheme);
      completeOnboarding();
      setUser(null);
      navigate('/auth', { state: { message: 'Registration successful! Please log in.' } });
    } else {
      setOnboardingStep(onboardingStep + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between px-6 py-8">
      <div>
        <div className="flex justify-between items-center mb-8">
          <span className="text-lg font-semibold text-blue-600">{onboardingStep}/3</span>
          <button onClick={() => navigate('/')} className="text-purple-600 font-semibold">Skip</button>
        </div>

        <div className="mt-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{current.title}</h1>
          {current.content}
        </div>
      </div>

      <div className="mt-12">
        {onboardingStep === 3 && (
          <div className="flex justify-center gap-4 mb-8">
            {['light', 'dark', 'neon'].map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTheme(t)}
                className={`w-12 h-12 rounded-full border-4 ${selectedTheme === t ? 'border-blue-600' : 'border-transparent'}`}
              >
                <div className={`w-full h-full rounded-full ${t === 'light' ? 'bg-white' : t === 'dark' ? 'bg-gray-800' : 'bg-black'}`}></div>
              </button>
            ))}
          </div>
        )}

        <button
          onClick={next}
          className="w-full bg-blue-600 text-white font-semibold py-5 rounded-full hover:bg-blue-700 transition text-lg"
        >
          {onboardingStep === 3 ? 'Enter Netuark' : 'Continue'}
        </button>
      </div>
    </div>
  );
};

export default OnboardingPage;