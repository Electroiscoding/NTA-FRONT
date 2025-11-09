import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('posts');
  
  // Sample data
  const user = {
    name: 'JaneDoe',
    tier: 'Bronze',
    bio: 'Digital artist & content creator. Exploring the intersection of technology and art. Join my journey!',
    link: 'linktr.ee/janedoe',
    stats: {
      followers: '5.2K',
      following: 180,
      posts: 342
    },
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBP0vEVujLGPuUwW2gOkllXuIHXyNBz-qkkEzT8Wb-N_sKAItMMvgDRYMqkBn6xcjWo8-pAbnCxdCZSf6FbDNpWRjdUaxqyejaAq1wun3ogdz9Yq0iiwszij_akTg7UwOnzXN4UN6iRlbkwiqysXNL76FKnzAKM-baX9kxQAODa65QVPtqiPeuQxMILg3LOrbw57pB_ZG6KyqtfTriqYtt8jJMNgWnXLBgdlZUxbqhjUPnqZ-z_p2Os_Vp7yDLtzvEqs0DdCm93oNDu',
    headerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoX_ailhMCUExfR1H6xB65tumCbPdHo9oGigtgyD3MrQ-VO1YiKkopQ-iz0_q9itn5UC2WNRX16B2wE0zxG-lb2OKCQWv4zYFdVbAbXm2dwHf6jejr8crcz_AtPajlm69Qd6A0E_v6Wh4ZFqMWeCwnky6z1MiAvLb-DnLUaMsdct9tOMizjXYBvA0z7SVojXufnTBTu-giAlSTKW6NjMZGwkWUl0xXMiHexOl-wYoN9yL4tTavquMv_tYbpUrhqKKXnyLtdeWfd7vx',
    posts: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9Cl6rpZj5ExCfvpURI9caNMdmp9octLseEELUy_4NARd6SeG22E3XbzoPwIc9qUiYBompbcUz3B460-okNIN6fuVW7SqtUgJHqlUE2pf6FBWcQ3uGEH7mChyJk5emGy_0q0m4taMp4isuxJt2wdWir7VwV3Qj9Z7CGsWm-wlK8SpBUmYg2qEQrGpDFW-LoSxGqFapGbkIXpi0UoDaBXEfllXA424NjkRTjNs1pxKyFKULumsFIuZa8oCslwEGejbVm0l-DlmUD5wE',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_AG4ZSR0I2FxluI8UigDGMsbtnY46OFjyoeZOI8Uk2zE1pzbLChiXtm4nWBoRrU9NvAXwXXoFJSWuZEHP8BXCFuTMQ06eCn6krbJ1fHjWHA0DgzCaNaCdEyg5fP7G7c5sODGiEzRrseZvuOQhLBVaDLaipGMvEbbbjeFdCuABC9AIVbFWDyPS52h2lyqhk3AunveLmwBeoyukjmZzduw7d6kVgq5FSpW8RWJsLx36IhGVj_QP70h-njheRVLj8De6eq480NJP5N-V',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBEV_0TEAM_NTd7KTsWtdoT-u5qd1HCwb9haT9bOQhGjPJlHHu752tPJPXbpZTQtFmJx5MlvDJECtUOpIDdmhT7valLyaALQ9BvK9Td8CVqY7iymaMJiIAWzqu_mHKieXIcf4b1Er2BrXrJp8_9jR2uUFunxtnxCjEidCzSwgNGpgXP4D6yJP8cpQ8DCqfl_LNib1JYcKNo8il9l27AsGCnzf79WtIBxP82UVZE2zgFqY2SsY2TIHBdZzO0H5_bq0lltBzOMBmmE9Rq',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbFL54ASXNhOT_7HkdMGbal2TJhBhjTkAHmw1nrXEV4iQ9KQX8SBDZU8U-6ycWdAYzogF5yRyP75cbgjGtOPUqlau2lTyND5grtC5-V1FeilvghHfER97MkygD6xQYTw-yJxrGlrsZ7eD_wPYx9F7Oe7bqkjHXzrFidOIRsdwmdO8ZT0yML5TDYy8acTH26mm02KfIxhkEVo3yXNdfRcrJc4PEzhconbsvbGLKezuPJ3AqLnlGxDoViNQ-SxUNRu1Ut6UZuAwyMqK',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCW3I4ALHYH9sUT5vCSLoWij77sAArSqlr95Wi7H2XrRZnHCEr4KvVg6X9O3x2qV5zzDM3JPQTc1oWathJhpFpHqdCnz2Wqov02XgJJW6eZ8GpPBsVCetcsETtfiRdrbz9g1KNeYTyFycfeHYWLsr_vFC8RvGQDDT6MzZZa2FQqFcj-pbEdUiyZjLFU5KS29x-JJK_DA6PrsBQsVveqNncxB2NYcG6-xcBdVlbCh7uJnq5OWgph7uAzpFUBwXEFIqtzgbbxadLCHZ8e',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDv11s0rIPG3tjfqsgMOogCfKNzv8jB1flJ3RDDymlIvSJFLAQdFR-fxEf_FEdFb_4KtQqn8Q-L30OXP2oG2B8Tmj-c4HGdZ5OAKunwSzx-TNBJkvtLNl-7Eq6ozcQgqk0LY5knCxfTpjDgu01g1jz7_RJ6-TQdnXK-E6EIyHzvq3HXtEz8GndGgJJuPwj0_eNU8wRw4VCbVXxRZBuacsW96OMLYPLXzMrMggsDgbGpZaNaxFvi1d3-J5KJglJs_GREViViley4nm_g',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCq6hAhK3cxBoob2Xb06ebmZ7LNKsKlSw_9BVp9HJFmzqvuNkdYfLBXz-knDnkUWbXBUJKl0cJ4q1HXo6FVUKK3MJbhqpCc9VeCSuJpk7Hq2S7IB7cC-cFBVKEwoAr9xBxFpzPzNoh-9-29oBwH8ywdKhf2_NJ_qNwYPgNTWExpb9usKbUmSHqGPCVsnq5ux-OTTPYjJEiBYgXif9uiWk3oFUZ0-93LlEFvH8cUmitbS3GefJx3NEEaGIYy3S8pmbPb_lMFcnMS6yY3',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3e5F7W8ixp0r-B_kCoa7CoTUsQdPl8R4RPwH53V74tCCWJm2eURQDyIssna-CHL7UQ__PmzaBPOg2d9K57OG8jjUTxdo_1RkilNlL9DIMsRT8VSA4xg0XZamGTubVNWbwXy3D_cDg81syC3KF41vhZnPiWJA_sdudgZNS0PEZLCv-f2OyyafqczTKuCsoRxecW5WgIGeoMcQtxFLcxy7d3uywjkCnOpjdHVGAYhLsCY_ycCmzp4lytbyhza4_yFTXatU3pnv2m0k9',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBO1YA-k8yjRWxPA5BwdIGaWVfVnocLM9zQzop9ionl3Z72IPQhK-YeKJpY946KMi25X87mGLo3oShr2dm-ZvBFp5IYR8-C1zPGngis2JeXc4cy8gDKM6GTpw5z0E6QNU1x_RVbjwEZsgHKIoxZNHIG7KftHr2mzTvrgjeiT3VjqtJuufFHVHYamb1BTc-mTGUk3ntjdT2lZtqGWCmAx_6eAcV9gwjctuU-slnNoGTyZu3YZ_DqRChPw7OBZtRZxDPtP5yg7ja1R9Lb'
    ]
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const navigateToWallet = () => {
    navigate('/creator-hub');
  };

  const getTierEmoji = (tier) => {
    switch (tier.toLowerCase()) {
      case 'bronze':
        return '🥉';
      case 'silver':
        return '🥈';
      case 'gold':
        return '🥇';
      default:
        return '🏆';
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col dark overflow-x-hidden">
      {/* Header Image with Parallax Effect */}
      <div className="relative">
        <div 
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden min-h-[240px]" 
          style={{ 
            backgroundImage: `linear-gradient(0deg, rgba(16, 22, 34, 0.7) 0%, rgba(16, 22, 34, 0) 50%), url(${user.headerImage})` 
          }}
          aria-label="Profile header background"
        />
      </div>

      {/* Profile Header */}
      <div className="relative px-4 pb-4 -mt-16">
        <div className="flex w-full flex-col gap-4 items-start">
          <div className="flex gap-4 flex-col items-start w-full">
            <div className="relative">
              <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 border-4 border-[#101622]" 
                style={{ backgroundImage: `url(${user.avatar})` }}
                aria-label={`Profile picture of ${user.name}`}
              />
              <button className="absolute bottom-1 right-1 flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary text-white">
                <span className="material-symbols-outlined text-lg">edit</span>
              </button>
            </div>
            <div className="flex flex-col justify-center gap-1 w-full">
              <h1 className="text-white text-2xl font-bold leading-tight tracking-tight flex items-center gap-2">
                {user.name}
                <span className="text-base font-medium bg-amber-400/10 text-amber-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                  {getTierEmoji(user.tier)} {user.tier}
                </span>
              </h1>
              <p className="text-slate-300 dark:text-slate-400 text-base font-normal leading-normal">
                {user.bio}
              </p>
              <a 
                href={`https://${user.link}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary text-base font-normal leading-normal hover:underline"
              >
                {user.link}
              </a>
            </div>
          </div>
          
          <div className="flex w-full max-w-lg gap-3">
            <button 
              onClick={navigateToWallet}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-slate-200 dark:bg-[#232f48] text-slate-800 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] flex-1 gap-2"
            >
              <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
              <span className="truncate">Wallet</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] flex-1">
              <span className="truncate">Edit Profile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="flex flex-wrap gap-3 px-4 py-3">
        <div className="flex min-w-[100px] flex-1 basis-[fit-content] flex-col gap-1 rounded-lg border border-slate-300/40 dark:border-[#324467] bg-slate-500/5 dark:bg-transparent p-3 items-start">
          <p className="text-slate-900 dark:text-white tracking-light text-2xl font-bold leading-tight">
            {user.stats.followers}
          </p>
          <p className="text-slate-500 dark:text-[#92a4c9] text-sm font-normal leading-normal">
            Followers
          </p>
        </div>
        <div className="flex min-w-[100px] flex-1 basis-[fit-content] flex-col gap-1 rounded-lg border border-slate-300/40 dark:border-[#324467] bg-slate-500/5 dark:bg-transparent p-3 items-start">
          <p className="text-slate-900 dark:text-white tracking-light text-2xl font-bold leading-tight">
            {user.stats.following.toLocaleString()}
          </p>
          <p className="text-slate-500 dark:text-[#92a4c9] text-sm font-normal leading-normal">
            Following
          </p>
        </div>
        <div className="flex min-w-[100px] flex-1 basis-[fit-content] flex-col gap-1 rounded-lg border border-slate-300/40 dark:border-[#324467] bg-slate-500/5 dark:bg-transparent p-3 items-start">
          <p className="text-slate-900 dark:text-white tracking-light text-2xl font-bold leading-tight">
            {user.stats.posts.toLocaleString()}
          </p>
          <p className="text-slate-500 dark:text-[#92a4c9] text-sm font-normal leading-normal">
            Posts
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div>
        <div className="flex border-b border-slate-300/70 dark:border-[#324467] px-4 justify-between">
          {['posts', 'echoes', 'media', 'about'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 ${
                activeTab === tab 
                  ? 'border-b-primary text-slate-900 dark:text-white' 
                  : 'border-b-transparent text-slate-500 dark:text-[#92a4c9]'
              }`}
            >
              <p className="text-sm font-bold leading-normal tracking-[0.015em] capitalize">
                {tab}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-3 gap-2 p-4">
        {user.posts.map((post, index) => (
          <div key={index} className="aspect-square">
            <div 
              className="w-full h-full bg-cover bg-center rounded-lg" 
              style={{ backgroundImage: `url(${post})` }}
              aria-label={`Post ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
