import React from 'react';
import { Link } from 'react-router-dom';

const CreatorHub = () => {
  // Sample data
  const walletBalance = 1234.56;
  const milestone = {
    title: 'New Studio Mic',
    progress: 75,
    current: 750,
    target: 1000,
    description: 'Your community is helping you reach your next milestone. Keep creating amazing content!'
  };

  const brandOffers = [
    {
      id: 1,
      brand: 'GamerFuel',
      type: '3-Post Campaign',
      description: 'Promote our new energy drink in your next three videos.',
      amount: 500,
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJRFrjTqMQ7HiTb3TOo8Ly12LTg0-pyx8MOZe4ey5vNhzXzZcLXUtaz3zWl0LAf9V8slSgWuYMva8XUyYJyUQSyQUgiCvKmqIAKNFzA7LKseM2KunVeCSFZvA41E2IixFE31j944kIJMdlGwocAPrLFWI_rxAa-rHYbuJvTfP3j-04SsX6TBgQWhYzyXgXTg3zyx_Q02lbtkNxNJ0YmjeDGbkerox6DmQ-qKGd_in6vSjUTKGExxSGZnN7XKowZ7jTl_k4SKFwWKWf'
    },
    {
      id: 2,
      brand: 'TechSphere',
      type: 'Product Unboxing',
      description: 'Unbox and review our latest flagship smartphone.',
      amount: 850,
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfiRmns_HD565MkGZ6DpvZgzKzCk4sO9_stzDK_L5F-lv2U66JDvwzLOqXHLtF4yHE3RDyQylFHIWCl1jdHEGS3YmTif6sbOb8pBjIC5dKiUENJYcJIEUULTfs8ImUr89Q-_YP--PJ3PuGC7puUxAh6w5VAqEoUUforZvqJnGLfEREpD-d-obJDNtvTk6IBoEttz-0oQTNvEcNs0e6TuZaTID35485sV6EyStsioxntZgIC9qhkvttdGOj6ABF1fh55sYML7uDloCF'
    }
  ];

  const [isAdFreeEnabled, setIsAdFreeEnabled] = React.useState(true);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      {/* Top App Bar */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light dark:bg-background-dark">
        <Link to="/" className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-start -ml-2">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </Link>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Creator Hub
        </h2>
        <div className="flex size-12 shrink-0 items-center justify-end"></div>
      </div>

      {/* Creator Wallet Section */}
      <div className="px-4 py-6">
        <div className="bg-slate-200/50 dark:bg-slate-800/40 rounded-lg p-6 flex flex-col items-center text-center">
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pb-1">
            Creator Wallet
          </p>
          <h1 className="text-gradient tracking-light text-5xl font-bold leading-tight pb-6">
            ${walletBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h1>
          <button className="flex min-w-[84px] max-w-[480px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary text-white gap-2 text-base font-bold leading-normal tracking-[0.015em]">
            <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
            <span className="truncate">Receive a Tip</span>
          </button>
        </div>
      </div>

      {/* Milestone Funding Section */}
      <div className="px-4 pb-6">
        <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-2">
          Next Goal: {milestone.title}
        </h2>
        <div className="bg-slate-200/50 dark:bg-slate-800/40 rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="relative flex items-center justify-center size-40">
            <svg className="size-full" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
              <circle className="stroke-slate-300 dark:stroke-slate-700" cx="18" cy="18" fill="none" r="16" strokeWidth="3" />
              <circle 
                className="stroke-primary" 
                cx="18" 
                cy="18" 
                fill="none" 
                r="16" 
                strokeDasharray={`${milestone.progress} 100`} 
                strokeDashoffset={100 - milestone.progress} 
                strokeLinecap="round" 
                strokeWidth="3" 
                transform="rotate(-90 18 18)" 
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-slate-900 dark:text-white text-3xl font-bold">{milestone.progress}%</span>
              <span className="text-slate-600 dark:text-slate-400 text-sm">funded</span>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              {milestone.description}
            </p>
            <p className="text-slate-900 dark:text-white text-lg font-bold mt-2">
              ${milestone.current.toLocaleString()} / ${milestone.target.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Brand Collaboration Dashboard */}
      <div className="pb-6">
        <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-2">
          Brand Collaboration Dashboard
        </h2>
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-4 px-4">
          {brandOffers.map((offer) => (
            <div key={offer.id} className="flex-shrink-0 w-80 snap-center bg-slate-200/50 dark:bg-slate-800/40 rounded-lg p-5">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  className="w-12 h-12 rounded-full object-cover" 
                  alt={`${offer.brand} logo`} 
                  src={offer.logo} 
                />
                <div>
                  <p className="text-slate-900 dark:text-white font-bold">{offer.brand}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{offer.type}</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{offer.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gradient">${offer.amount.toLocaleString()}</span>
                <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold">
                  View Offer
                </button>
              </div>
            </div>
          ))}
          
          {/* Empty State Card */}
          <div className="flex-shrink-0 w-80 snap-center bg-slate-200/50 dark:bg-slate-800/40 rounded-lg p-5 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-4xl text-slate-500 mb-2">work_history</span>
            <p className="text-slate-900 dark:text-white font-bold mb-1">No More Offers</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Check back later for new brand collaborations.</p>
          </div>
        </div>
      </div>

      {/* Monetization Settings */}
      <div className="px-4 pb-8">
        <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-2">
          Monetization Settings
        </h2>
        <div className="bg-slate-200/50 dark:bg-slate-800/40 rounded-lg p-5">
          <div className="flex items-center justify-between">
            <div className="flex-1 pr-4">
              <p className="text-slate-900 dark:text-white font-medium">Ad-Free Experience</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                Enable ethical ads to let supporters browse ad-free.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={isAdFreeEnabled}
                onChange={() => setIsAdFreeEnabled(!isAdFreeEnabled)}
              />
              <div className="w-11 h-6 bg-slate-300 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorHub;
