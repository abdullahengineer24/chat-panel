import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FileText, Trash2, Bot, X } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const botTemplatesData = [
  { client: 'White Pet', botName: 'Pet bot', avatar: 'bg-gradient-to-br from-blue-400 to-blue-600', color: '#5C5C5B', createdOn: '07/18/2025' },
  { client: 'Tesco', botName: 'Tes Helper', avatar: 'bg-gradient-to-br from-yellow-400 to-yellow-600', color: '#5C5C5B', createdOn: '07/18/2025' },
  { client: 'Light of Asia', botName: 'Chef', avatar: 'bg-gradient-to-br from-cyan-400 to-cyan-600', color: '#5C5C5B', createdOn: '07/18/2025' },
  { client: 'We Drink', botName: 'Helper', avatar: 'bg-gradient-to-br from-red-200 to-red-400', color: '#5C5C5B', createdOn: '07/18/2025' },
  { client: 'Dr.Inks', botName: 'Drinker', avatar: 'bg-gradient-to-br from-purple-400 to-purple-600', color: '#5C5C5B', createdOn: '07/18/2025' },
  { client: 'White Rose', botName: 'Basket', avatar: 'bg-gradient-to-br from-yellow-200 to-yellow-500', color: '#5C5C5B', createdOn: '07/18/2025' },
];

const avatarOptions = [
  { color: 'bg-white', value: 'white' },
  { color: 'bg-green-200', value: 'green' },
  { color: 'bg-blue-900', value: 'blue' },
  { color: 'bg-red-400', value: 'red' },
];

const BotTemplates = ({ onBack }) => {
  const [search, setSearch] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    client: '',
    botName: '',
    message: '',
    color: '#16787a',
    avatar: '',
    uploadedAvatar: null
  });
  const filteredBots = botTemplatesData.filter(
    b => b.client.toLowerCase().includes(search.toLowerCase()) || b.botName.toLowerCase().includes(search.toLowerCase())
  );

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleColorChange = (color) => {
    setFormData(prev => ({ ...prev, color }));
  };

  const handleAvatarSelect = (avatar) => {
    setFormData(prev => ({ ...prev, avatar, uploadedAvatar: null }));
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, uploadedAvatar: file, avatar: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Bot Template submitted:', formData);
    setShowAddModal(false);
    setFormData({
      client: '',
      botName: '',
      message: '',
      color: '#16787a',
      avatar: '',
      uploadedAvatar: null
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
        <div className="flex items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <Bot className="w-5 h-5 sm:w-6 sm:h-6" /> 
            <span className="truncate">Bot Templates</span>
          </h2>
        </div>
        <Button className="bg-yellow-200 text-gray-800 font-semibold hover:bg-yellow-300 text-sm" onClick={() => setShowAddModal(true)}>
          <span className="mr-1 sm:mr-2">+</span>Add New Bot Template
        </Button>
      </div>
      <div className="bg-white rounded-xl shadow p-3 sm:p-4 md:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3 sm:gap-0">
          <div></div>
          <Input
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full sm:w-80 text-sm"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs sm:text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700">CLIENTS</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700">BOT NAME</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700">AVATAR</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700 hidden sm:table-cell">COLOR</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700">CREATED ON</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700">EMBED CODE</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredBots.map((bot, idx) => (
                <tr key={bot.client + bot.botName} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm">{bot.client}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">{bot.botName}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3"><div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow ${bot.avatar}`}></div></td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3 font-mono text-xs sm:text-sm hidden sm:table-cell">{bot.color}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">{bot.createdOn}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 text-xs sm:text-sm">
                      <FileText className="w-3 h-3 sm:w-4 sm:h-4" /> 
                      <span className="hidden sm:inline">Get embed code</span>
                      <span className="sm:hidden">Code</span>
                    </button>
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded" title="Delete">
                      <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 text-xs text-gray-500 gap-2 sm:gap-0">
          <div>Rows per page: <select className="border rounded px-1 py-0.5 ml-1 text-xs"><option>10</option></select></div>
          <div>1-10 of 100 items</div>
        </div>
      </div>

      {/* Add New Bot Template Modal/Sidebar */}
      {showAddModal && (
        <div className="fixed inset-0 bg-white flex justify-end z-50">
          <div className="bg-white w-96 h-full shadow-lg">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Add New Bot Template</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Client</label>
                <Select value={formData.client} onValueChange={value => handleInputChange('client', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Client" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="White Pet">White Pet</SelectItem>
                    <SelectItem value="Tesco">Tesco</SelectItem>
                    <SelectItem value="Light of Asia">Light of Asia</SelectItem>
                    <SelectItem value="We Drink">We Drink</SelectItem>
                    <SelectItem value="Dr.Inks">Dr.Inks</SelectItem>
                    <SelectItem value="White Rose">White Rose</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bot Name</label>
                <Input
                  type="text"
                  placeholder="Your Bot Name"
                  value={formData.botName}
                  onChange={e => handleInputChange('botName', e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Input
                  type="text"
                  placeholder="Enter your message here"
                  value={formData.message}
                  onChange={e => handleInputChange('message', e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Choose Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={formData.color}
                    onChange={e => handleColorChange(e.target.value)}
                    className="w-8 h-8 border-2 border-gray-300 rounded cursor-pointer"
                  />
                  <div className="w-8 h-8 rounded border border-gray-300" style={{ background: formData.color }}></div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Avatar</label>
                <div className="flex items-center gap-4 mb-2">
                  {avatarOptions.map(opt => (
                    <button
                      type="button"
                      key={opt.value}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${formData.avatar === opt.value ? 'border-blue-500' : 'border-gray-300'} ${opt.color}`}
                      onClick={() => handleAvatarSelect(opt.value)}
                    />
                  ))}
                </div>
                <div className="mt-2">
                  <div className="text-xs text-gray-600 mb-1">Upload your own Avatar</div>
                  <div className="flex items-center gap-2">
                    <label className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 cursor-pointer bg-gray-50">
                      <input type="file" accept="image/*" className="hidden" onChange={handleAvatarUpload} />
                      <span className="text-2xl">+</span>
                    </label>
                    {formData.uploadedAvatar && (
                      <img
                        src={URL.createObjectURL(formData.uploadedAvatar)}
                        alt="Avatar Preview"
                        className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">Add Bot Template</Button>
                <Button type="button" onClick={() => setShowAddModal(false)} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700">Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BotTemplates; 