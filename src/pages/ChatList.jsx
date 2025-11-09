import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MarsEmoji from '../components/MarsEmoji';

const ChatList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample conversation data
  const conversations = [
    {
      id: 1,
      type: 'private',
      name: 'Jane Doe',
      lastMessage: 'Sounds good, see you then!',
      time: '10:45 AM',
      unreadCount: 2,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVs7WrJrByZRDJm6i8LljIku_AZ5Db51v18x3uGBrEBfm-zMSbsEKRlAeTfHxN5pa48JMsnFetVf4eHo5aRcG1omOGG5_4Boept4-CkAcCgpkeVMlKJqrB_I4tP0mWkaQzBzknc7kTiNnWBV4yVYClhX0MGrOmRu1-H_liFzRywP2iTXs7K-dFklH5pkJ-moRcgXS4kX4QOWfRCsrBdRCrFci063Ed48JzTKUsz1oIOShDF-Ry1t98Ab5-Po-YDVSPYBgvV9T3Essr',
      isOnline: true
    },
    {
      id: 2,
      type: 'group',
      name: 'Project Phoenix Team',
      lastMessage: 'Alex: Can you check the latest mockups?',
      time: 'Yesterday',
      members: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBoQkfMDmB5LUDIsOlYjr38kIbzweUNpUFDlBN7va1rRLYmNQE7hqDczyCPh-YJkqrkE0g6SpEnbD7AbJn1nnWkMqxIeJB-kdl26erpX3JOozmDiqpdjxV43qWww-BBXNgmcDKaCltXyo05vQS2afBZH_x8BF05PcCa6BVMi6qODoFS4u_yBInHGm8R755Y8jJVyfiUQcAHW0j046f0q_WSQohJaTaMRGcA5rj1dWjRdDObSgTDdFZuhZglG1irGw67uEMjN4o8zeGC',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDZjBKrLJAgZtPlT4raijwNo5ya4yQeBkHuOOZMkaX5Yq3ji90yCWI9FFnwMSke9SNlAoIC-RaQwxc5es5bPf9sgZri4rBiPkXL6AF4O5kB43KUPEHNGFZsrBYQ6s8POGn5tGiKJeWzsC-HWgCCyBxHYRedE6zRPNaeyG6NWvsHwAjjjoIY39iuZ2sFQsIkveQXjfuaAusnW_oEFm7sMH7u-fVljVDVhi4wQQM-voTYRpjwfauLufcb5iHdVpk7S7OliZY7dkOMPNPc'
      ]
    },
    {
      id: 3,
      type: 'broadcast',
      name: 'Company Announcements',
      lastMessage: 'Reminder: Q3 All-Hands is...',
      time: 'Tue',
      icon: 'campaign'
    },
    {
      id: 4,
      type: 'vanish',
      name: 'Sarah Lee',
      lastMessage: 'Secret meeting details...',
      time: '1h ago',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgqb9VtpN7k0kwZyGh3H-3-9SLV0E-z9ZlpOucBS4KBtKoUawy5mWOYNzCOvlrzK2T-R39edO54Q04SoPjzSuTSEcZOqZPGKS7nMEaP_yx6Bq2Z2N3LrI_z4hyXCasFEVdYL34kcQFUfg_d17i1uqh3gUTJyDiX97uMlX3Si_4dupRC66XJLhqUNl7OXWEKKuFDLLZNOORAw1VMRYkJGzYw7qC4JBZkEN9r7bONtjvc7CEGfuCF4yFEZl0OgNNhNSufM08Ea1l9pxW',
      isVanishMode: true
    }
  ];

  const filteredConversations = conversations.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderAvatar = (chat) => {
    if (chat.type === 'group') {
      return (
        <div className="relative flex -space-x-4 shrink-0">
          {chat.members.slice(0, 2).map((member, index) => (
            <img
              key={index}
              alt={`Team member avatar ${index + 1}`}
              className={`relative z-${20 - (index * 10)} inline-block h-14 w-14 rounded-full ring-2 ring-netuark-bg-light dark:ring-netuark-bg-dark`}
              src={member}
            />
          ))}
        </div>
      );
    } else if (chat.type === 'broadcast') {
      return (
        <div className="flex items-center justify-center rounded-full bg-netuark-divider-dark shrink-0 size-14">
          <span className="material-symbols-outlined text-netuark-accent">{chat.icon}</span>
        </div>
      );
    } else {
      return (
        <div className="relative">
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14" 
            style={{ backgroundImage: `url(${chat.avatar})` }}
            aria-label={`Avatar of ${chat.name}`}
          />
          {chat.isOnline && (
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-netuark-bg-light dark:border-netuark-bg-dark"></div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="relative mx-auto flex h-screen max-w-lg flex-col overflow-hidden bg-netuark-bg-light dark:bg-netuark-bg-dark">
      {/* Top App Bar */}
      <div className="flex items-center justify-between p-4 pb-2 shrink-0">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <button className="text-netuark-text-primary-light dark:text-netuark-text-primary-dark">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
        <h1 className="text-netuark-text-primary-light dark:text-netuark-text-primary-dark text-2xl font-bold leading-tight tracking-tight flex-1 text-center flex items-center justify-center gap-2">
          Netuark <MarsEmoji className="h-[1em] w-auto" />
        </h1>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center text-netuark-text-primary-light dark:text-netuark-text-primary-dark">
            <span className="material-symbols-outlined text-3xl">settings</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3 shrink-0">
        <div className="relative">
          <label className="flex flex-col w-full">
            <div className="flex w-full items-center rounded-full bg-netuark-divider-light/50 dark:bg-netuark-divider-dark h-14">
              <div className="text-netuark-text-secondary-light dark:text-netuark-text-secondary-dark flex items-center justify-center pl-4">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none focus:ring-0 text-netuark-text-primary-light dark:text-netuark-text-primary-dark placeholder-netuark-text-secondary-light dark:placeholder-netuark-text-secondary-dark px-2"
                placeholder="Search"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="text-netuark-text-secondary-light dark:text-netuark-text-secondary-dark pr-4"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              )}
            </div>
          </label>
        </div>
      </div>

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col">
          {filteredConversations.map((chat) => (
            <Link 
              to={`/chat/${chat.id}`} 
              key={chat.id}
              className="flex items-center gap-4 px-4 min-h-[72px] py-3 justify-between border-b border-netuark-divider-light dark:border-netuark-divider-dark hover:bg-netuark-divider-light/30 dark:hover:bg-netuark-divider-dark/30 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                {renderAvatar(chat)}
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-netuark-text-primary-light dark:text-netuark-text-primary-dark text-base font-bold leading-normal truncate">
                      {chat.name}
                    </p>
                    {chat.time && !chat.unreadCount && (
                      <p className="text-netuark-text-secondary-light dark:text-netuark-text-secondary-dark text-xs font-normal leading-normal shrink-0 ml-2">
                        {chat.time}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {chat.isVanishMode && (
                      <span className="material-symbols-outlined text-netuark-accent text-sm">destruction</span>
                    )}
                    <p className="text-netuark-text-secondary-light dark:text-netuark-text-secondary-dark text-sm font-normal leading-normal truncate">
                      {chat.lastMessage}
                    </p>
                  </div>
                </div>
              </div>
              
              {chat.unreadCount ? (
                <div className="shrink-0 flex flex-col items-end gap-1.5">
                  <p className="text-netuark-primary text-xs font-semibold leading-normal">{chat.time}</p>
                  <div className="flex size-6 items-center justify-center rounded-full bg-netuark-primary text-white text-xs font-bold">
                    {chat.unreadCount}
                  </div>
                </div>
              ) : (
                <p className="text-netuark-text-secondary-light dark:text-netuark-text-secondary-dark text-xs font-normal leading-normal shrink-0">
                  {chat.time}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="absolute bottom-6 right-6">
        <button className="flex items-center justify-center w-16 h-16 rounded-2xl bg-netuark-primary text-white shadow-lg hover:bg-opacity-90 transition-all">
          <span className="material-symbols-outlined text-4xl">add</span>
        </button>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-10 mx-auto max-w-lg border-t border-netuark-divider-light dark:border-netuark-divider-dark bg-netuark-bg-light/80 dark:bg-netuark-bg-dark/80 backdrop-blur-sm">
        <div className="flex h-20 items-center justify-around">
          <Link to="/feed" className="flex flex-col items-center gap-1 text-netuark-text-secondary-light dark:text-netuark-text-secondary-dark">
            <span className="material-symbols-outlined text-2xl">home</span>
            <span className="text-xs font-bold">Feed</span>
          </Link>
          <Link to="/pulse" className="flex flex-col items-center gap-1 text-netuark-text-secondary-light dark:text-netuark-text-secondary-dark">
            <span className="material-symbols-outlined text-2xl">pulse_alert</span>
            <span className="text-xs font-bold">Pulse</span>
          </Link>
          <Link to="/chat" className="flex flex-col items-center gap-1 text-netuark-primary">
            <span className="material-symbols-outlined text-2xl">chat_bubble</span>
            <span className="text-xs font-bold">Chat</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center gap-1 text-netuark-text-secondary-light dark:text-netuark-text-secondary-dark">
            <span className="material-symbols-outlined text-2xl">person</span>
            <span className="text-xs font-bold">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default ChatList;
