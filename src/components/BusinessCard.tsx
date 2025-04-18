import React from 'react';
import { User } from '../types';
import CardContact from './CardContact';
import CardSocial from './CardSocial';
import CardBody from './CardBody';
import { motion } from 'framer-motion';
import { Building2, Award, Lightbulb } from 'lucide-react';

interface BusinessCardProps {
  user: User;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ user }) => {
  return (
    <motion.div
      className="max-w-3xl w-full mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Cover Image */}
      <div 
        className="h-64 w-full relative bg-cover bg-center"
        style={{ backgroundImage: `url(${user.coverImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="absolute md:bottom-4 md:left-8 flex items-center bottom-11 left-8">
          <img
            src={user.companyInfo.logo}
            alt={user.companyInfo.name}
            className="w-16 h-16 rounded-lg border-2 border-white shadow-lg object-cover"
          />
          <div className="ml-4 text-white">
            <p className="text-sm font-medium opacity-90">Established {user.companyInfo.founded}</p>
            <p className="text-lg font-bold">{user.companyInfo.name}</p>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="relative px-8 pb-8">
        {/* Profile Image */}
        <motion.div 
          className="relative -mt-10 mb-4 flex md:justify-end justify-center -mr-2 md:-mt-20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src={user.profileImage}
            alt={user.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-gray-800 shadow-xl object-cover"
          />
        </motion.div>

        {/* Header Content */}
        <motion.div 
          className="text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {user.name}
          </h1>
          <p className="text-xl font-medium text-primary-600 dark:text-primary-400 mb-1">
            {user.title}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {user.company}
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400 italic">
            "{user.personalQuote}"
          </p>
        </motion.div>

        {/* Company Services */}
        <motion.div 
          className="mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Building2 className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Our Services</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-3 px-4">
            {user.companyInfo.services.map((service, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 whitespace-nowrap"
              >
                {service}
              </span>
            ))}
          </div>

        </motion.div>

        {/* Personal Expertise */}
        <motion.div 
          className="mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Lightbulb className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Expertise</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-3 px-4">
            {user.expertise.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-sm font-medium rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>

        </motion.div>

        {/* Company Highlights */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {user.highlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center"
            >
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {highlight}
              </p>
            </div>
          ))}
        </motion.div>

        <CardBody user={user} />
        <CardContact user={user} />
        <CardSocial social={user.social} />
      </div>
    </motion.div>
  );
};

export default BusinessCard;