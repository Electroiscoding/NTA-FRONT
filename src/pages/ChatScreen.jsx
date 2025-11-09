import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ChatScreen = () => {
  const { chatId } = useParams();
  const [message, setMessage] = useState('');
  const [showSummary, setShowSummary] = useState(true);
  const messagesEndRef = useRef(null);

  // Sample messages data
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'them',
      text: 'Hey, just checking in. Did you get a chance to look over the collaborative document I sent? Let me know your thoughts!',
      time: '10:30 AM',
      isPinned: false,
      isSecured: true
    },
    {
      id: 2,
      sender: 'me',
      text: 'Hey Alex! Yes, I did. I\'m adding my comments now. This collaborative panel is pretty slick.',
      time: '10:32 AM',
      isPinned: false,
      isSecured: true
    },
    {
      id: 3,
      sender: 'them',
      text: 'Here is the latest version of the file.',
      time: '10:33 AM',
      isPinned: false,
      isSecured: true,
      file: {
        name: 'Project Phoenix - Q3 Strategy.docx',
        preview: 'The Q3 strategy focuses on market expansion...',
        collaborator1: 'typing...',
        collaborator2: 'I think we should also prioritize user retention.'
      }
    },
    {
      id: 4,
      sender: 'me',
      text: 'Awesome, let\'s sync up tomorrow at 10 AM to finalize it.',
      time: '10:35 AM',
      isPinned: true,
      isSecured: true
    }
  ]);

  // Sample chat data
  const chatData = {
    id: chatId,
    name: 'Alex Doe',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHK2jNUk95rL3B-AXt9Pwvr9DU4X9o2dVxTz1Cdrn-cX-D4P9adp7pI3Vc1zKfHSB2_smctepZt95RXwhTFX2Ud19Q3xDW2Uzd-Ffr3vC3IGdeko71B49v2HV015qk-VujkJQaVvmIXJy_DrpZx1rbBFb-k6497iKzmxITKOUHUMh6vtD-7GsFsn9RzyNblmC6VTFWCHXFnXVvOICgZVcV6KEIuLtZAOznPI5xmuMuqmYnCEzfEiTWSS5nMM955yvfSPexIspTLm_N',
    status: 'Online',
    isOnline: true
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'me',
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isPinned: false,
      isSecured: true
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="relative mx-auto flex h-screen max-w-lg flex-col bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-background-light/[.85] px-4 backdrop-blur-sm dark:bg-background-dark/[.85]">
        <div className="flex items-center gap-3">
          <Link to="/chat" className="text-slate-800 dark:text-white">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </Link>
          <div className="relative">
            <div 
              className="h-10 w-10 rounded-full bg-cover bg-center" 
              style={{ backgroundImage: `url(${chatData.avatar})` }}
              aria-label={`Avatar of ${chatData.name}`}
            />
            {chatData.isOnline && (
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background-light bg-[#34C759] dark:border-background-dark" />
            )}
          </div>
          <div>
            <h1 className="text-base font-bold text-slate-900 dark:text-white">{chatData.name}</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">{chatData.status}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-slate-700 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined text-primary">call</span>
          </button>
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-slate-700 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined">mist</span>
          </button>
        </div>
      </header>

      {/* Messages Area */}
      <main className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-4">
          {/* AI Summary Card */}
          {showSummary && (
            <div className="flex items-stretch justify-between gap-4 rounded-xl bg-slate-100 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)] dark:bg-slate-800/50">
              <div className="flex flex-[2_2_0px] flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-base font-bold text-slate-900 dark:text-white">AI Summary</p>
                  <p className="text-sm font-normal leading-normal text-slate-600 dark:text-slate-400">
                    {chatData.name} is asking for feedback on the document. You've started adding your comments.
                  </p>
                </div>
                <button 
                  onClick={() => setShowSummary(false)}
                  className="flex w-fit cursor-pointer items-center justify-center gap-1 rounded-lg bg-slate-200 px-4 pr-2 text-sm font-medium leading-normal text-slate-700 dark:bg-slate-700 dark:text-slate-200 h-8"
                >
                  <span className="truncate">Dismiss</span>
                  <span className="material-symbols-outlined text-base">close</span>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-primary">auto_awesome</span>
              </div>
            </div>
          )}

          {/* Messages */}
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex items-end gap-3 ${msg.sender === 'me' ? 'self-end justify-end' : 'self-start'}`}
            >
              {msg.sender !== 'me' && (
                <div 
                  className="h-8 w-8 shrink-0 rounded-full bg-cover bg-center" 
                  style={{ backgroundImage: `url(${chatData.avatar})` }}
                  aria-label={`Avatar of ${chatData.name}`}
                />
              )}
              
              <div className={`relative flex max-w-[80%] flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                {msg.file ? (
                  <div className="w-full rounded-xl rounded-bl-sm bg-slate-200 p-3 text-slate-900 dark:bg-slate-800 dark:text-white">
                    <p className="px-1 pb-2">{msg.text}</p>
                    <div className="rounded-lg bg-background-light p-3 dark:bg-background-dark">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                          <span className="material-symbols-outlined text-primary">description</span>
                        </div>
                        <p className="flex-1 text-sm font-medium leading-normal line-clamp-2">
                          {msg.file.name}
                        </p>
                      </div>
                      <div className="mt-3 h-20 w-full rounded-md border border-slate-300 p-2 text-xs font-mono dark:border-slate-700">
                        <p>{msg.file.preview}</p>
                        <p className="text-green-500">{msg.file.collaborator2}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p 
                    className={`flex items-center gap-2 px-4 py-3 text-base font-normal leading-normal rounded-xl ${
                      msg.sender === 'me' 
                        ? 'bg-primary text-white rounded-br-sm' 
                        : 'bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-white rounded-bl-sm'
                    }`}
                  >
                    <span>{msg.text}</span>
                    {msg.isSecured && (
                      <span className="material-symbols-outlined text-xs opacity-70">
                        {msg.sender === 'me' ? 'lock' : 'lock'}
                      </span>
                    )}
                  </p>
                )}
                
                {msg.isPinned && (
                  <div className="absolute -left-2 -top-2 rounded-full bg-amber-400 p-1 text-slate-800 shadow-sm">
                    <span className="material-symbols-outlined text-xs">push_pin</span>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Bar */}
      <footer className="sticky bottom-0 flex shrink-0 items-center gap-2 border-t border-slate-200 bg-background-light p-2 dark:border-slate-800 dark:bg-background-dark">
        <button className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-slate-500 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined">add_circle</span>
        </button>
        <form onSubmit={handleSendMessage} className="relative flex-1">
          <input 
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-10 w-full rounded-full border-transparent bg-slate-200 px-4 pr-12 text-slate-900 placeholder:text-slate-500 focus:border-primary focus:ring-primary dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400" 
            placeholder="Message..."
          />
          <button 
            type="button"
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-slate-500 hover:bg-slate-300 dark:text-slate-400 dark:hover:bg-slate-700"
          >
            <span className="material-symbols-outlined text-xl">mood</span>
          </button>
        </form>
        <button className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-slate-500 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined">mic</span>
        </button>
      </footer>
    </div>
  );
};

export default ChatScreen;
