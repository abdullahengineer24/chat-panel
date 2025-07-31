import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    // Hardcoded credentials
    if (email === "admin@hornmedia.com" && password === "admin123") {
      setTimeout(() => {
        setIsLoading(false);
        onLogin();
      }, 1000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setError("Invalid email or password");
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - 3D Robot Illustration */}
      <div className="flex-1 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 relative overflow-hidden min-h-[40vh] sm:min-h-[50vh] lg:min-h-screen">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid-pattern"></div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 border border-purple-400 opacity-30 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-12 h-12 bg-cyan-400 opacity-20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-pink-400 opacity-40 rounded-full"></div>
        
        {/* 3D Robot and Chat Elements */}
        <div className="relative h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Chat Bubble */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hover-lift">
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl relative">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-inner">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="w-16 sm:w-20 h-1.5 sm:h-2 bg-white/90 rounded-full"></div>
                  <div className="w-12 sm:w-16 h-1.5 sm:h-2 bg-white/70 rounded-full"></div>
                  <div className="w-8 sm:w-12 h-1.5 sm:h-2 bg-white/50 rounded-full"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-6 sm:left-8 transform translate-y-1/2 w-0 h-0 border-l-4 sm:border-l-6 border-r-4 sm:border-r-6 border-t-4 sm:border-t-6 border-transparent border-t-cyan-400"></div>
            </div>
          </div>

          {/* 3D Robot */}
          <div className="robot-container">
            <div className="robot-body bg-gradient-to-b from-pink-100 via-pink-50 to-white rounded-full w-24 h-32 sm:w-32 sm:h-40 md:w-36 md:h-44 relative shadow-2xl border border-pink-200">
              {/* Robot Head */}
              <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-b from-pink-100 to-white rounded-full shadow-xl border border-pink-200">
                {/* Eyes */}
                <div className="absolute top-6 sm:top-8 left-3 sm:left-5 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full shadow-inner animate-pulse"></div>
                <div className="absolute top-6 sm:top-8 right-3 sm:right-5 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full shadow-inner animate-pulse"></div>
                {/* Face Panel */}
                <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-5 sm:w-12 sm:h-6 md:w-14 md:h-7 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg shadow-inner">
                  <div className="absolute top-0.5 sm:top-1 left-0.5 sm:left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-0.5 sm:top-1 right-0.5 sm:right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
                {/* Antenna */}
                <div className="absolute -top-1.5 sm:-top-2 left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-3 sm:h-4 bg-gray-400 rounded-full"></div>
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Arms */}
              <div className="absolute top-8 sm:top-10 -left-6 sm:-left-8 w-12 h-6 sm:w-16 sm:h-8 bg-gradient-to-r from-pink-100 to-white rounded-full shadow-lg transform -rotate-12 border border-pink-200"></div>
              <div className="absolute top-8 sm:top-10 -right-6 sm:-right-8 w-12 h-6 sm:w-16 sm:h-8 bg-gradient-to-l from-pink-100 to-white rounded-full shadow-lg transform rotate-12 border border-pink-200"></div>
              
              {/* Body Details */}
              <div className="absolute top-12 sm:top-16 left-1/2 transform -translate-x-1/2 w-16 h-8 sm:w-20 sm:h-10 bg-gradient-to-b from-gray-600 to-gray-800 rounded-xl shadow-inner">
                <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-1.5 sm:w-12 sm:h-2 bg-gray-900 rounded-full"></div>
              </div>
            </div>
            
            {/* Base/Stand */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-8 sm:w-24 sm:h-10 bg-gradient-to-b from-gray-200 to-gray-400 rounded-full shadow-xl border border-gray-300"></div>
          </div>

          {/* Glowing Effects */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full blur-sm opacity-60 animate-pulse"></div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="w-full max-w-sm sm:max-w-md">
          {/* Logo */}
          <div className="flex items-center mb-6 sm:mb-8 md:mb-10">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full mr-3 sm:mr-4 shadow-lg pulse-green flex-shrink-0"></div>
            <h1 className="text-xl sm:text-2xl font-bold gradient-text truncate">Aikom Bot Bureau</h1>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">Login</h2>
              <p className="text-sm sm:text-base text-gray-600">Welcome back! Please sign in to your account.</p>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all hover-lift text-sm sm:text-base"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 sm:pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all hover-lift text-sm sm:text-base"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                >
                  {showPassword ? <EyeOff size={18} className="sm:w-5 sm:h-5" /> : <Eye size={18} className="sm:w-5 sm:h-5" />}
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={setRememberMe}
                  className="focus-ring"
                />
                <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                  Remember me
                </Label>
              </div>
              <a href="#" className="text-sm text-green-500 hover:text-green-600 font-medium transition-colors">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="loading-spinner"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </Button>
            {error && (
              <div className="text-red-500 text-sm text-center pt-2">{error}</div>
            )}

            <div className="text-center pt-3 sm:pt-4">
              <p className="text-xs sm:text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-green-500 hover:text-green-600 font-medium transition-colors">
                  Sign up here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

