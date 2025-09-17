import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiStar, FiShoppingCart, FiHeart, FiArrowLeft, FiTruck, FiShield, FiRefreshCw } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/')} className="btn btn-primary">
          Back to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="product-detail">
      <div className="container">
        <motion.button
          className="back-btn"
          onClick={() => navigate(-1)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
        >
          <FiArrowLeft />
          Back
        </motion.button>

        <div className="product-detail-content">
          <motion.div
            className="product-images"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="main-image">
              <img src={product.image} alt={product.name} />
              {discount > 0 && (
                <div className="discount-badge">-{discount}%</div>
              )}
            </div>
          </motion.div>

          <motion.div
            className="product-info"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="product-category">{product.category}</div>
            <h1 className="product-title">{product.name}</h1>
            
            <div className="product-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                  />
                ))}
              </div>
              <span className="rating-value">{product.rating}</span>
              <span className="reviews-count">({product.reviews} reviews)</span>
            </div>

            <div className="product-price">
              <span className="current-price">${product.price}</span>
              {product.originalPrice > product.price && (
                <span className="original-price">${product.originalPrice}</span>
              )}
            </div>

            <p className="product-description">{product.description}</p>

            <div className="product-features">
              <h3>Key Features:</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="purchase-section">
              <div className="quantity-selector">
                <label>Quantity:</label>
                <div className="quantity-controls">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity-value">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="action-buttons">
                <motion.button
                  className="btn btn-primary add-to-cart"
                  onClick={handleAddToCart}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiShoppingCart />
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </motion.button>

                <motion.button
                  className="btn btn-secondary wishlist-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiHeart />
                  Add to Wishlist
                </motion.button>
              </div>
            </div>

            <div className="product-guarantees">
              <div className="guarantee-item">
                <FiTruck className="guarantee-icon" />
                <div>
                  <h4>Free Shipping</h4>
                  <p>On orders over $50</p>
                </div>
              </div>
              <div className="guarantee-item">
                <FiShield className="guarantee-icon" />
                <div>
                  <h4>Secure Payment</h4>
                  <p>100% secure checkout</p>
                </div>
              </div>
              <div className="guarantee-item">
                <FiRefreshCw className="guarantee-icon" />
                <div>
                  <h4>Easy Returns</h4>
                  <p>30-day return policy</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
