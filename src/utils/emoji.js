import React from 'react';
import MarsEmoji from '../components/MarsEmoji';

// Map of custom emoji codes to their components
// In a production app, you might want to fetch this from an API
const CUSTOM_EMOJIS = {
  ':mars:': <MarsEmoji />,
  // Add more custom emojis as needed
};

/**
 * Renders text with custom emojis
 * @param {string} text - The text that might contain emoji codes
 * @param {string} className - Additional CSS classes
 * @param {object} style - Additional inline styles
 * @returns {React.ReactNode} - Rendered content with emoji images
 */
export const renderWithEmojis = (text, className = '', style = {}) => {
  if (!text) return null;
  
  // Split by potential emoji codes
  const parts = text.split(/(:\w+:)/g);
  
  return parts.map((part, index) => {
    if (CUSTOM_EMOJIS[part]) {
      return React.cloneElement(CUSTOM_EMOJIS[part], {
        key: index,
        className: `${CUSTOM_EMOJIS[part].props.className || ''} ${className}`.trim(),
        style: {
          ...(CUSTOM_EMOJIS[part].props.style || {}),
          ...style,
          margin: '0 0.1em',
          verticalAlign: 'text-bottom',
        },
      });
    }
    return part;
  });
};

/**
 * A component that renders text with custom emojis
 */
export const EmojiText = ({ children, className = '', style = {} }) => {
  if (!children) return null;
  
  // Handle both string and React nodes
  const content = typeof children === 'string' 
    ? renderWithEmojis(children, className, style)
    : children;
    
  return <span className={`inline ${className}`} style={style}>{content}</span>;
};

/**
 * Extracts emoji codes from text
 */
export const extractEmojiCodes = (text) => {
  if (!text) return [];
  const emojiRegex = /(:\w+:)/g;
  return text.match(emojiRegex) || [];
};

/**
 * Preloads emoji images
 */
export const preloadEmojis = () => {
  Object.values(CUSTOM_EMOJIS).forEach(emojiUrl => {
    const img = new Image();
    img.src = emojiUrl;
  });
};
