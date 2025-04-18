import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import BusinessCard from '../components/BusinessCard';
import { User } from '../types';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface CardDetailPageProps {
  users: User[];
}

const CardDetailPage: React.FC<CardDetailPageProps> = ({ users }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const user = users.find((user) => user.slug === slug);

  useEffect(() => {
    if (!user) {
      navigate('/', { replace: true });
    }

    if (user) {
      document.title = `${user.name} - Digital Card`;
    }

    return () => {
      document.title = 'Digital Business Cards';
    };
  }, [user, navigate, slug]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
        </motion.div>
        
        <BusinessCard user={user} />
      </motion.div>
    </div>
  );
};

export default CardDetailPage;