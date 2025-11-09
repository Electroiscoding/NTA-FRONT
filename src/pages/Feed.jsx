import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreatePost from '../components/CreatePost';

const Feed = () => {
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  // Sample post data
  const posts = [
    {
      id: 1,
      user: {
        name: 'Jane Doe',
        username: 'janedoe',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYxpCmZn3o1D2waS6aBp-kPX1RwyOCvFUo8FVZElwa3kNLVKDTswDgKEzlO5665xMlKY1EMk1hROf55muUKxpxNJ0SxGd8xrrfsDplQSq9IEdgT-jiUxQkMJQ4lEKVIXNR8_L7vwf_aHgmSnEfqi16iDUbuJsHfm-Bk_pk63dOWufr__oVaJgq-w4Bav83QTCOD8V7W6kW_IU9vq3BEUIEvTn3LzJw_UvNpQERYCCW2IvuoQFGRBZ8RV10qAceefQvhcCh-frAJkmF',
      },
      time: '5m',
      type: 'text',
      content: 'This is a sample text post with a subtle gradient background indicating the AI-detected sentiment of the content. It\'s designed to be clean and readable.',
      title: 'AI-Enhanced Text Post',
      stats: {
        comments: '1.2k',
        reposts: '890',
        likes: '4.1k',
        isLiked: false,
      },
      tags: ['#AI', '#Design'],
      visibility: 'public',
    },
    {
      id: 2,
      user: {
        name: 'John Smith',
        username: 'johnsmith',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4XuFqwE8X3hF3Zb_6T_bBNj9W-dPvSPLXIuKGw98u90I2wD9A9HFuLU6UN2Chd-l3qydGo8m-hCivFWP7U1qz5_xtwYR5gLs8G3cPRXdutY8X25e6xgvqNGtgWlffNOUpC-V1sArRCyGfHnjlqY7vyyE3wbrToVx32p9SOo0_DNsKgk5CeVJCC1u1ycBtVwVr5wcnhCmdYdbPIcfu6D0zedJq41ZaCNCbjDcApM8O37FdQwh6H0-OtKUIyT61Ru8UIWh_L0RxYHgd',
      },
      time: '12m',
      type: 'image',
      content: 'Just got back from an amazing trip! The views were breathtaking.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjpuyM4RWn_DaQETxLvc4a_fFKCMZOjAe7W1Zvqb6m-ID--tQ0V1eVrvfMPbytuInx3vLgI-uUb_MMF7sDrEKdrc4DlqH3V8BmktjnlD0EfAKXTDZ7ju74gpON0u73__8BNmOlY7BoCxScIM34PDqz04KpNulJZZMB6Funmlm89YvzI2I039yndlZJsGAX9qEZJxO3mVoabwkbOHaS3_pD54hseJupIo-uslN6JWzEwTUkJKBYHbKQZ0pjVj7FUuU19RXXBfOzL5S_',
      stats: {
        comments: '452',
        reposts: '128',
        likes: '2.7k',
        isLiked: true,
      },
      tags: ['#travel', '#adventure'],
      visibility: 'group',
    },
    {
      id: 3,
      user: {
        name: 'Emily White',
        username: 'emilyw',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRz6GjjhDmDrMvaWYp041ivJNKeR8S1qCsrhVqP6DrCZyQzX_-stnZnW7oN0ZYPIUh0CJ8oiR4wECZyhphw17fYe4hRDT4lVbpOqt8E1e04_SuL4NqgUhUy6hpPxkxEB21VGo8MXhL9eyL8zQUH9lgDHso2yy1tioiiBiKIAJiOlHMuMl2yfPi5cYYwMaQu0-rbLqudmBRu5L0H25ZbIw9u5LgT_vPPlbrmgkgdh0xWPCSUhcHLhuvLKIROm8S_rySfVCP-S1k93KW',
      },
      time: '1h',
      type: 'poll',
      content: 'What\'s the best framework for new projects in 2024?',
      poll: {
        options: [
          { name: 'React', percentage: 65 },
          { name: 'Vue', percentage: 25 },
          { name: 'Svelte', percentage: 10 },
        ],
        totalVotes: '2,345',
        endsIn: '3 days',
        voters: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA7yv-Y4I12SgLMFmeXqLARqLg0r0pDCY4EWg2HnpZC1zfDe8RYiyv0xaDJwMltlQYcCRr7KwH4Kmuruq8ekcvxHZz5C9l2UjaokWvm7xOgK9vH_VbEpZ5azu4YM0yP_BTBwCcoxHd4SYMFeIv-NU44iVUHW1XUR7aZjErLy9zZcelNn9g36MHd_AiaJB1PA0wsfPiElZF0E-6TwHU9Uj9juv4U2FNBgpZ6uUeV_VyFnxrrahQjsZrJojDpMs6Sdy88lVV84TlNc3ax',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBPF_kjx7aSDmz8u-TUY1b32JVGUwMuS91aeuVBVmZPadGRquRHC0e_5jgG8IVh15nEMXoMWXDHBz1Bfzl4gWD8a27lXxqG1-bQm7z3r5E9vlDIcZZEXGW3C7TG7X6ZwcSDfvaBtH9MidRNlJIS8f0DLRUxXOcbU1iVB9zTF0KkXlAxM8h00B7T1uYcXBa5phE38sfory8CadrIckdHY1Qc9G5FuwiStmHPaxJ50OgJUhUEAyzLzw6pgLpMohJDTPwTM_j9YraB261n',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDObjHZVgmREYg6M2DPDiabDVWxezIcGWpzMuWZAvLMiiDrkdAD8USUGtZJn_7xGwczkpbHHnoGO4f1t379TB0kfhVa_BCBmmho8Q_tC_GQyPoE_B6D2SMNfyqxvdcOnZvGqtPDcRqNatZHILoIFMobWFPtMDZKqHwDgPdP94ynEKrQr1wGam3RNKLc-a8mTxW_hjv9jPvLs9XlUsr8pU41_mpSIuYutgA4mHX-Y2dY6eExwjpckxlwG2j9OHLN2ewYwWaDKaUU0V8B',
        ],
      },
      stats: {
        comments: '98',
        reposts: '45',
        likes: '1.1k',
        isLiked: false,
      },
      visibility: 'public',
    },
  ];

  const getVisibilityIcon = (visibility) => {
    switch (visibility) {
      case 'public':
        return 'public';
      case 'group':
        return 'group';
      case 'private':
        return 'lock';
      default:
        return 'public';
    }
  };

  const renderPost = (post) => {
    switch (post.type) {
      case 'text':
        return (
          <div className="my-4 flex w-full flex-col items-stretch justify-center gap-2 rounded-lg bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 p-4">
            {post.title && <p className="text-lg font-bold leading-tight tracking-[-0.015em] text-text-light-primary dark:text-text-dark-primary">{post.title}</p>}
            <p className="text-base font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
              {post.content} {post.tags?.map((tag, i) => (
                <span key={i} className="text-accent"> {tag}</span>
              ))}
            </p>
          </div>
        );
      case 'image':
        return (
          <div className="my-4 flex w-full flex-col items-stretch justify-center gap-2">
            <p className="text-base font-normal leading-normal text-text-light-primary dark:text-text-dark-primary">
              {post.content} {post.tags?.map((tag, i) => (
                <span key={i} className="text-accent"> {tag}</span>
              ))}
            </p>
            <div 
              className="mt-2 w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" 
              style={{ backgroundImage: `url(${post.image})` }}
              aria-label="Post content image"
            />
          </div>
        );
      case 'poll':
        return (
          <div className="my-4 flex w-full flex-col items-stretch justify-center gap-3">
            <p className="text-base font-normal leading-normal text-text-light-primary dark:text-text-dark-primary">{post.content}</p>
            <div className="space-y-2">
              {post.poll.options.map((option, index) => (
                <div key={index} className="relative w-full rounded-full border border-border-light dark:border-border-dark p-3">
                  <div 
                    className="absolute inset-0 bg-accent/20 rounded-full" 
                    style={{ width: `${option.percentage}%` }}
                  />
                  <p className="relative text-text-light-primary dark:text-text-dark-primary">
                    {option.name} ({option.percentage}%)
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2 overflow-hidden">
                {post.poll.voters.map((voter, i) => (
                  <img 
                    key={i}
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-background-dark" 
                    src={voter} 
                    alt="Voter avatar"
                  />
                ))}
              </div>
              <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                {post.poll.totalVotes} votes · Poll ends in {post.poll.endsIn}
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative mx-auto flex h-auto min-h-screen w-full max-w-lg flex-col overflow-x-hidden">
      <CreatePost isOpen={isCreatePostOpen} onClose={() => setIsCreatePostOpen(false)} />
      {/* Top App Bar */}
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="flex items-center p-4">
          <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-text-light-secondary dark:text-text-dark-secondary">
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
          <div className="flex-1 px-2">
            <label className="flex flex-col h-12 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-full h-full">
                <div className="text-text-light-secondary dark:text-text-dark-secondary flex border-border-light dark:border-border-dark bg-gray-100 dark:bg-card-dark items-center justify-center pl-4 rounded-l-full border">
                  <span className="material-symbols-outlined text-2xl">search</span>
                </div>
                <input 
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-full text-text-light-primary dark:text-text-dark-primary focus:outline-0 focus:ring-0 border-border-light dark:border-border-dark bg-gray-100 dark:bg-card-dark focus:border-border-light dark:focus:border-border-dark h-full placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary px-4 text-base font-normal leading-normal" 
                  placeholder="Search Netuark..."
                />
              </div>
            </label>
          </div>
          <button className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full p-0">
            <img 
              className="h-10 w-10 object-cover rounded-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGHFHhnywsaZn2Js1bTwqmmyWTnlQcGoBK9LcCraJET9z4sWAEbhMJ2z3aphg9Xol1-QbROAiNqBaGztURcy_CnGxkQCAU3vVoQQakrNxNyikukgCf2EeorcPnbR4XecHrB2MiN8Ki5N-6gOObRzzL0es97tylp11lXoW7z_Eb82i0m7c0zU32Rm0_wJIvkJ5a5Q_WLom9h0Af7YmTtYhgVptc3sdBqdrzvFUp4-PIjJeqDFw4baFClT5J2JuE1pU9Cb7srPjhW3Pg" 
              alt="User profile"
            />
          </button>
        </div>
        <button className="absolute top-20 right-4 flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-white text-sm shadow-lg">
          <span className="material-symbols-outlined text-base">auto_awesome</span>
          <span>AI Chat</span>
        </button>
      </header>

      {/* Main Feed Content */}
      <main className="flex-1 pb-24">
        {/* Skeleton Loader - Show while loading */}
        <div className="p-4 animate-pulse">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-border-dark"></div>
            <div className="flex-1 space-y-2 py-1">
              <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-border-dark"></div>
              <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-border-dark"></div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-4 rounded bg-gray-200 dark:bg-border-dark"></div>
            <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-border-dark"></div>
          </div>
          <div className="mt-4 h-48 rounded-lg bg-gray-200 dark:bg-border-dark"></div>
        </div>

        {/* Posts */}
        {posts.map((post) => (
          <div key={post.id} className="p-4 border-b border-border-light dark:border-border-dark">
            <div className="flex flex-col items-stretch justify-start">
              {/* Post Header */}
              <div className="flex items-center gap-3">
                <img 
                  className="h-12 w-12 rounded-full object-cover" 
                  src={post.user.avatar} 
                  alt={`${post.user.name}'s profile`}
                />
                <div className="flex-grow">
                  <p className="text-text-light-primary dark:text-text-dark-primary font-bold">
                    {post.user.name} <span className="text-text-light-secondary dark:text-text-dark-secondary font-normal">
                      @{post.user.username} · {post.time}
                    </span>
                  </p>
                  <span className="material-symbols-outlined text-sm text-text-light-secondary dark:text-text-dark-secondary">
                    {getVisibilityIcon(post.visibility)}
                  </span>
                </div>
                <button className="text-text-light-secondary dark:text-text-dark-secondary">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>

              {/* Post Content */}
              {renderPost(post)}

              {/* Post Actions */}
              <div className="flex items-center justify-around text-text-light-secondary dark:text-text-dark-secondary">
                <button className="flex items-center justify-center gap-2 px-3 py-2 hover:text-accent">
                  <span className="material-symbols-outlined text-xl">maps_ugc</span>
                  <span className="text-sm font-medium">{post.stats.comments}</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-3 py-2 hover:text-accent">
                  <span className="material-symbols-outlined text-xl">repeat</span>
                  <span className="text-sm font-medium">{post.stats.reposts}</span>
                </button>
                <button className={`flex items-center justify-center gap-2 px-3 py-2 ${post.stats.isLiked ? 'text-red-500' : 'hover:text-accent'}`}>
                  <span className={`material-symbols-outlined text-xl ${post.stats.isLiked ? 'fill' : 'outlined'}`}>
                    favorite
                  </span>
                  <span className={`text-sm font-medium ${post.stats.isLiked ? 'text-red-500' : ''}`}>
                    {post.stats.likes}
                  </span>
                </button>
                <button className="flex items-center justify-center gap-2 px-3 py-2 hover:text-accent">
                  <span className="material-symbols-outlined text-xl">ios_share</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Bottom Tab Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-10 mx-auto max-w-lg border-t border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="flex h-20 items-center justify-around">
          <Link to="/feed" className="flex flex-col items-center gap-1 text-accent">
            <span className="material-symbols-outlined text-2xl">home</span>
            <span className="text-xs font-bold">Feed</span>
          </Link>
          <Link to="/pulse" className="flex flex-col items-center gap-1 text-text-light-secondary dark:text-text-dark-secondary">
            <span className="material-symbols-outlined text-2xl">pulse_alert</span>
            <span className="text-xs font-bold">Pulse</span>
          </Link>
          <button 
            onClick={() => setIsCreatePostOpen(true)}
            className="flex h-16 w-16 -translate-y-6 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">add</span>
          </button>
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

export default Feed;