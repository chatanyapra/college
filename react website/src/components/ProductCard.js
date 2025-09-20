import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleViewProduct = () => {
    navigate(`/product/${product.id}`);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <motion.div
      className="product-card"
      variants={cardVariants}
      whileHover={{ y: -8 }}
      onClick={handleViewProduct}
    >
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        
        {discount > 0 && (
          <motion.div
            className="discount-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 500 }}
          >
            -{discount}%
          </motion.div>
        )}

        <div className="product-overlay">
          <motion.button
            className="overlay-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              // Add to wishlist functionality
            }}
          >
            <FiHeart />
          </motion.button>
          
          <motion.button
            className="overlay-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleViewProduct}
          >
            <FiEye />
          </motion.button>
        </div>
      </div>

      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
              />
            ))}
          </div>
          <span className="rating-text">({product.reviews})</span>
        </div>

        <div className="product-price">
          <span className="current-price">${product.price}</span>
          {product.originalPrice > product.price && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>

        <div className="product-features">
          {product.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="feature-tag">
              {feature}
            </span>
          ))}
        </div>

        <motion.button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FiShoppingCart />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
