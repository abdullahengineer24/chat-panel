import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Bot, 
  MessageSquare, 
  Users, 
  BarChart3,
  TrendingUp,
  Activity,
  Calendar,
  Filter,
  Copy,
  MoreHorizontal
} from 'lucide-react';

const DashboardContent = () => {
  const [searchTerm, setSearchTerm] = useState('');

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
    <>
      {/* Page Header */}
      <div className="mb-4 sm:mb-6 md:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Dashboard Overview</h2>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base">Monitor your bot performance and user engagement</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className={`card-hover ${stat.bgColor} ${stat.borderColor} border-2 shadow-lg`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-semibold text-gray-700">
                {stat.title}
              </CardTitle>
              <div className={`p-1.5 sm:p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
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
          <div className="flex flex-col gap-2 md:flex-row md:items-center justify-between space-y-3 md:space-y-0">
            <div>
              <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Active Bots</CardTitle>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Manage and monitor your chatbot fleet</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:space-x-3">
              <div className="relative w-full sm:w-auto">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search bots..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64 focus-ring text-sm"
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
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-700 text-xs sm:text-sm">Clients</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-700 text-xs sm:text-sm">Bot Name</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-700 text-xs sm:text-sm">Avatar</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-700 text-xs sm:text-sm">Color</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-700 text-xs sm:text-sm">Created On</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-700 text-xs sm:text-sm">Embed Code</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-700 text-xs sm:text-sm">Total Conversations</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-700 text-xs sm:text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {activeBots.map((bot, index) => (
                  <tr key={bot.id} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="py-3 sm:py-4 px-3 sm:px-6">
                      <div className="font-medium text-gray-900 text-xs sm:text-sm">{bot.client}</div>
                      <div className="text-xs text-gray-500">Enterprise</div>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-6">
                      <div className="font-medium text-gray-900 text-xs sm:text-sm">{bot.botName}</div>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {bot.status}
                      </Badge>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-6">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 ${bot.avatar} rounded-full shadow-md hover-lift`}></div>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-6">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div 
                          className="w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-sm" 
                          style={{ backgroundColor: bot.color }}
                        ></div>
                        <span className="text-gray-600 text-xs sm:text-sm font-mono hidden sm:block">{bot.color}</span>
                      </div>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-6">
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                        <span className="text-gray-600 text-xs sm:text-sm">{bot.createdOn}</span>
                      </div>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-6">
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 hover-lift text-xs sm:text-sm">
                        <Copy className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        <span className="hidden sm:inline">{bot.embedCode}</span>
                        <span className="sm:hidden">Code</span>
                      </Button>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-6">
                      <div className="font-semibold text-gray-900 text-xs sm:text-sm">{bot.conversations}</div>
                      <div className="flex items-center space-x-1 mt-1">
                        <Activity className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-green-600">+12% today</span>
                      </div>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-6">
                      <Button variant="ghost" size="sm" className="hover-lift">
                        <MoreHorizontal className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex flex-col md:flex-row items-center justify-between p-3 sm:p-4 md:p-6 bg-gray-50 border-t border-gray-200 gap-2 md:gap-0">
            <div className="text-xs md:text-sm text-gray-600">
              Showing <span className="font-medium">1-6</span> of <span className="font-medium">124</span> results
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Button variant="outline" size="sm" disabled className="hover-lift text-xs sm:text-sm">
                Previous
              </Button>
              <div className="flex items-center space-x-1">
                <Button variant="outline" size="sm" className="bg-green-500 text-white border-green-500 text-xs sm:text-sm">1</Button>
                <Button variant="outline" size="sm" className="hover-lift text-xs sm:text-sm">2</Button>
                <Button variant="outline" size="sm" className="hover-lift text-xs sm:text-sm">3</Button>
                <span className="px-1 sm:px-2 text-gray-500 text-xs sm:text-sm">...</span>
                <Button variant="outline" size="sm" className="hover-lift text-xs sm:text-sm">21</Button>
              </div>
              <Button variant="outline" size="sm" className="hover-lift text-xs sm:text-sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default DashboardContent; 