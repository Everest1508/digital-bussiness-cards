'use client';

import React from 'react';
import { User } from '../types';
import userData from '../data/data.json';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  const users = userData as User[];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Digital Business Cards</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <Link href={`/users/${user.slug}`} key={user.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={user.profileImage}
                      alt={user.name}
                    />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {user.name}
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400">
                        {user.title} at {user.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
