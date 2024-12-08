'use client';

import { useState } from 'react';
import { User, Package, Settings, LogOut } from 'lucide-react';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="bg-purple-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4">
            {/* Sidebar */}
            <div className="bg-purple-600 p-6 text-white">
              <div className="space-y-6">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex items-center w-full px-4 py-2 rounded-md ${
                    activeTab === 'profile'
                      ? 'bg-white text-purple-600'
                      : 'hover:bg-purple-500'
                  }`}
                >
                  <User className="h-5 w-5 mr-3" />
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`flex items-center w-full px-4 py-2 rounded-md ${
                    activeTab === 'orders'
                      ? 'bg-white text-purple-600'
                      : 'hover:bg-purple-500'
                  }`}
                >
                  <Package className="h-5 w-5 mr-3" />
                  Orders
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center w-full px-4 py-2 rounded-md ${
                    activeTab === 'settings'
                      ? 'bg-white text-purple-600'
                      : 'hover:bg-purple-500'
                  }`}
                >
                  <Settings className="h-5 w-5 mr-3" />
                  Settings
                </button>
                <button className="flex items-center w-full px-4 py-2 rounded-md hover:bg-purple-500">
                  <LogOut className="h-5 w-5 mr-3" />
                  Logout
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="col-span-3 p-8">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold text-purple-900 mb-6">
                    Profile Information
                  </h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                    >
                      Save Changes
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold text-purple-900 mb-6">
                    Order History
                  </h2>
                  <div className="space-y-4">
                    {[1, 2, 3].map((order) => (
                      <div
                        key={order}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Order #{order}123</p>
                            <p className="text-sm text-gray-500">
                              Placed on March {order}, 2024
                            </p>
                          </div>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            Delivered
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold text-purple-900 mb-6">
                    Account Settings
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Notifications
                      </h3>
                      <div className="space-y-2">
                        {['Order updates', 'Promotions', 'Newsletter'].map(
                          (item) => (
                            <label
                              key={item}
                              className="flex items-center space-x-3"
                            >
                              <input
                                type="checkbox"
                                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                              />
                              <span className="text-gray-700">{item}</span>
                            </label>
                          )
                        )}
                      </div>
                    </div>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                      Save Preferences
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}