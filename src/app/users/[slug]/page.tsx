'use client';

import React from 'react';
import { User } from '../../../types';
import userData from '../../../data/data.json';
import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function UserPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const users = userData as User[];
  const user = users.find(u => u.slug === slug);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User not found</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">The requested user could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
        >
          {/* Cover Image */}
          <div className="h-48 w-full overflow-hidden">
            <img
              src={user.coverImage}
              alt={`${user.name}'s cover`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 -mt-16">
                <div className="relative h-24 w-24">
                  <img
                    className="absolute h-full w-full rounded-full border-4 border-white dark:border-gray-800 object-cover"
                    src={user.profileImage}
                    alt={user.name}
                  />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
                <p className="text-gray-500 dark:text-gray-400">{user.title} at {user.company}</p>
              </div>
            </div>
            
            {/* Highlights */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {user.highlights.map((highlight: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">About</h2>
              <p className="text-gray-600 dark:text-gray-400">{user.bio}</p>
              {user.personalQuote && (
                <blockquote className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-300 italic">"{user.personalQuote}"</p>
                </blockquote>
              )}
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {user.expertise.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Contact</h2>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Email:</span> {user.email}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Phone:</span> {user.phone}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Website:</span> {user.website}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Address:</span> {user.address}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Company Info</h2>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <img src={user.companyInfo.logo} alt={user.companyInfo.name} className="h-12 w-12" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{user.companyInfo.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Founded: {user.companyInfo.founded}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Employees: {user.companyInfo.employees}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {user.companyInfo.services.map((service: string, index: number) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Social Links</h2>
              <div className="flex space-x-4">
                {user.social.linkedin && (
                  <a 
                    href={user.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <Linkedin className="w-5 h-5 mr-1" />
                    LinkedIn
                  </a>
                )}
                {user.social.twitter && (
                  <a 
                    href={user.social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-blue-400 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
                  >
                    <Twitter className="w-5 h-5 mr-1" />
                    Twitter
                  </a>
                )}
                {user.social.github && (
                  <a 
                    href={user.social.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    GitHub
                  </a>
                )}
                {user.social.instagram && (
                  <a 
                    href={user.social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-pink-600 hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-300"
                  >
                    <Instagram className="w-5 h-5 mr-1" />
                    Instagram
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 