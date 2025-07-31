import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  User, 
  Bot, 
  MessageSquare, 
  Users, 
  BarChart3,
  Settings,
  ChevronDown,
  Copy,
  MoreHorizontal,
  TrendingUp,
  Activity,
  Calendar,
  Filter,
  Menu
} from 'lucide-react';

const Dashboard = ({ onLogout, setPage, page }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // for mobile

  const stats = [
    {
      title: 'Total Chatbots',
      value: '124',
      subtitle: '4 created this month',
      change: '+12%',
      trend: 'up',
      icon: Bot,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Active Users',
      value: '2,847',
      subtitle: 'Active in last 30 days',
      change: '+8%',
      trend: 'up',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Total Interactions',
      value: '4.8M',
      subtitle: 'Last 24 hours',
      change: '-2%',
      trend: 'down',
      icon: MessageSquare,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Conversations',
      value: '18.2K',
      subtitle: 'Total Conversations',
      change: '+15%',
      trend: 'up',
      icon: BarChart3,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  const activeBots = [
    {
      id: 1,
      client: 'White pet',
      botName: 'Pet bot',
      avatar: 'bg-gradient-to-br from-blue-400 to-blue-600',
      color: '#5C5C5B',
      createdOn: '07/18/2025',
      embedCode: 'Get embed code',
      conversations: '21,000',
      status: 'active'
    },
    {
      id: 2,
      client: 'Tesco',
      botName: 'Tes Helper',
      avatar: 'bg-gradient-to-br from-blue-200 to-blue-400',
      color: '#5C5C5B',
      createdOn: '07/18/2025',
      embedCode: 'Get embed code',
      conversations: '19,000',
      status: 'active'
    },
    {
      id: 3,
      client: 'Light of Asia',
      botName: 'Chef',
      avatar: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
      color: '#5C5C5B',
      createdOn: '07/18/2025',
      embedCode: 'Get embed code',
      conversations: '16,000',
      status: 'active'
    },
    {
      id: 4,
      client: 'We Drink',
      botName: 'Helper',
      avatar: 'bg-gradient-to-br from-green-400 to-green-600',
      color: '#5C5C5B',
      createdOn: '07/18/2025',
      embedCode: 'Get embed code',
      conversations: '15,000',
      status: 'active'
    },
    {
      id: 5,
      client: 'Dr.Inks',
      botName: 'Drinker',
      avatar: 'bg-gradient-to-br from-purple-400 to-purple-600',
      color: '#5C5C5B',
      createdOn: '07/18/2025',
      embedCode: 'Get embed code',
      conversations: '13,000',
      status: 'active'
    },
    {
      id: 6,
      client: 'White Rose',
      botName: 'Basket',
      avatar: 'bg-gradient-to-br from-green-200 to-green-500',
      color: '#5C5C5B',
      createdOn: '07/18/2025',
      embedCode: 'Get embed code',
      conversations: '10,000',
      status: 'active'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Hamburger for mobile */}
            <button className="md:hidden mr-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full mr-4 shadow-lg pulse-green"></div>
            <h1 className="text-xl md:text-2xl font-bold gradient-text">Aikom Bot Bureau</h1>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button variant="ghost" size="sm" className="hover-lift">
              <Settings className="w-4 h-4" />
            </Button>
            <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center cursor-pointer hover-lift shadow-md" onClick={onLogout}>
              <User className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed z-30 md:static top-0 left-0 h-full ${sidebarOpen ? 'block' : 'hidden'} md:block ${sidebarCollapsed ? 'w-16' : 'w-64'} bg-white border-r border-gray-200 min-h-screen transition-all duration-300 shadow-sm`}> 
          <nav className="p-4 space-y-2">
            {/* Dashboard - Active */}
            <div
              className={`flex items-center space-x-3 px-3 py-3 rounded-xl shadow-sm font-bold cursor-pointer ${page === 'dashboard' ? 'text-gray-900 bg-green-200 hover:bg-green-200' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => setPage('dashboard')}
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              {!sidebarCollapsed && <span>Dashboard</span>}
            </div>
            {/* Clients */}
            <div
              className={`flex items-center space-x-3 px-3 py-3 rounded-xl shadow-sm font-bold cursor-pointer ${page === 'clients' ? 'text-gray-900 bg-green-200 hover:bg-green-200' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => setPage('clients')}
            >
              <User className="w-5 h-5 mr-2" />
              {!sidebarCollapsed && <span>Clients</span>}
            </div>
            {/* Bot Template */}
            <div
              className={`flex items-center space-x-3 px-3 py-3 rounded-xl shadow-sm font-bold cursor-pointer ${page === 'botTemplates' ? 'text-gray-900 bg-green-200 hover:bg-green-200' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => setPage('botTemplates')}
            >
              <Bot className="w-5 h-5 mr-2" />
              {!sidebarCollapsed && <span>Bot Template</span>}
            </div>
            {/* User Management */}
            <div
              className={`flex items-center justify-between px-3 py-3 rounded-xl shadow-sm font-bold cursor-pointer ${page === 'userManagement' ? 'text-gray-900 bg-green-200 hover:bg-green-200' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => setPage('userManagement')}
            >
              <div className="flex items-center space-x-3">
                <Settings className="w-5 h-5 mr-2" />
                {!sidebarCollapsed && <span>User Management</span>}
              </div>
              {!sidebarCollapsed && <ChevronDown className="w-4 h-4" />}
            </div>
          </nav>
        </aside>
        {/* Overlay for mobile sidebar */}
        {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden" onClick={() => setSidebarOpen(false)}></div>}

        {/* Main Content */}
        <main className="flex-1 p-2 sm:p-4 md:p-6 custom-scrollbar overflow-y-auto">
          {/* Page Header */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
            <p className="text-gray-600 text-sm md:text-base">Monitor your bot performance and user engagement</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className={`card-hover ${stat.bgColor} ${stat.borderColor} border-2 shadow-lg`}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-semibold text-gray-700">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <p className="text-xs text-gray-600 mb-2">{stat.subtitle}</p>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3 text-green-600" />
                    <span className="text-xs font-medium text-green-600">{stat.change}</span>
                    <span className="text-xs text-gray-500">vs last month</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Active Bots Table */}
          <Card className="shadow-xl border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-lg">
              <div className="flex flex-col gap-2 md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                <div>
                  <CardTitle className="text-lg md:text-xl font-bold text-gray-900">Active Bots</CardTitle>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Manage and monitor your chatbot fleet</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:space-x-3">
                  <div className="relative w-full sm:w-auto">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      placeholder="Search bots..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-full sm:w-64 focus-ring"
                    />
                  </div>
                  <Button variant="outline" size="sm" className="hover-lift w-full sm:w-auto">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-xs md:text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Clients</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Bot Name</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Avatar</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Color</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Created On</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Embed Code</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Total Conversations</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeBots.map((bot, index) => (
                      <tr key={bot.id} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                        <td className="py-4 px-6">
                          <div className="font-medium text-gray-900">{bot.client}</div>
                          <div className="text-sm text-gray-500">Enterprise</div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="font-medium text-gray-900">{bot.botName}</div>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {bot.status}
                          </Badge>
                        </td>
                        <td className="py-4 px-6">
                          <div className={`w-10 h-10 ${bot.avatar} rounded-full shadow-md hover-lift`}></div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-3">
                            <div 
                              className="w-5 h-5 rounded-full shadow-sm" 
                              style={{ backgroundColor: bot.color }}
                            ></div>
                            <span className="text-gray-600 text-sm font-mono">{bot.color}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-600 text-sm">{bot.createdOn}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 hover-lift">
                            <Copy className="w-4 h-4 mr-2" />
                            {bot.embedCode}
                          </Button>
                        </td>
                        <td className="py-4 px-6">
                          <div className="font-semibold text-gray-900">{bot.conversations}</div>
                          <div className="flex items-center space-x-1 mt-1">
                            <Activity className="w-3 h-3 text-green-500" />
                            <span className="text-xs text-green-600">+12% today</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <Button variant="ghost" size="sm" className="hover-lift">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6 bg-gray-50 border-t border-gray-200 gap-2 md:gap-0">
                <div className="text-xs md:text-sm text-gray-600">
                  Showing <span className="font-medium">1-6</span> of <span className="font-medium">124</span> results
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled className="hover-lift">
                    Previous
                  </Button>
                  <div className="flex items-center space-x-1">
                    <Button variant="outline" size="sm" className="bg-green-500 text-white border-green-500">1</Button>
                    <Button variant="outline" size="sm" className="hover-lift">2</Button>
                    <Button variant="outline" size="sm" className="hover-lift">3</Button>
                    <span className="px-2 text-gray-500">...</span>
                    <Button variant="outline" size="sm" className="hover-lift">21</Button>
                  </div>
                  <Button variant="outline" size="sm" className="hover-lift">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

