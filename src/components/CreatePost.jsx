import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [isAITranslateOn, setIsAITranslateOn] = useState(false);
  const [activeTab, setActiveTab] = useState('text');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post submission
    console.log('Post submitted:', { content: postContent, aiTranslate: isAITranslateOn });
    setIsOpen(false);
    setPostContent('');
  };

  const tabs = [
    { id: 'text', label: 'Text', icon: 'text_fields' },
    { id: 'media', label: 'Media', icon: 'image' },
    { id: 'poll', label: 'Poll', icon: 'poll' },
    { id: 'article', label: 'Article', icon: 'article' },
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-10">
        <button 
          onClick={() => setIsOpen(true)}
          className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 w-14 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg hover:bg-primary/90 transition-colors"
        >
          <span className="material-symbols-outlined text-white text-3xl">add</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Bottom Sheet */}
      <div className="absolute bottom-0 left-0 right-0 h-[95vh] max-h-screen bg-background-light dark:bg-background-dark rounded-t-2xl overflow-hidden flex flex-col">
        {/* Handle for Bottom Sheet */}
        <div className="flex h-5 w-full items-center justify-center pt-2 flex-shrink-0">
          <div className="h-1 w-9 rounded-full bg-slate-300 dark:bg-slate-700"></div>
        </div>

        {/* Top App Bar */}
        <div className="flex items-center justify-between p-4 pb-2 flex-shrink-0">
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-800 dark:text-white flex size-12 shrink-0 items-center justify-start"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Create Post
          </h2>
          <div className="flex w-12 items-center justify-end">
            <button 
              onClick={handleSubmit}
              disabled={!postContent.trim()}
              className={`text-sm font-bold leading-normal tracking-[0.015em] shrink-0 px-4 py-1.5 rounded-full ${
                postContent.trim() 
                  ? 'bg-primary text-white cursor-pointer' 
                  : 'bg-primary/50 text-white/70 cursor-not-allowed'
              }`}
            >
              Post
            </button>
          </div>
        </div>

        {/* Composer */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Tabs */}
          <div className="pb-3 px-4 flex-shrink-0">
            <div className="flex border-b border-slate-200 dark:border-slate-800 justify-between">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 ${
                    activeTab === tab.id
                      ? 'border-b-primary text-primary'
                      : 'border-b-transparent text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">{tab.label}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Composer Content Area */}
          <div className="flex items-start px-4 py-3 gap-3 flex-1">
            <div className="flex flex-col min-w-40 h-full flex-1">
              <div className="flex w-full flex-1 items-stretch h-full">
                <div className="flex pt-1.5">
                  <div 
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0"
                    style={{
                      backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAL5SyWYlASfzPVstKor8Rx9h6EnSQ4oRAne-uH_yXiW8zM4tEOddT0Vh-lyh-19cwCddeVPE4QnCjrMCrG845Q7JuVeAXsRAc176tex6L9pmlUUpAcye7tFixdLB6I6VgKu1kf-vkyeisgMBwbDi53lUARU_-V20dx4Nhi9A629PguHzyvOsrSZSpO71JKRJ-27Uv0Xbc8x6X9gaMolY2R57R14QFbdJNfnCVnm8ZcVSCqXLsuKQZXMOVHKQ5dVKfjZP3OokhbpO8D)'
                    }}
                    aria-label="User's profile picture"
                  />
                </div>
                <div className="flex flex-1 flex-col pl-3">
                  <textarea
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden bg-transparent text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-0 p-2 placeholder:text-slate-500 dark:placeholder:text-slate-400 text-base font-normal leading-normal"
                    placeholder="What's on your mind?"
                    rows={8}
                    autoFocus
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Rich Text Formatting & AI Toggle */}
          <div className="flex-shrink-0 p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="flex items-center justify-center p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-xl">format_bold</span>
                </button>
                <button className="flex items-center justify-center p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-xl">format_italic</span>
                </button>
                <button className="flex items-center justify-center p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-xl">format_list_bulleted</span>
                </button>
                <button className="flex items-center justify-center p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-xl">format_list_numbered</span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">AI Translate</span>
                <button 
                  onClick={() => setIsAITranslateOn(!isAITranslateOn)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    isAITranslateOn ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'
                  }`}
                  role="switch"
                >
                  <span 
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      isAITranslateOn ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Footer/Action Bar */}
          <div className="flex flex-col gap-4 p-4 border-t border-slate-200 dark:border-slate-800 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <button className="flex items-center justify-center p-2 rounded-full hover:bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">image</span>
                </button>
                <button className="flex items-center justify-center p-2 rounded-full hover:bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">poll</span>
                </button>
                <button className="flex items-center justify-center p-2 rounded-full hover:bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">article</span>
                </button>
              </div>
              <div className="flex items-center gap-4 justify-end">
                <button className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary">
                  <span className="material-symbols-outlined text-xl">auto_awesome</span>
                  <span className="text-sm font-medium hidden sm:block">AI Enhancer</span>
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                  <span className="material-symbols-outlined text-lg">public</span>
                  <span className="text-sm font-medium">Public</span>
                  <span className="material-symbols-outlined text-lg">arrow_drop_down</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
