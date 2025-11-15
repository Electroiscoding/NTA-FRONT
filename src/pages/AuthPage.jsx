// src/pages/AuthPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';
import MarsEmoji from '../components/MarsEmoji';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: '',
    name: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const setUser = useUserStore((s) => s.setUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!form.email || !form.password) {
      return setError('Email and password are required');
    }

    if (!isLogin) {
      // Registration flow
      if (!form.username) return setError('Username is required');
      if (form.username.length < 3)
        return setError('Username must be at least 3 characters');
      if (form.password.length < 6)
        return setError('Password must be at least 6 characters');

      // Check if username is already taken
      const existingUser = localStorage.getItem(`user_${form.username}`);
      if (existingUser) return setError('Username already taken');

      // Create new user
      const userData = {
        id: `user_${Date.now()}`,
        email: form.email,
        username: form.username,
        name: form.name || form.username,
        onboardingCompleted: false, // New users need to complete onboarding
        createdAt: new Date().toISOString(),
      };

      try {
        // Save user to localStorage
        localStorage.setItem(`user_${form.username}`, JSON.stringify(userData));
        // Also save user by email for login
        localStorage.setItem(`user_email_${form.email}`, form.username);

        // Set user in the store and redirect to onboarding
        setUser(userData);
        navigate('/onboarding');
      } catch (err) {
        console.error('Registration error:', err);
        setError('Failed to create account. Please try again.');
      }
    } else {
      // Login flow
      try {
        // Find user by email
        const username = localStorage.getItem(`user_email_${form.email}`);
        if (!username) {
          return setError('Invalid email or password');
        }

        const userData = JSON.parse(
          localStorage.getItem(`user_${username}`) || 'null'
        );

        if (!userData) {
          return setError('Invalid email or password');
        }

        // In a real app, you would verify the password here
        // For now, we'll just check if the user exists
        setUser({
          ...userData,
          // Make sure onboardingCompleted is a boolean
          onboardingCompleted: !!userData.onboardingCompleted,
        });

        // Always redirect to feed after login
        navigate('/feed');
      } catch (err) {
        console.error('Login error:', err);
        setError('Failed to log in. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img src="/netuark.png" alt="Netuark Logo" className="h-40 w-40" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-2">
            NeTuArk
            <MarsEmoji />
          </h1>
          <p className="text-gray-600 mt-2">The World Is Opening</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Full Name"
                  required={!isLogin}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Username (unique)"
                  required={!isLogin}
                  value={form.username}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      username: e.target.value
                        .toLowerCase()
                        .replace(/[^a-z0-9]/g, ''),
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </>
            )}

            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-4 rounded-full hover:bg-blue-700 transition"
            >
              {isLogin ? 'Log In' : 'Sign Up'}
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
              }}
              className="text-blue-600 font-semibold"
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
