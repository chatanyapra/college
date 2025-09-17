import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiStar, FiTruck, FiShield } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    { icon: <FiTruck />, text: "Free Shipping" },
    { icon: <FiShield />, text: "Secure Payment" },
    { icon: <FiStar />, text: "Top Quality" }
  ];

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-text">
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Discover Amazing
              <span className="gradient-text"> Products</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              variants={itemVariants}
            >
              Shop the latest trends with unbeatable prices and premium quality. 
              Your perfect shopping experience starts here.
            </motion.p>

            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.button 
                className="btn btn-primary btn-lg hero-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
                <FiArrowRight className="btn-icon" />
              </motion.button>
              
              <motion.button 
                className="btn btn-secondary btn-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            <motion.div 
              className="hero-features"
              variants={itemVariants}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="feature-item"
                  whileHover={{ y: -2 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <span className="feature-text">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="hero-image"
            variants={itemVariants}
          >
            <div className="hero-image-container">
              <motion.img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                alt="Shopping Experience"
                className="hero-main-image"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              
              {/* Floating Product Cards */}
              <motion.div 
                className="floating-card card-1"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop" alt="Product" />
                <div className="card-info">
                  <span className="card-price">$79.99</span>
                  <div className="card-rating">
                    <FiStar className="star-filled" />
                    <span>4.5</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="floating-card card-2"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&h=80&fit=crop" alt="Product" />
                <div className="card-info">
                  <span className="card-price">$199.99</span>
                  <div className="card-rating">
                    <FiStar className="star-filled" />
                    <span>4.7</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
