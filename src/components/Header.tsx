import React from 'react';
import { Link } from 'react-router';

const Header: React.FC = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-6 py-3">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/favicon.ico" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold">微信公众号AI总结助手</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">精选文章</Link>
            <Link to="/software" className="text-gray-600 hover:text-gray-900">软件编程</Link>
            <Link to="/ai" className="text-gray-600 hover:text-gray-900">人工智能</Link>
            <Link to="/design" className="text-gray-600 hover:text-gray-900">产品设计</Link>
            <Link to="/business" className="text-gray-600 hover:text-gray-900">商业科技</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 