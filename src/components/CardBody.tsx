import React from 'react';
import { User } from '../types';
import { motion } from 'framer-motion';

interface CardBodyProps {
  user: User;
}

const CardBody: React.FC<CardBodyProps> = ({ user }) => {
  return (
    <motion.div 
      className="mt-6 px-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <motion.h3 
        className="text-xl font-semibold text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        About
      </motion.h3>
      <motion.p 
        className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {user.bio}
      </motion.p>
    </motion.div>
  );
};

export default CardBody;