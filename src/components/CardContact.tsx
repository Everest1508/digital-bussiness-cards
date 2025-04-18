import React from 'react';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import { User } from '../types';
import { motion } from 'framer-motion';

interface CardContactProps {
  user: User;
}

const CardContact: React.FC<CardContactProps> = ({ user }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      className="mt-6 space-y-3"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.a
        href={`tel:${user.phone}`}
        className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        variants={item}
      >
        <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" />
        <span className="text-gray-700 dark:text-gray-300">{user.phone}</span>
      </motion.a>
      
      <motion.a
        href={`mailto:${user.email}`}
        className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        variants={item}
      >
        <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" />
        <span className="text-gray-700 dark:text-gray-300">{user.email}</span>
      </motion.a>
      
      <motion.a
        href={user.website}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        variants={item}
      >
        <Globe className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" />
        <span className="text-gray-700 dark:text-gray-300">{user.website}</span>
      </motion.a>
      
      <motion.div
        className="flex items-center p-2 rounded-lg"
        variants={item}
      >
        <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0" />
        <span className="text-gray-700 dark:text-gray-300">{user.address}</span>
      </motion.div>
    </motion.div>
  );
};

export default CardContact;