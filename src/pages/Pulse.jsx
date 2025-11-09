import React from 'react';
import { Link } from 'react-router-dom';

const Pulse = () => {
  const trendingEchoes = [
    {
      id: 1,
      content: "The debate around universal basic income is heating up again. Is it a viable solution for future economic challenges or a utopian dream?",
      author: "@innovator",
      upvotes: "1.2k"
    },
    {
      id: 2,
      content: "Decentralized social media isn't just a concept anymore. Platforms are emerging that give users full control over their data. This is the future.",
      author: "@degen_dave",
      upvotes: "986"
    },
    {
      id: 3,
      content: "Just saw a demo of a neural interface that translates thoughts into text with 95% accuracy. The speed of innovation is breathtaking.",
      author: "@futurefocus",
      upvotes: "842"
    }
  ];

  const globalTrends = [
    { name: "#QuantumLeap", mentions: "1.5M" },
    { name: "#SustainableTech", mentions: "980k" },
    { name: "#BioHacking", mentions: "750k" },
    { name: "#GenAI", mentions: "620k" },
    { name: "#AugmentedReality", mentions: "410k" }
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-background-light p-4 pb-2 dark:bg-background-dark">
        <div className="size-12 shrink-0 text-white/90">
          <span className="material-symbols-outlined text-3xl">search</span>
        </div>
        <h2 className="flex-1 text-center text-xl font-bold leading-tight tracking-tight text-white">Pulse</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex h-12 min-w-0 max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-transparent p-0 text-base font-bold leading-normal text-white/90">
            <span className="material-symbols-outlined text-3xl">notifications</span>
          </button>
        </div>
      </div>

      <main className="flex-1 pb-24">
        {/* Section: What's Buzzing? */}
        <section className="px-4 py-4">
          <h3 className="pb-4 text-lg font-bold leading-tight tracking-[-0.015em] text-white">What's Buzzing?</h3>
          <div className="relative flex h-80 w-full items-center justify-center p-4">
            {/* Topic Cloud Bubbles */}
            <div className="absolute left-[5%] top-[10%] flex h-[130px] w-[130px] items-center justify-center rounded-full bg-[#2ECC71] p-2 text-center">
              <p className="text-lg font-bold text-white">AI Ethics</p>
            </div>
            <div className="absolute right-[10%] top-[5%] flex h-20 w-20 items-center justify-center rounded-full bg-[#3498DB] p-2 text-center">
              <p className="text-sm font-medium text-white">Web3</p>
            </div>
            <div className="absolute left-[30%] top-[40%] flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#2ECC71] p-2 text-center">
              <p className="text-xl font-bold text-white">Future of Work</p>
            </div>
            <div className="absolute left-[5%] top-[60%] flex h-[110px] w-[110px] items-center justify-center rounded-full bg-[#E74C3C] p-2 text-center">
              <p className="text-base font-semibold text-white">Cybersecurity</p>
            </div>
            <div className="bottom-[5%] right-[10%] absolute flex h-[95px] w-[95px] items-center justify-center rounded-full bg-[#3498DB] p-2 text-center">
              <p className="text-sm font-medium text-white">Data Privacy</p>
            </div>
            <div className="absolute right-[2%] top-[55%] flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#E74C3C] p-2 text-center">
              <p className="text-xs font-medium text-white">Market Crash</p>
            </div>
          </div>
        </section>

        {/* Section: Current Sentiment */}
        <section className="px-4 py-4">
          <h3 className="pb-4 text-lg font-bold leading-tight tracking-[-0.015em] text-white">Current Sentiment</h3>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <p className="text-base font-medium leading-normal text-white">Positive</p>
                <p className="text-sm font-normal leading-normal text-white/80">58%</p>
              </div>
              <div className="h-2 rounded-full bg-[#232f48]">
                <div className="h-2 rounded-full bg-[#2ECC71]" style={{ width: '58%' }}></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <p className="text-base font-medium leading-normal text-white">Neutral</p>
                <p className="text-sm font-normal leading-normal text-white/80">23%</p>
              </div>
              <div className="h-2 rounded-full bg-[#232f48]">
                <div className="h-2 rounded-full bg-[#3498DB]" style={{ width: '23%' }}></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <p className="text-base font-medium leading-normal text-white">Negative</p>
                <p className="text-sm font-normal leading-normal text-white/80">19%</p>
              </div>
              <div className="h-2 rounded-full bg-[#232f48]">
                <div className="h-2 rounded-full bg-[#E74C3C]" style={{ width: '19%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Trending Echoes */}
        <section className="py-4">
          <h3 className="px-4 pb-4 text-lg font-bold leading-tight tracking-[-0.015em] text-white">Trending Echoes</h3>
          <div className="scrollbar-hide flex gap-4 overflow-x-auto px-4 pb-4">
            {trendingEchoes.map((echo) => (
              <div key={echo.id} className="flex w-64 flex-shrink-0 flex-col gap-3 rounded-lg bg-[#1a2233] p-4">
                <p className="text-sm text-white/90">{echo.content}</p>
                <div className="flex items-center justify-between text-white/60">
                  <p className="text-xs font-medium">{echo.author}</p>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">arrow_upward</span>
                    <span className="text-xs font-medium">{echo.upvotes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Global Trends */}
        <section className="px-4 py-4">
          <h3 className="pb-4 text-lg font-bold leading-tight tracking-[-0.015em] text-white">Global Trends (Unbiased)</h3>
          <div className="flex flex-col gap-1">
            {globalTrends.map((trend, index) => (
              <div key={index} className="flex cursor-pointer items-center justify-between rounded-lg p-3 hover:bg-white/5">
                <p className="font-medium text-white">{trend.name}</p>
                <p className="text-sm text-white/60">{trend.mentions} mentions</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Tab Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-10 mx-auto max-w-lg border-t border-border-light bg-background-light/80 backdrop-blur-sm dark:border-border-dark dark:bg-background-dark/80">
        <div className="flex h-20 items-center justify-around">
          <Link to="/feed" className="flex flex-col items-center gap-1 text-text-light-secondary dark:text-text-dark-secondary">
            <span className="material-symbols-outlined text-2xl">home</span>
            <span className="text-xs font-bold">Feed</span>
          </Link>
          <Link to="/pulse" className="flex flex-col items-center gap-1 text-accent">
            <span className="material-symbols-outlined text-2xl">pulse_alert</span>
            <span className="text-xs font-bold">Pulse</span>
          </Link>
          <Link to="/create" className="flex h-16 w-16 -translate-y-6 items-center justify-center rounded-full bg-primary text-white shadow-lg">
            <span className="material-symbols-outlined text-3xl">add</span>
          </Link>
          <Link to="/chat" className="flex flex-col items-center gap-1 text-text-light-secondary dark:text-text-dark-secondary">
            <span className="material-symbols-outlined text-2xl">chat_bubble</span>
            <span className="text-xs font-bold">Chat</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center gap-1 text-text-light-secondary dark:text-text-dark-secondary">
            <span className="material-symbols-outlined text-2xl">person</span>
            <span className="text-xs font-bold">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Pulse;
