import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Settings, Pencil, Trash2, X } from 'lucide-react';

const modulesData = [
  { module: 'Sales', description: 'Cyborg was here', status: 'Active' },
  { module: 'Accounts', description: 'A short description will here', status: 'Active' },
  { module: 'Marketing', description: 'A short description will here', status: 'Active' },
  { module: 'Admin', description: 'A short description will here', status: 'Active' },
  { module: 'HR', description: 'A short description will here', status: 'Active' },
  { module: 'Sales', description: 'A short description will here', status: 'Inactive' },
];

const actionsData = [
  { module: 'Sales', action: 'Cancel btn', description: 'Cyborg was here', status: 'Active' },
  { module: 'Sales', action: 'Save btn', description: 'A short description will here', status: 'Active' },
  { module: 'Marketing', action: 'Cancel btn', description: 'A short description will here', status: 'Active' },
  { module: 'Admin', action: 'Cancel btn', description: 'A short description will here', status: 'Active' },
  { module: 'HR', action: 'Save btn', description: 'A short description will here', status: 'Active' },
  { module: 'Sales', action: 'Cancel btn', description: 'A short description will here', status: 'Inactive' },
];

const roleModuleAssignmentData = [
  { role: 'Admin', module: 'Sales', action: 'Cancel btn', status: 'Active' },
  { role: 'Admin', module: 'Sales', action: 'Save btn', status: 'Active' },
  { role: 'Admin', module: 'Marketing', action: 'Cancel btn', status: 'Active' },
  { role: 'Admin', module: 'Admin', action: 'Cancel btn', status: 'Active' },
  { role: 'Admin', module: 'HR', action: 'Save btn', status: 'Active' },
  { role: 'Admin', module: 'Sales', action: 'Cancel btn', status: 'Inactive' },
];

const statusBadge = (status) => (
  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{status}</span>
);

const rolesData = [
  { role: 'Admin', description: 'Cyborg was here', status: 'Active' },
  { role: 'Admin', description: 'A short description will here', status: 'Active' },
  { role: 'Admin', description: 'A short description will here', status: 'Active' },
  { role: 'Admin', description: 'A short description will here', status: 'Active' },
  { role: 'Admin', description: 'A short description will here', status: 'Active' },
  { role: 'Admin', description: 'A short description will here', status: 'Inactive' },
];

const usersData = [
  { name: 'Pet bot', status: 'Active', role: 'Admin', email: 'info@whitepet.co.uk', description: 'Cyborg was here' },
  { name: 'Tes Helper', status: 'Active', role: 'Admin', email: 'hello@tesco.co.uk', description: 'A short description will here' },
  { name: 'Chef', status: 'Active', role: 'Admin', email: 'Light@loasia.co.uk', description: 'A short description will here' },
  { name: 'Helper', status: 'Active', role: 'Admin', email: 'info@wedrink.com', description: 'A short description will here' },
  { name: 'Drinker', status: 'Active', role: 'Admin', email: 'help@drdrinks.co.uk', description: 'A short description will here' },
  { name: 'Basket', status: 'Inactive', role: 'Admin', email: 'hello@whiterose.co.uk', description: 'A short description will here' },
];

