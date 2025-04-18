import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';
import { motion } from 'framer-motion';

interface CardListProps {
  users: User[];
}

const CardList: React.FC<CardListProps> = ({ users }) => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h1 
        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Digital Business Cards
      </motion.h1>
      
      <div className="grid grid-cols-1 gap-8">
        {users.map((user) => (
          <motion.div
            key={user.id}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to={`/${user.slug}`} className="block">
              <div className="relative h-48">
                <img 
                  src={user.coverImage} 
                  alt={user.company}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <img
                  src={user.profileImage}
                  alt={user.name}
                  className="absolute bottom-0 left-6 transform translate-y-1/2 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-800 shadow-lg object-cover"
                />
              </div>
              <div className="p-6 pt-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
                <p className="mt-2 text-lg text-primary-600 dark:text-primary-400">{user.title}</p>
                <p className="text-gray-700 dark:text-gray-300">{user.company}</p>
                <p className="mt-4 text-gray-600 dark:text-gray-400 line-clamp-2">{user.bio}</p>
                <div className="mt-6 inline-flex items-center text-primary-600 dark:text-primary-400 font-medium">
                  View Full Card
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CardList;