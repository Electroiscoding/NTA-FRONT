import React from 'react';
import PropTypes from 'prop-types';

const MarsEmoji = ({ className = '', style = {} }) => (
  <span
    className={`inline-block select-none ${className}`}
    style={{
      userSelect: 'none',
      WebkitUserSelect: 'none',
      msUserSelect: 'none',
      MozUserSelect: 'none',
      ...style
    }}
  >
    <img
      src="/mars.png"
      alt="Mars Emoji"
      className="h-[1em] w-auto inline-block align-middle"
      style={{
        verticalAlign: 'middle',
        transform: 'rotate(25.2deg)',
        transformOrigin: 'center',
        pointerEvents: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none',
        MozUserSelect: 'none'
      }}
      draggable="false"
      onContextMenu={(e) => e.preventDefault()}
    />
  </span>
);

MarsEmoji.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

export default MarsEmoji;