const UserManagement = ({ activeSub, setActiveSub }) => {
  const [search, setSearch] = useState('');
  
  // Add modals
  const [showAddRoleModal, setShowAddRoleModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showAddModuleModal, setShowAddModuleModal] = useState(false);
  const [showAddActionModal, setShowAddActionModal] = useState(false);
  const [showAssignRoleModuleModal, setShowAssignRoleModuleModal] = useState(false);
  
  // Edit modals
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [showEditRoleModal, setShowEditRoleModal] = useState(false);
  const [showEditModuleModal, setShowEditModuleModal] = useState(false);
  const [showEditActionModal, setShowEditActionModal] = useState(false);
  const [showEditAssignModal, setShowEditAssignModal] = useState(false);
  
  // Form states
  const [roleForm, setRoleForm] = useState({
    roleName: 'These will be pre-populated fields',
    description: 'Add a short description here',
    status: 'Active',
  });
  const [userForm, setUserForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Admin',
    status: 'Active',
  });
  const [moduleForm, setModuleForm] = useState({
    moduleName: 'These will be pre-populated fields',
    description: 'Add a short description here',
    status: 'Active',
  });
  const [actionForm, setActionForm] = useState({
    module: '',
    action: '',
    description: 'Add a short description here',
    status: 'Active',
  });
  const [assignForm, setAssignForm] = useState({
    role: '',
    module: '',
    action: '',
    status: 'Active',
  });
  
  // Edit form states
  const [editUserForm, setEditUserForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Admin',
    status: 'Active',
  });
  const [editRoleForm, setEditRoleForm] = useState({
    roleName: '',
    description: '',
    status: 'Active',
  });
  const [editModuleForm, setEditModuleForm] = useState({
    moduleName: '',
    description: '',
    status: 'Active',
  });
  const [editActionForm, setEditActionForm] = useState({
    module: '',
    action: '',
    description: '',
    status: 'Active',
  });
  const [editAssignForm, setEditAssignForm] = useState({
    role: '',
    module: '',
    action: '',
    status: 'Active',
  });
  const filteredUsers = usersData.filter(
    u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
  );
  const filteredModules = modulesData.filter(
    m => m.module.toLowerCase().includes(search.toLowerCase())
  );
  const filteredRoles = rolesData.filter(
    r => r.role.toLowerCase().includes(search.toLowerCase())
  );
  const filteredActions = actionsData.filter(
    a => a.module.toLowerCase().includes(search.toLowerCase()) || a.action.toLowerCase().includes(search.toLowerCase())
  );
  const filteredRoleModuleAssignments = roleModuleAssignmentData.filter(
    rma => rma.role.toLowerCase().includes(search.toLowerCase()) || rma.module.toLowerCase().includes(search.toLowerCase()) || rma.action.toLowerCase().includes(search.toLowerCase())
  );

  // Edit handler functions
  const handleEditUser = (user) => {
    setEditUserForm({
      name: user.name,
      email: user.email,
      password: '************',
      role: user.role,
      status: user.status,
    });
    setShowEditUserModal(true);
  };

  const handleEditRole = (role) => {
    setEditRoleForm({
      roleName: role.role,
      description: role.description,
      status: role.status,
    });
    setShowEditRoleModal(true);
  };

  const handleEditModule = (module) => {
    setEditModuleForm({
      moduleName: module.module,
      description: module.description,
      status: module.status,
    });
    setShowEditModuleModal(true);
  };

  const handleEditAction = (action) => {
    setEditActionForm({
      module: action.module,
      action: action.action,
      description: action.description,
      status: action.status,
    });
    setShowEditActionModal(true);
  };

  const handleEditAssign = (assign) => {
    setEditAssignForm({
      role: assign.role,
      module: assign.module,
      action: assign.action,
      status: assign.status,
    });
    setShowEditAssignModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-white border-r border-gray-200 min-h-[60px] lg:min-h-screen p-3 sm:p-4 flex-shrink-0">
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center gap-2 font-bold text-base sm:text-lg text-gray-900 bg-green-200 px-2 sm:px-3 py-2 rounded-xl">
            <Settings className="w-4 h-4 sm:w-5 sm:h-5" /> 
            <span className="truncate">User Management</span>
            <span className="ml-auto">&#9660;</span>
          </div>
        </div>
        <nav className="space-y-1 flex lg:block flex-row overflow-x-auto lg:overflow-visible">
          {['Users', 'Roles', 'Modules', 'Actions', 'Role-Module Assignment'].map((item) => (
            <div
              key={item}
              className={`px-3 sm:px-4 py-2 rounded cursor-pointer text-sm sm:text-base ${activeSub === item ? 'bg-gray-100 font-semibold' : 'hover:bg-gray-50'} whitespace-nowrap flex-shrink-0`}
              onClick={() => setActiveSub(item)}
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-3 sm:p-4 md:p-6 w-full overflow-x-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <Settings className="w-5 h-5 sm:w-6 sm:h-6" /> 
              <span className="truncate">User Management</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeSub === 'Users' && (
              <Button className="bg-yellow-200 text-gray-800 font-semibold hover:bg-yellow-300 text-sm" onClick={() => setShowAddUserModal(true)}>
                <span className="mr-1 sm:mr-2">+</span>Add New User
              </Button>
            )}
            {activeSub === 'Roles' && (
              <Button className="bg-yellow-200 text-gray-800 font-semibold hover:bg-yellow-300 text-sm" onClick={() => setShowAddRoleModal(true)}>
                <span className="mr-1 sm:mr-2">+</span>Add New Role
              </Button>
            )}
            {activeSub === 'Modules' && (
              <Button className="bg-yellow-200 text-gray-800 font-semibold hover:bg-yellow-300 text-sm" onClick={() => setShowAddModuleModal(true)}>
                <span className="mr-1 sm:mr-2">+</span>Add Module
              </Button>
            )}
            {activeSub === 'Actions' && (
              <Button className="bg-yellow-200 text-gray-800 font-semibold hover:bg-yellow-300 text-sm" onClick={() => setShowAddActionModal(true)}>
                <span className="mr-1 sm:mr-2">+</span>Add Action
              </Button>
            )}
            {activeSub === 'Role-Module Assignment' && (
              <Button className="bg-yellow-200 text-gray-800 font-semibold hover:bg-yellow-300 text-sm" onClick={() => setShowAssignRoleModuleModal(true)}>
                <span className="mr-1 sm:mr-2">+</span>Assign Role-Module
              </Button>
            )}
          </div>
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
          {activeSub === 'Users' && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">USER NAME</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">STATUS</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">ROLE</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">EMAIL</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">DESCRIPTION</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user, idx) => (
                    <tr key={user.name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-medium">{user.name}</td>
                      <td className="px-4 py-3">{statusBadge(user.status)}</td>
                      <td className="px-4 py-3">{user.role}</td>
                      <td className="px-4 py-3">{user.email}</td>
                      <td className="px-4 py-3">{user.description}</td>
                      <td className="px-4 py-3 flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded" title="Edit" onClick={() => handleEditUser(user)}><Pencil className="w-4 h-4 text-gray-500" /></button>
                        <button className="p-2 hover:bg-gray-100 rounded" title="Delete"><Trash2 className="w-4 h-4 text-gray-500" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeSub === 'Roles' && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">ROLE</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">DESCRIPTION</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">STATUS</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRoles.map((role, idx) => (
                    <tr key={role.role + idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-medium">{role.role}</td>
                      <td className="px-4 py-3">{role.description}</td>
                      <td className="px-4 py-3">{statusBadge(role.status)}</td>
                      <td className="px-4 py-3 flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded" title="Edit" onClick={() => handleEditRole(role)}><Pencil className="w-4 h-4 text-gray-500" /></button>
                        <button className="p-2 hover:bg-gray-100 rounded" title="Delete"><Trash2 className="w-4 h-4 text-gray-500" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeSub === 'Modules' && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">MODULE</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">DESCRIPTION</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">STATUS</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredModules.map((mod, idx) => (
                    <tr key={mod.module + idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-medium">{mod.module}</td>
                      <td className="px-4 py-3">{mod.description}</td>
                      <td className="px-4 py-3">{statusBadge(mod.status)}</td>
                      <td className="px-4 py-3 flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded" title="Edit" onClick={() => handleEditModule(mod)}><Pencil className="w-4 h-4 text-gray-500" /></button>
                        <button className="p-2 hover:bg-gray-100 rounded" title="Delete"><Trash2 className="w-4 h-4 text-gray-500" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeSub === 'Actions' && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">MODULE</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">ACTION</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">DESCRIPTION</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">STATUS</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredActions.map((action, idx) => (
                    <tr key={action.module + action.action + idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-medium">{action.module}</td>
                      <td className="px-4 py-3">{action.action}</td>
                      <td className="px-4 py-3">{action.description}</td>
                      <td className="px-4 py-3">{statusBadge(action.status)}</td>
                      <td className="px-4 py-3 flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded" title="Edit" onClick={() => handleEditAction(action)}><Pencil className="w-4 h-4 text-gray-500" /></button>
                        <button className="p-2 hover:bg-gray-100 rounded" title="Delete"><Trash2 className="w-4 h-4 text-gray-500" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeSub === 'Role-Module Assignment' && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">ROLE</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">MODULE</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">ACTION</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">STATUS</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRoleModuleAssignments.map((assignment, idx) => (
                    <tr key={assignment.role + assignment.module + assignment.action + idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-medium">{assignment.role}</td>
                      <td className="px-4 py-3">{assignment.module}</td>
                      <td className="px-4 py-3">{assignment.action}</td>
                      <td className="px-4 py-3">{statusBadge(assignment.status)}</td>
                      <td className="px-4 py-3 flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded" title="Edit" onClick={() => handleEditAssign(assignment)}><Pencil className="w-4 h-4 text-gray-500" /></button>
                        <button className="p-2 hover:bg-gray-100 rounded" title="Delete"><Trash2 className="w-4 h-4 text-gray-500" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
            <div>Rows per page: <select className="border rounded px-1 py-0.5 ml-1"><option>10</option></select></div>
            <div>1-10 of 100 items</div>
          </div>
        </div>
      </main>

      {/* Add Module Modal/Sidebar */}
      {showAddModuleModal && (
        <div className="fixed inset-0 bg-white flex justify-end z-50">
          <div className="bg-white w-full md:w-96 h-full shadow-lg overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Add Module</h3>
              <button 
                onClick={() => setShowAddModuleModal(false)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Module Name</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  value={moduleForm.moduleName}
                  onChange={e => setModuleForm(f => ({ ...f, moduleName: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  className="w-full border rounded px-3 py-2"
                  rows={3}
                  value={moduleForm.description}
                  onChange={e => setModuleForm(f => ({ ...f, description: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={moduleForm.status}
                  onChange={e => setModuleForm(f => ({ ...f, status: e.target.value }))}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Action Modal/Sidebar */}
      {showAddActionModal && (
        <div className="fixed inset-0 bg-white flex justify-end z-50">
          <div className="bg-white w-full md:w-96 h-full shadow-lg overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Add Action</h3>
              <button 
                onClick={() => setShowAddActionModal(false)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Module</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={actionForm.module}
                  onChange={e => setActionForm(f => ({ ...f, module: e.target.value }))}
                >
                  <option value="">Select Module</option>
                  <option value="Sales">Sales</option>
                  <option value="Accounts">Accounts</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Admin">Admin</option>
                  <option value="HR">HR</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Action</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter Actions"
                  value={actionForm.action}
                  onChange={e => setActionForm(f => ({ ...f, action: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  className="w-full border rounded px-3 py-2"
                  rows={3}
                  placeholder="Add a short description here"
                  value={actionForm.description}
                  onChange={e => setActionForm(f => ({ ...f, description: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={actionForm.status}
                  onChange={e => setActionForm(f => ({ ...f, status: e.target.value }))}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Assign Role-Module Modal/Sidebar */}
      {showAssignRoleModuleModal && (
        <div className="fixed inset-0 bg-white flex justify-end z-50">
          <div className="bg-white w-full md:w-96 h-full shadow-lg overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Assign Role-Module</h3>
              <button 
                onClick={() => setShowAssignRoleModuleModal(false)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' /></svg>
              </button>
            </div>
            <form className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={assignForm.role}
                  onChange={e => setAssignForm(f => ({ ...f, role: e.target.value }))}
                >
                  <option value="">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Module</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={assignForm.module}
                  onChange={e => setAssignForm(f => ({ ...f, module: e.target.value }))}
                >
                  <option value="">Select Module</option>
                  <option value="Sales">Sales</option>
                  <option value="Accounts">Accounts</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Admin">Admin</option>
                  <option value="HR">HR</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Action</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={assignForm.action}
                  onChange={e => setAssignForm(f => ({ ...f, action: e.target.value }))}
                >
                  <option value="">Select Action</option>
                  <option value="Cancel btn">Cancel btn</option>
                  <option value="Save btn">Save btn</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={assignForm.status}
                  onChange={e => setAssignForm(f => ({ ...f, status: e.target.value }))}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Create New User Modal/Sidebar */}
      {showAddUserModal && (
        <div className="fixed inset-0 bg-white flex justify-end z-50">
          <div className="bg-white w-full md:w-96 h-full shadow-lg overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Create New User</h3>
              <button 
                onClick={() => setShowAddUserModal(false)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  value={userForm.name}
                  onChange={e => setUserForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2"
                  value={userForm.email}
                  onChange={e => setUserForm(f => ({ ...f, email: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full border rounded px-3 py-2"
                  value={userForm.password}
                  onChange={e => setUserForm(f => ({ ...f, password: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={userForm.role}
                  onChange={e => setUserForm(f => ({ ...f, role: e.target.value }))}
                >
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={userForm.status}
                  onChange={e => setUserForm(f => ({ ...f, status: e.target.value }))}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Create New Role Modal/Sidebar */}
      {showAddRoleModal && (
        <div className="fixed inset-0 bg-white flex justify-end z-50">
          <div className="bg-white w-full md:w-96 h-full shadow-lg overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Create New Role</h3>
              <button 
                onClick={() => setShowAddRoleModal(false)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role Name</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  value={roleForm.roleName}
                  onChange={e => setRoleForm(f => ({ ...f, roleName: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  className="w-full border rounded px-3 py-2"
                  rows={3}
                  value={roleForm.description}
                  onChange={e => setRoleForm(f => ({ ...f, description: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={roleForm.status}
                  onChange={e => setRoleForm(f => ({ ...f, status: e.target.value }))}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit User Modal/Sidebar */}
      {showEditUserModal && (
        <div className="fixed inset-0 bg-white flex justify-end z-50">
          <div className="bg-white w-full md:w-96 h-full shadow-lg overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Edit User</h3>
              <button 
                onClick={() => setShowEditUserModal(false)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">User Name</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  value={editUserForm.name}
                  onChange={e => setEditUserForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full border rounded px-3 py-2 pr-10"
                    value={editUserForm.password}
                    onChange={e => setEditUserForm(f => ({ ...f, password: e.target.value }))}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4 text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' /><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' /></svg>
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  value={editUserForm.role}
                  onChange={e => setEditUserForm(f => ({ ...f, role: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={editUserForm.status}
                  onChange={e => setEditUserForm(f => ({ ...f, status: e.target.value }))}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2"
                  value={editUserForm.email}
                  onChange={e => setEditUserForm(f => ({ ...f, email: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  className="w-full border rounded px-3 py-2"
                  rows={3}
                  value={editUserForm.description || 'Cyborg was here'}
                  onChange={e => setEditUserForm(f => ({ ...f, description: e.target.value }))}
                />
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Role Modal/Sidebar */}
      {showEditRoleModal && (
        <div className="fixed inset-0 bg-white flex justify-end z-50">
          <div className="bg-white w-full md:w-96 h-full shadow-lg overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Edit Role</h3>
              <button 
                onClick={() => setShowEditRoleModal(false)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role Name</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  value={editRoleForm.roleName}
                  onChange={e => setEditRoleForm(f => ({ ...f, roleName: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  className="w-full border rounded px-3 py-2"
                  rows={3}
                  value={editRoleForm.description}
                  onChange={e => setEditRoleForm(f => ({ ...f, description: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={editRoleForm.status}
                  onChange={e => setEditRoleForm(f => ({ ...f, status: e.target.value }))}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Module Modal/Sidebar */}
      {showEditModuleModal && (
        <div className="fixed inset-0 bg-white flex justify-end z-50">
          <div className="bg-white w-full md:w-96 h-full shadow-lg overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Edit Module</h3>
              <button 
                onClick={() => setShowEditModuleModal(false)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  value={editModuleForm.moduleName}
                  onChange={e => setEditModuleForm(f => ({ ...f, moduleName: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  className="w-full border rounded px-3 py-2"
                  rows={3}
                  value={editModuleForm.description}
                  onChange={e => setEditModuleForm(f => ({ ...f, description: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={editModuleForm.status}
                  onChange={e => setEditModuleForm(f => ({ ...f, status: e.target.value }))}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Action Modal/Sidebar */}
      {showEditActionModal && (
        <div className="fixed inset-0 bg-white flex justify-end z-50">
          <div className="bg-white w-full md:w-96 h-full shadow-lg overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Edit Action</h3>
              <button 
                onClick={() => setShowEditActionModal(false)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Module</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={editActionForm.module}
                  onChange={e => setEditActionForm(f => ({ ...f, module: e.target.value }))}
                >
                  <option value="Admin">Admin</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="HR">HR</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Action</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  value={editActionForm.action}
                  onChange={e => setEditActionForm(f => ({ ...f, action: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  className="w-full border rounded px-3 py-2"
                  rows={3}
                  value={editActionForm.description}
                  onChange={e => setEditActionForm(f => ({ ...f, description: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={editActionForm.status}
                  onChange={e => setEditActionForm(f => ({ ...f, status: e.target.value }))}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Assign Role-Module Modal/Sidebar */}
      {showEditAssignModal && (
        <div className="fixed inset-0 bg-white flex justify-end z-50">
          <div className="bg-white w-full md:w-96 h-full shadow-lg overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Edit Assign Role-Module</h3>
              <button 
                onClick={() => setShowEditAssignModal(false)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={editAssignForm.role}
                  onChange={e => setEditAssignForm(f => ({ ...f, role: e.target.value }))}
                >
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Module</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={editAssignForm.module}
                  onChange={e => setEditAssignForm(f => ({ ...f, module: e.target.value }))}
                >
                  <option value="Admin">Admin</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="HR">HR</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Action</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={editAssignForm.action}
                  onChange={e => setEditAssignForm(f => ({ ...f, action: e.target.value }))}
                >
                  <option value="Cancel btn">Cancel btn</option>
                  <option value="Save btn">Save btn</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={editAssignForm.status}
                  onChange={e => setEditAssignForm(f => ({ ...f, status: e.target.value }))}
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

export default UserManagement; 