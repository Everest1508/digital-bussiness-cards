import React from 'react';
import { Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import { Social } from '../types';
import { motion } from 'framer-motion';

interface CardSocialProps {
  social: Social;
}

const CardSocial: React.FC<CardSocialProps> = ({ social }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { scale: 0 },
    show: { scale: 1 },
  };

  const iconMap = {
    linkedin: <Linkedin className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />,
    github: <Github className="w-5 h-5" />,
    instagram: <Instagram className="w-5 h-5" />,
  };

  return (
    <motion.div 
      className="flex justify-center space-x-4 mt-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {Object.entries(social).map(([platform, url]) => (
        url && (
          <motion.a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            variants={item}
          >
            {iconMap[platform as keyof typeof iconMap]}
          </motion.a>
        )
      ))}
    </motion.div>
  );
};

export default CardSocial;