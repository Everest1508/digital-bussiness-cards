import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import { User } from '../types';

interface HomePageProps {
  users: User[];
}

const HomePage: React.FC<HomePageProps> = ({ users }) => {
  useEffect(() => {
    document.title = 'Digital Business Cards';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <CardList users={users} />
    </div>
  );
};

export default HomePage;