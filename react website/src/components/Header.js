import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiSearch, FiMenu, FiX, FiUser, FiHeart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartItemsCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, you'd implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ModernShop
            </motion.div>
          </Link>

          {/* Search Bar */}
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-container">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </form>

          {/* Navigation */}
          <nav className="nav-desktop">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Action Buttons */}
          <div className="header-actions">
            <motion.button
              className="action-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiUser />
            </motion.button>
            
            <motion.button
              className="action-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiHeart />
            </motion.button>

            <motion.button
              className="action-btn cart-btn"
              onClick={() => navigate('/cart')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiShoppingCart />
              {getCartItemsCount() > 0 && (
                <motion.span 
                  className="cart-badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  {getCartItemsCount()}
                </motion.span>
              )}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="mobile-menu"
          variants={menuVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
        >
          <nav className="mobile-nav">
            <Link to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link to="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
