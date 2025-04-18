import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CardDetailPage from './pages/CardDetailPage';
import ThemeToggle from './components/ThemeToggle';
import { User } from './types';
import userData from './data/data.json';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setUsers(userData as User[]);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mb-4"></div>
          <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<HomePage users={users} />} />
        <Route path="/:slug" element={<CardDetailPage users={users} />} />
      </Routes>
    </Router>
  );
}

export default App;