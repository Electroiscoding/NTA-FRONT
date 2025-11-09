import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const SplashScreen = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      // Small delay before calling onFinish to allow the exit animation to complete
      setTimeout(onFinish, 500);
    }, 2000); // Show splash for 2 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
        className="text-center"
      >
        <img 
          src="/netuark.png" 
          alt="Netuark Logo" 
          className="w-48 h-48 mx-auto mb-6 animate-pulse"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-1 bg-white/50 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
