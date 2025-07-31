import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Bot, 
  Users, 
  BarChart3,
  Settings,
  ChevronDown,
  Menu
} from 'lucide-react';

const Layout = ({ onLogout, setPage, page, children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // for mobile

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-3 sm:px-4 md:px-6 py-3 sm:py-4 shadow-sm sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Hamburger for mobile */}
            <button 
              className="md:hidden mr-2 p-2 rounded-lg hover:bg-gray-100 transition-colors" 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full mr-2 sm:mr-4 shadow-lg pulse-green flex-shrink-0"></div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text truncate">Aikom Bot Bureau</h1>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
            <Button variant="ghost" size="sm" className="hover-lift p-2 sm:p-3">
              <Settings className="w-4 h-4" />
            </Button>
            <div 
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center cursor-pointer hover-lift shadow-md flex-shrink-0" 
              onClick={onLogout}
              role="button"
              tabIndex={0}
              aria-label="Logout"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed z-30 md:static top-0 left-0 h-full ${sidebarOpen ? 'block' : 'hidden'} md:block ${sidebarCollapsed ? 'w-16' : 'w-64'} bg-white border-r border-gray-200 min-h-screen transition-all duration-300 shadow-sm overflow-y-auto`}> 
          <nav className="p-2 sm:p-4 space-y-1 sm:space-y-2">
            {/* Dashboard */}
            <div
              className={`flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-sm font-bold cursor-pointer transition-all ${page === 'dashboard' ? 'text-gray-900 bg-green-200 hover:bg-green-200' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => {
                setPage('dashboard');
                setSidebarOpen(false); // Close mobile sidebar after navigation
              }}
            >
              <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 flex-shrink-0" />
              {!sidebarCollapsed && <span className="truncate text-sm sm:text-base">Dashboard</span>}
            </div>
            {/* Clients */}
            <div
              className={`flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-sm font-bold cursor-pointer transition-all ${page === 'clients' ? 'text-gray-900 bg-green-200 hover:bg-green-200' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => {
                setPage('clients');
                setSidebarOpen(false);
              }}
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 flex-shrink-0" />
              {!sidebarCollapsed && <span className="truncate text-sm sm:text-base">Clients</span>}
            </div>
            {/* Bot Template */}
            <div
              className={`flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-sm font-bold cursor-pointer transition-all ${page === 'botTemplates' ? 'text-gray-900 bg-green-200 hover:bg-green-200' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => {
                setPage('botTemplates');
                setSidebarOpen(false);
              }}
            >
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 flex-shrink-0" />
              {!sidebarCollapsed && <span className="truncate text-sm sm:text-base">Bot Template</span>}
            </div>
            {/* User Management */}
            <div
              className={`flex items-center justify-between px-2 sm:px-3 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-sm font-bold cursor-pointer transition-all ${page === 'userManagement' ? 'text-gray-900 bg-green-200 hover:bg-green-200' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => {
                setPage('userManagement');
                setSidebarOpen(false);
              }}
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Settings className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 flex-shrink-0" />
                {!sidebarCollapsed && <span className="truncate text-sm sm:text-base">User Management</span>}
              </div>
              {!sidebarCollapsed && <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />}
            </div>
          </nav>
        </aside>
        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden" 
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-2 sm:p-3 md:p-4 lg:p-6 custom-scrollbar overflow-y-auto min-h-[calc(100vh-80px)]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout; 