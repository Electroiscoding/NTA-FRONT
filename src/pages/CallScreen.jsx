import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CallScreen = () => {
  const { callId } = useParams();
  const navigate = useNavigate();
  const [callStatus, setCallStatus] = useState('ringing'); // 'ringing', 'in-progress', 'ended'
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);

  // Sample call data (in a real app, this would come from props or context)
  const callData = {
    id: callId,
    caller: {
      id: 'user123',
      name: 'Jane Doe',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3aZTG-Uzdss7DBpYsZkh-sEZFWn7ygC4m2KWll2jNF7sk-3TIERHXJnQRdybqvfYFlpsmhapXPOYmKDPrDikuEIQdLM6_04g_zNaR7bGmqcoAll5GUJC6KGDVUnBruhOUBgp0CHFs0V874Jw9p2409d2lndBXE8NJ0j5JVHFT0s1K2s-9EV90Qo2lvuuv50B9cq0-YmLmioRqGEBt7xrMsnDC5N7XDugw2Yl3JUMWD3vmprDW_H2Bk_CSkTsFtC_3viEwCq97nOIF',
      videoFeed: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArT6WicbNpwy4qMngtu2P8Lz3pFHFXEIC78A_4LzFUepBtcivtB9A_ZZpf8aW20jXLDfs5kkZvdmu2Gzl7HzL_i2deeQmXvZT4abwNODiQ0Qblounzmsr_zwMHB36iglRwn9sr-xUcIBj4WSz6kbdKhjiTu8nagMZ0SnIhfqp_L0r6esrcAsSRRBUj2LTpEjvbDY3YSlP8B6CIzZtq6soVhzXbSsJZvj7CAEcYw-e5djeGXT6rtHgsFjonXX7WsiAAwqtKyHU5d52V',
    },
    type: 'video', // 'video' or 'audio'
    isIncoming: true,
  };

  // Timer effect
  useEffect(() => {
    let timer;
    if (callStatus === 'in-progress') {
      timer = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [callStatus]);

  // Format time (MM:SS)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = () => {
    setCallStatus('in-progress');
  };

  const handleEndCall = () => {
    setCallStatus('ended');
    // In a real app, you would also end the actual call here
    setTimeout(() => {
      navigate(-1); // Go back to previous screen
    }, 1000);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // In a real app, you would toggle the microphone here
  };

  const toggleSpeaker = () => {
    setIsSpeakerOn(!isSpeakerOn);
    // In a real app, you would toggle the speaker here
  };

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
    // In a real app, you would toggle the camera here
  };

  // Incoming Call Screen
  if (callStatus === 'ringing' && callData.isIncoming) {
    return (
      <div className="flex flex-col h-full min-h-screen p-4 pb-8 bg-background-light dark:bg-background-dark">
        {/* Top App Bar - Simplified for incoming call */}
        <div className="flex items-center justify-center pt-2 pb-4">
          <div className="flex items-center gap-2 text-white/80">
            <span className="material-symbols-outlined text-base">lock</span>
            <p className="text-sm font-normal">End-to-End Encrypted</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col items-center justify-center flex-1 text-center">
          {/* Avatar with Pulsing Animation */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute w-48 h-48 rounded-full bg-primary/20 animate-pulse-slow-1"></div>
            <div className="absolute w-48 h-48 rounded-full bg-primary/20 animate-pulse-slow-2"></div>
            <div className="absolute w-48 h-48 rounded-full bg-primary/20 animate-pulse-slow-3"></div>
            <div 
              className="w-48 h-48 bg-center bg-no-repeat bg-cover rounded-full border-4 border-white/10" 
              style={{ backgroundImage: `url(${callData.caller.avatar})` }}
              aria-label={`Profile picture of ${callData.caller.name}`}
            />
          </div>
          
          {/* Caller Name */}
          <h1 className="text-white tracking-light text-[32px] font-bold leading-tight px-4 text-center">
            {callData.caller.name}
          </h1>
          
          {/* Status Text */}
          <h2 className="text-white/80 text-xl font-normal leading-normal pt-1 px-4 text-center">
            {callData.type === 'video' ? 'Video' : 'Voice'} Call...
          </h2>
        </div>

        {/* Button Group */}
        <div className="flex w-full gap-6 px-4 py-3 justify-center">
          <div className="flex flex-col items-center gap-2">
            <button 
              onClick={handleEndCall}
              className="flex size-16 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#dc3545] text-white"
            >
              <span className="material-symbols-outlined !text-3xl">call_end</span>
            </button>
            <span className="text-white/90 text-sm font-medium">Decline</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <button 
              onClick={handleAnswer}
              className="flex size-16 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#28a745] text-white"
            >
              <span className="material-symbols-outlined !text-3xl">call</span>
            </button>
            <span className="text-white/90 text-sm font-medium">Answer</span>
          </div>
        </div>
      </div>
    );
  }

  // Active Call Screen
  return (
    <div className="relative flex flex-col h-full min-h-screen w-full bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Main Video Feed (Background) */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover" 
        style={{ 
          backgroundImage: `url(${callData.caller.videoFeed})`,
          opacity: isVideoOn ? 1 : 0.5
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Top Bar */}
      <div className="relative z-10 flex items-center p-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-8 shrink-0 items-center justify-center"
        >
          <span className="material-symbols-outlined text-white !text-2xl">expand_more</span>
        </button>
        <div className="flex-1 text-center">
          <h2 className="text-white text-lg font-bold leading-tight">{callData.caller.name}</h2>
          <p className="text-white/80 text-sm font-normal leading-normal">
            {formatTime(callDuration)}
          </p>
        </div>
        <div className="flex size-8 shrink-0 items-center justify-center"></div>
      </div>

      {/* Content over video */}
      <div className="relative z-10 flex flex-col flex-1 p-4">
        {/* Self View (PiP) - Only show if video is on */}
        {isVideoOn && (
          <div className="ml-auto w-28 h-40 bg-center bg-no-repeat bg-cover rounded-lg border-2 border-white/20" 
               style={{ backgroundImage: `url(${callData.caller.avatar})` }}
               aria-label="Self-view video feed">
          </div>
        )}
        
        <div className="flex-1"></div> {/* Spacer */}
        
        {/* Encrypted Badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-sm px-3 py-1.5">
            <span className="material-symbols-outlined text-primary !text-base">lock</span>
            <p className="text-white text-xs font-medium">End-to-End Encrypted</p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-around items-center">
          <button 
            onClick={toggleSpeaker}
            className={`flex size-14 cursor-pointer items-center justify-center overflow-hidden rounded-full ${isSpeakerOn ? 'bg-white/20' : 'bg-white/40'} text-white backdrop-blur-sm`}
          >
            <span className="material-symbols-outlined !text-3xl">
              {isSpeakerOn ? 'volume_up' : 'volume_off'}
            </span>
          </button>
          
          <button 
            onClick={toggleMute}
            className={`flex size-14 cursor-pointer items-center justify-center overflow-hidden rounded-full ${isMuted ? 'bg-white/40' : 'bg-white/20'} text-white backdrop-blur-sm`}
          >
            <span className="material-symbols-outlined !text-3xl">
              {isMuted ? 'mic_off' : 'mic'}
            </span>
          </button>
          
          {callData.type === 'video' && (
            <button 
              onClick={toggleVideo}
              className={`flex size-14 cursor-pointer items-center justify-center overflow-hidden rounded-full ${isVideoOn ? 'bg-white/20' : 'bg-white/40'} text-white backdrop-blur-sm`}
            >
              <span className="material-symbols-outlined !text-3xl">
                {isVideoOn ? 'videocam' : 'videocam_off'}
              </span>
            </button>
          )}
          
          <button 
            onClick={handleEndCall}
            className="flex size-16 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#dc3545] text-white"
          >
            <span className="material-symbols-outlined !text-4xl">call_end</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallScreen;
