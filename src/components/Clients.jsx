import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pencil, Trash2, User, X, Eye, EyeOff } from 'lucide-react';

const clientsData = [
  { name: 'White Pet', status: 'Active', username: 'Saltburn', email: 'info@whitepet.co.uk', website: 'www.whitepet.co.uk' },
  { name: 'Tesco', status: 'Active', username: 'Marske', email: 'hello@tesco.co.uk', website: 'www.tesco.co.uk' },
  { name: 'Light of Asia', status: 'Active', username: 'Redcar', email: 'Light@loasia.co.uk', website: 'www.loasia.co.uk' },
  { name: 'We Drink', status: 'Active', username: 'HiStreet', email: 'info@wedrink.com', website: 'www.wedrink.com' },
  { name: 'Dr.Inks', status: 'Active', username: 'HiStreet00', email: 'help@drdrinks.co.uk', website: 'www.drdrinks.co.uk' },
  { name: 'White Rose', status: 'Inactive', username: 'Whitby-03', email: 'hello@whiterose.co.uk', website: 'www.whiterose.co.uk' },
];

const statusBadge = (status) => (
  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{status}</span>
);

const Clients = ({ onBack }) => {
  const [search, setSearch] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    userName: '',
    password: '',
    email: 'info@example.com',
    website: 'www.example.com',
    status: 'Active'
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    clientName: '',
    userName: '',
    password: '',
    email: '',
    website: '',
    status: 'Active',
  });

  const filteredClients = clientsData.filter(
    c => c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setShowAddModal(false);
    // Reset form
    setFormData({
      clientName: '',
      userName: '',
      password: '',
      email: 'info@example.com',
      website: 'www.example.com',
      status: 'Active'
    });
  };

  const handleEditClick = (client) => {
    setEditFormData({
      clientName: client.name,
      userName: client.username,
      password: '',
      email: client.email,
      website: client.website,
      status: client.status,
    });
    setShowEditModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
        <div className="flex items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <User className="w-5 h-5 sm:w-6 sm:h-6" /> 
            <span className="truncate">Clients</span>
          </h2>
        </div>
        <Button 
          className="bg-yellow-200 text-gray-800 font-semibold hover:bg-yellow-300 text-sm"
          onClick={() => setShowAddModal(true)}
        >
          <span className="mr-1 sm:mr-2">+</span>Add New Client
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
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700">STATUS</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700">USERNAME</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700">EMAIL</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700 hidden sm:table-cell">WEBSITE</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client, idx) => (
                <tr key={client.name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm">{client.name}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{statusBadge(client.status)}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">{client.username}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">{client.email}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm hidden sm:table-cell">{client.website}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3 flex gap-1 sm:gap-2">
                    <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded" title="Edit" onClick={() => handleEditClick(client)}>
                      <Pencil className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                    </button>
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

      {/* Add New Client Modal/Sidebar */}
      {showAddModal && (
        <div className="fixed inset-0 bg-white flex justify-end z-50">
          <div className="bg-white w-96 h-full shadow-lg">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Add New Client</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Client Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter Client Name"
                  value={formData.clientName}
                  onChange={(e) => handleInputChange('clientName', e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  User Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter User Name"
                  value={formData.userName}
                  onChange={(e) => handleInputChange('userName', e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4 text-gray-500" /> : <Eye className="w-4 h-4 text-gray-500" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <Input
                  type="text"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  type="submit" 
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Add Client
                </Button>
                <Button 
                  type="button" 
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Client Modal/Sidebar */}
      {showEditModal && (
        <div className="fixed inset-0 bg-white flex justify-end z-50">
          <div className="bg-white w-96 h-full shadow-lg">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Edit Client</h3>
              <button 
                onClick={() => setShowEditModal(false)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
                <Input
                  type="text"
                  value={editFormData.clientName}
                  onChange={e => setEditFormData(f => ({ ...f, clientName: e.target.value }))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">User Name</label>
                <Input
                  type="text"
                  value={editFormData.userName}
                  onChange={e => setEditFormData(f => ({ ...f, userName: e.target.value }))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <Input
                    type="password"
                    value={editFormData.password}
                    onChange={e => setEditFormData(f => ({ ...f, password: e.target.value }))}
                    className="w-full pr-10"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input
                  type="email"
                  value={editFormData.email}
                  onChange={e => setEditFormData(f => ({ ...f, email: e.target.value }))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">website</label>
                <Input
                  type="text"
                  value={editFormData.website}
                  onChange={e => setEditFormData(f => ({ ...f, website: e.target.value }))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={editFormData.status}
                  onChange={e => setEditFormData(f => ({ ...f, status: e.target.value }))}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients; 