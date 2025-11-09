import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const UserProfileView = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);
  
  // Sample data - in a real app, this would come from an API
  const user = {
    username: 'serenawilliams',
    name: 'Serena Williams',
    bio: 'Designer, adventurer, and storyteller. Crafting experiences and chasing sunsets.',
    location: 'San Francisco, CA',
    stats: {
      followers: '1.2k',
      following: 480,
      posts: 215
    },
    mutualConnections: [
      'https://lh3.google.com/aida-public/AB6AXuCXc9PsWueqfj-vEupR429hlsvdJQiRDiNY98DD8n8nZBk2IYl7gJylV7rIK_8khC-uJ_rhFubNvFjkVkZOzU97PLLLeQ9Wo8Ek8Y3KFT44D_VRGr56I0i_gaysjkDPw6AA9ODz0BWYVX6P_2IXKXp2lo9uINa744zFMEl4o_iKB2IvBtyzt-gvdtFcMNctgFnlX5QpBBdaek6OL9PBivYFpwfzKT9GoQt4V3bg01Fdb-M-nmR_FUkW1Kw0bYkb_4sFRAglQ1b9Lddj',
      'https://lh3.google.com/aida-public/AB6AXuBKmOk22Vymi2Vb87G3wNDnZRQli1tVK0qbRfE-KKMBgdXtyfsa3sYb8Y63CjWrTg48kK07MVI26OOrBRmk0DUgT6GvOpCIoxgbzssY9rtAMoVpvo11LzjSMgv7tZ133qV8vKCr1OFq0f1J8d_vfWXjaQgZyxUY1rPOhMCH2yFoD5E9gfjvRP7xE6FljAWXQZCbWB48fYQdZmpBK8v988P4UaKMuP13zvODo6Pk-vXy1pL3R-MmfoInhOJ3R7QsFCtpnRWT8oD8E5Gq',
      'https://lh3.google.com/aida-public/AB6AXuBYjbQTh1sYrP5hzxG0GpXnSM9W-o2-U9I-7hW8EykzOdhoKj1hx-kRnp027xzB8-M3w8DgqIZefeljB-LT93UVdCnMfxEEE6ijPt3H_f3sQmIQqqgVU6XiriSbhZl5livSfuiGeUzQy5XJ-ygiBqni3-FQIxxE0SFjVk7Eq_cjgeJc6hQWrrjy0agKXu5XcSwgn6cz3V1rU2ZxIrWTVFc6mBYdK-tfJeBI5UfHLLj2bVFR4-P9WexphLykjUGWXMiJo7NggDoiSIuy'
    ],
    mutualConnectionsCount: 12,
    headerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrvITa0WMYbzirjzi6djHDRtGbke6vreH9xHJLWZuZjq5puAYHDJnM9axdGZhbvMDlkN0DbDlLnowdR80euAUzsAUfZtMDCZWRNuWHV2jA8U2UqucpEiyKfls0mv1PPIXSYXH1U7nAXBplv6O0z7JJlIva9ikZd4hUO7_OfkBA71-T0oQ6aHnPMqRLEGYBe3KQz_JmKNbyJqoC8oYpVjpXJvpPMFpP7XCt6ojvpQjiLQk7Af5KZvgSwMBsAAOAAdsZanrzHjW28uUX',
    avatar: 'https://lh3.google.com/aida-public/AB6AXuDP-ZKQLS4Lu9_eCjbmysOQwlyVZ_dHgb43hipxaDRCnIZfUMFvTJxRLLjDS4iSaHujuIcdWZbJynB6WiNFaBJzWDLXND3Z4sTgSNtm4Q1qrj3wqmrDTnR8EVwA7FBRgToSUjwOr7ciekCpf8yPdlBbZnRnF75rSqCxLnreavKmrayEff9gaAm6nWD6sluQjX_AZjDsN2PeCalieBdr8utLrT1tqh9RlS070UK_ZCRcjnmEmRBhx8IGFWPZdWVDCRDb55IorT4XGqI9',
    posts: [
      {
        id: 1,
        content: "Just wrapped up a new design concept for Netuark. So excited to share a sneak peek with you all! What do you think?",
        image: 'https://lh3.google.com/aida-public/AB6AXuDxyTzi1NeVW8qyyb16PVrmuV9aYUARYgdKCZfd2rpMNQqoAtCItK1aQAxUVVDZmf3bsRBCBkhERl2PsaPp5L0wfnqF2brh-8x3mEf77twmht3tXmSpnTTLzPwLFt8RqvmyzpdEA9cvrX0jwPyScmjK_3IGZC4juV4FL6klM5Vvi7IUKwG_CoH6ix2og1ilv7096fM2392Ln0Ts2GLBYvZ7kq7V622mwg3HuDPazSzzA3f6owEyZCVs2dLj1IyvwOQvgz3P4nxbvxqh',
        timeAgo: '2h ago',
        likes: '1.1k',
        comments: 243,
        shares: 45,
        user: {
          name: 'Serena Williams',
          avatar: 'https://lh3.google.com/aida-public/AB6AXuCvKie2bOtkZgVGjWNywTkpFCG2dfjA5XWNbZuyBanZ93hUng-WcjA_RtlxdCJgjSMptPzXLSAlIZhKbzuZ2wxxREkHEhE6r-IWXrRgUrUQy7mOSr67BfKqpy5uT174VFn5ZxYaEshsdMpUeDw-VmSWsWtpdnKrSsa3yP6fn_FptLnMD-eLI45hXig34MCZjAhcWLxyO4yI7ZwRCGbs-iktM2Yf-g3PrsuyGgDuISlqigFtIo6BGp-jEyDHwUbv6UbyNL0mi8KlUkHe'
        }
      },
      {
        id: 2,
        content: "Morning hike views from Twin Peaks. San Francisco, you're a beauty. ☀️",
        image: 'https://lh3.google.com/aida-public/AB6AXuBoBYWlqmLrKlFpilHFkpHdTOZsvzm_M-eBg2P-sw6yHJnPHlhWzzxxbZPQM-GsL5-KoEiL74R1EawjcsXbRwtwkQaUAmY01Jv0RwI0Fqh_ckBKoEojcT-Bd-ncG_GV7Wt-g6e_1qwEP2hVl7Eg4EK0CJ5h7qy1Ea8G0EkqHWjHh6jiTsO4PKdJmqZSHoq9YzS7BxhB5NYTKsrJduo9W4RmHsWAUFbFWPOuZYiuFbyKp1bgmAgb-qElrLPk4I9lL8Fc1jcF9hc4gpZ9',
        timeAgo: '1d ago',
        likes: '2.5k',
        comments: 512,
        shares: 98,
        user: {
          name: 'Serena Williams',
          avatar: 'https://lh3.google.com/aida-public/AB6AXuCMguYqpfhVmJWKFDGnwF072XQ_J-4kOtfLDQbcBQRImrbkVvFJfgBZQMQKBiP3XfoDIOyS3AnqF28M-iEm06_LY0gFqbOkNG6WVdT4CX9NF0G4OY8OBKfGzfib_OvS5toNN30xJ2KZ6V0dNjAqbq9HKsVQ5fe0hgmOcnswfWqrhSlRL6umrWVAAY-dJgz-1PuPzXduIx82o3n4PLIzc3OGYKQUvkSSwoDK0T5lxGXAIJlQKtOzQwzLnGH5zA5GiEzUPGv9Oof6KUs0'
        }
      }
    ]
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    // In a real app, you would call an API to follow/unfollow the user
  };

  const handleMessage = () => {
    // Navigate to chat with this user
    navigate(`/chat/${user.username}`);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-brand-background dark:bg-background-dark overflow-x-hidden">
      {/* Top App Bar */}
      <div className="sticky top-0 z-20 flex items-center bg-brand-background/80 dark:bg-background-dark/80 p-4 pb-2 justify-between backdrop-blur-sm">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-12 shrink-0 items-center justify-start text-brand-primary dark:text-brand-background"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-brand-primary dark:text-brand-background text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          @{user.username}
        </h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-brand-primary dark:text-brand-background gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span className="material-symbols-outlined text-2xl">more_horiz</span>
          </button>
        </div>
      </div>

      {/* Header Section */}
      <div className="relative">
        {/* Header Image (Parallax Cover) */}
        <div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-brand-secondary/20 min-h-60" 
          style={{ backgroundImage: `url(${user.headerImage})` }}
          aria-label={`${user.name}'s cover photo`}
        />

        {/* Profile Info Overlay */}
        <div className="p-4 pt-0 -mt-16 relative z-10">
          <div className="flex w-full flex-col gap-4 items-start">
            {/* Avatar */}
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 border-4 border-brand-background dark:border-background-dark" 
              style={{ backgroundImage: `url(${user.avatar})` }}
              aria-label={`${user.name}'s profile picture`}
            />

            {/* User Details */}
            <div className="flex flex-col justify-center gap-1">
              <p className="text-brand-primary dark:text-brand-background text-[22px] font-bold leading-tight tracking-[-0.015em]">
                {user.name}
              </p>
              <p className="text-brand-secondary text-base font-normal leading-normal">
                {user.bio}
              </p>
              <p className="text-brand-secondary text-sm font-normal leading-normal flex items-center gap-1">
                <span className="material-symbols-outlined text-base">location_on</span>
                <span>{user.location}</span>
              </p>
            </div>

            {/* Mutual Connections */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {user.mutualConnections.map((avatar, index) => (
                  <div key={index} className="overflow-visible -mr-3">
                    <div 
                      className="bg-center bg-no-repeat aspect-square bg-cover border-brand-background dark:border-background-dark rounded-full flex items-center justify-center size-8 border-2" 
                      style={{ backgroundImage: `url(${avatar})` }}
                      aria-label={`Mutual connection ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <p className="text-brand-secondary text-sm font-medium leading-normal">
                Followed by {user.mutualConnections[0].split('/').pop().substring(0, 10)} and {user.mutualConnectionsCount} others
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex w-full gap-3 pt-2">
              <button 
                onClick={handleFollow}
                className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] flex-1 ${
                  isFollowing 
                    ? 'bg-brand-primary/20 dark:bg-brand-background/10 text-brand-primary dark:text-brand-background'
                    : 'bg-brand-accent text-white'
                }`}
              >
                <span className="truncate">{isFollowing ? 'Following' : 'Follow'}</span>
              </button>
              <button 
                onClick={handleMessage}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-brand-primary/20 dark:bg-brand-background/10 text-brand-primary dark:text-brand-background text-sm font-bold leading-normal tracking-[0.015em] flex-1"
              >
                <span className="truncate">Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="flex flex-wrap gap-3 px-4 py-3">
        <div className="flex min-w-[100px] flex-1 basis-[fit-content] flex-col rounded-lg bg-brand-primary/10 dark:bg-brand-background/5 p-3 items-start">
          <p className="text-brand-primary dark:text-brand-background tracking-light text-2xl font-bold leading-tight">
            {user.stats.followers}
          </p>
          <p className="text-brand-secondary text-sm font-normal leading-normal">
            Followers
          </p>
        </div>
        <div className="flex min-w-[100px] flex-1 basis-[fit-content] flex-col rounded-lg bg-brand-primary/10 dark:bg-brand-background/5 p-3 items-start">
          <p className="text-brand-primary dark:text-brand-background tracking-light text-2xl font-bold leading-tight">
            {user.stats.following.toLocaleString()}
          </p>
          <p className="text-brand-secondary text-sm font-normal leading-normal">
            Following
          </p>
        </div>
        <div className="flex min-w-[100px] flex-1 basis-[fit-content] flex-col rounded-lg bg-brand-primary/10 dark:bg-brand-background/5 p-3 items-start">
          <p className="text-brand-primary dark:text-brand-background tracking-light text-2xl font-bold leading-tight">
            {user.stats.posts.toLocaleString()}
          </p>
          <p className="text-brand-secondary text-sm font-normal leading-normal">
            Posts
          </p>
        </div>
      </div>

      {/* Tab Navigator */}
      <div className="sticky top-[72px] z-20 border-b border-brand-primary/10 dark:border-brand-background/10 bg-brand-background/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="flex justify-around">
          {['posts', 'echoes', 'media', 'about'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`flex-1 py-3 text-center text-sm font-${activeTab === tab ? 'bold' : 'medium'} ${
                activeTab === tab 
                  ? 'text-brand-accent border-b-2 border-brand-accent' 
                  : 'text-brand-secondary'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Content Feed */}
      <div className="p-4 space-y-4">
        {activeTab === 'posts' && user.posts.map((post) => (
          <div key={post.id} className="flex flex-col gap-3 rounded-lg border border-brand-primary/10 dark:border-brand-background/10 p-4">
            <div className="flex items-center gap-3">
              <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
                style={{ backgroundImage: `url(${post.user.avatar})` }}
                aria-label={`${post.user.name}'s profile picture`}
              />
              <div>
                <p className="font-bold text-brand-primary dark:text-brand-background">{post.user.name}</p>
                <p className="text-sm text-brand-secondary">{post.timeAgo}</p>
              </div>
            </div>
            <p className="text-brand-primary dark:text-brand-background">{post.content}</p>
            {post.image && (
              <div 
                className="aspect-[16/10] w-full rounded-lg bg-center bg-no-repeat bg-cover bg-brand-secondary/20" 
                style={{ backgroundImage: `url(${post.image})` }}
                aria-label="Post content image"
              />
            )}
            <div className="flex justify-around text-brand-secondary pt-2">
              <button className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">favorite</span> {post.likes}
              </button>
              <button className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">chat_bubble</span> {post.comments}
              </button>
              <button className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">cached</span> {post.shares}
              </button>
              <button className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">share</span>
              </button>
            </div>
          </div>
        ))}
        
        {activeTab !== 'posts' && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <span className="material-symbols-outlined text-4xl text-brand-secondary mb-2">
              {activeTab === 'echoes' ? 'repeat' : activeTab === 'media' ? 'photo_library' : 'info'}
            </span>
            <p className="text-brand-secondary text-lg font-medium">
              {activeTab === 'echoes' 
                ? 'No echoes yet' 
                : activeTab === 'media' 
                  ? 'No media to show' 
                  : 'About section coming soon'}
            </p>
            <p className="text-brand-secondary/70 text-sm mt-1">
              {activeTab === 'echoes' 
                ? 'When this user shares posts, they\'ll appear here.'
                : activeTab === 'media'
                  ? 'When this user posts photos or videos, they\'ll appear here.'
                  : 'User information and details will be displayed here.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileView;
