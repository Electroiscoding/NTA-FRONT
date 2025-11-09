import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    accountShield: true,
    vanishDefault: false,
    aiBreachAlerts: true,
    aiAudienceAllocator: true,
    smartTopicDiscovery: false,
    highContrast: false,
    voiceInput: true,
  });

  const [activeTheme, setActiveTheme] = useState('dark');

  const toggleSetting = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const SettingItem = ({ icon, title, description, isToggle = false, isChecked = false, onClick, hasDivider = true }) => (
    <>
      <div className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between">
        <div className="flex items-center gap-4">
          <div className="text-primary flex items-center justify-center rounded-lg bg-icon-bg-light dark:bg-icon-bg-dark shrink-0 size-12">
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">{title}</p>
            <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-normal leading-normal">{description}</p>
          </div>
        </div>
        <div className="shrink-0">
          {isToggle ? (
            <button 
              onClick={onClick}
              className={`relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full p-0.5 transition-colors ${isChecked ? 'bg-primary' : 'bg-border-light dark:bg-border-dark'}`}
            >
              <div className="h-full w-[27px] rounded-full bg-white transition-transform transform translate-x-0" style={{
                transform: isChecked ? 'translateX(20px)' : 'translateX(0)',
                boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px'
              }} />
            </button>
          ) : (
            <div className="text-text-light-secondary dark:text-text-dark-secondary flex size-7 items-center justify-center">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          )}
        </div>
      </div>
      {hasDivider && <hr className="border-t border-border-light dark:border-border-dark ml-20" />}
    </>
  );

  const ThemeOption = ({ theme, label, isActive, onClick }) => (
    <button 
      onClick={onClick}
      className="text-center focus:outline-none"
    >
      <div 
        className={`aspect-square rounded-lg border-2 ${isActive ? 'border-primary' : 'border-border-light dark:border-border-dark'}`}
        style={{
          backgroundColor: 
            theme === 'light' ? '#f7f8fc' : 
            theme === 'dark' ? '#333945' : 
            '#000000'
        }}
      />
      <p className={`text-sm mt-2 ${isActive ? 'text-primary font-medium' : 'text-text-light-secondary dark:text-text-dark-secondary'}`}>
        {label}
      </p>
    </button>
  );

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      {/* Top App Bar */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 bg-background-light dark:bg-background-dark z-10">
        <Link to="/" className="text-text-light dark:text-text-dark flex size-12 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined text-3xl">arrow_back</span>
        </Link>
        <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Settings
        </h2>
        <div className="flex size-12 shrink-0"></div>
      </div>

      <div className="flex-grow px-4 pb-24 overflow-y-auto">
        {/* Privacy Section */}
        <h3 className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold leading-tight tracking-wide px-4 pb-2 pt-4">
          PRIVACY
        </h3>
        <div className="bg-item-bg-light dark:bg-item-bg-dark rounded-lg overflow-hidden">
          <SettingItem
            icon="shield"
            title="Account Shield"
            description="Enhanced security for your account"
            isToggle
            isChecked={settings.accountShield}
            onClick={() => toggleSetting('accountShield')}
          />
          <SettingItem
            icon="history_toggle_off"
            title="Vanish default"
            description="Set messages to disappear automatically"
            isToggle
            isChecked={settings.vanishDefault}
            onClick={() => toggleSetting('vanishDefault')}
          />
          <SettingItem
            icon="fingerprint"
            title="Private vault"
            description="Access your biometrically-locked area"
            hasDivider={false}
          />
          <SettingItem
            icon="security_update_warning"
            title="AI breach alerts"
            description="Proactive security notifications"
            isToggle
            isChecked={settings.aiBreachAlerts}
            onClick={() => toggleSetting('aiBreachAlerts')}
            hasDivider={false}
          />
        </div>

        {/* AI Section */}
        <h3 className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold leading-tight tracking-wide px-4 pb-2 pt-6">
          AI
        </h3>
        <div className="bg-item-bg-light dark:bg-item-bg-dark rounded-lg overflow-hidden">
          <SettingItem
            icon="group"
            title="AI Audience Allocator"
            description="Enable smart content distribution"
            isToggle
            isChecked={settings.aiAudienceAllocator}
            onClick={() => toggleSetting('aiAudienceAllocator')}
          />
          <SettingItem
            icon="policy"
            title="AI Moderation"
            description="Manage automated moderation settings"
          />
          <SettingItem
            icon="explore"
            title="Smart topic discovery"
            description="Get AI-powered content suggestions"
            isToggle
            isChecked={settings.smartTopicDiscovery}
            onClick={() => toggleSetting('smartTopicDiscovery')}
          />
          <SettingItem
            icon="smart_toy"
            title="Algo chat"
            description="Configure your chatbot assistant"
            hasDivider={false}
          />
        </div>

        {/* Appearance Section */}
        <h3 className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold leading-tight tracking-wide px-4 pb-2 pt-6">
          APPEARANCE
        </h3>
        <div className="bg-item-bg-light dark:bg-item-bg-dark rounded-lg p-4">
          <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal mb-3">Theme</p>
          <div className="grid grid-cols-3 gap-4">
            <ThemeOption 
              theme="light" 
              label="Light" 
              isActive={activeTheme === 'light'}
              onClick={() => setActiveTheme('light')}
            />
            <ThemeOption 
              theme="dark" 
              label="Dark" 
              isActive={activeTheme === 'dark'}
              onClick={() => setActiveTheme('dark')}
            />
            <ThemeOption 
              theme="midnight" 
              label="Midnight" 
              isActive={activeTheme === 'midnight'}
              onClick={() => setActiveTheme('midnight')}
            />
          </div>
        </div>

        {/* Accessibility Section */}
        <h3 className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold leading-tight tracking-wide px-4 pb-2 pt-6">
          ACCESSIBILITY
        </h3>
        <div className="bg-item-bg-light dark:bg-item-bg-dark rounded-lg overflow-hidden">
          <SettingItem
            icon="contrast"
            title="High contrast"
            description="Increase text and UI contrast"
            isToggle
            isChecked={settings.highContrast}
            onClick={() => toggleSetting('highContrast')}
          />
          <SettingItem
            icon="keyboard_voice"
            title="Voice input"
            description="Enable voice commands for navigation"
            isToggle
            isChecked={settings.voiceInput}
            onClick={() => toggleSetting('voiceInput')}
            hasDivider={false}
          />
        </div>

        {/* Offline Section */}
        <h3 className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold leading-tight tracking-wide px-4 pb-2 pt-6">
          OFFLINE
        </h3>
        <div className="bg-item-bg-light dark:bg-item-bg-dark rounded-lg overflow-hidden">
          <SettingItem
            icon="bookmark_added"
            title="Save for later"
            description="Manage your offline content"
            hasDivider={false}
          />
        </div>

        {/* Multi-device Sync Section */}
        <h3 className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold leading-tight tracking-wide px-4 pb-2 pt-6">
          MULTI-DEVICE SYNC
        </h3>
        <div className="bg-item-bg-light dark:bg-item-bg-dark rounded-lg overflow-hidden">
          <div className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between">
            <div className="flex items-center gap-4">
              <div className="text-primary flex items-center justify-center rounded-lg bg-icon-bg-light dark:bg-icon-bg-dark shrink-0 size-12">
                <span className="material-symbols-outlined">key</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
                  End-to-end encryption key
                </p>
                <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-normal leading-normal">
                  a1b2-c3d4-e5f6-g7h8...
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <button className="text-primary flex size-7 items-center justify-center">
                <span className="material-symbols-outlined">content_copy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
