import React, { useState, useEffect } from 'react';
import './App.css';
// import Navbar from '.components/Navbar-sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import image1 from './components/images/soccer pics/IMG_4209.jpeg';
import image2 from './components/images/soccer pics/IMG_4206.jpeg';
import image3 from './components/images/soccer pics/IMG_4207.jpeg';
import image4 from './components/images/soccer pics/IMG_4208.jpeg';
import image5 from './components/images/soccer pics/IMG_4204.jpeg';
import image6 from './components/images/soccer pics/IMG_4210.jpeg';
import image7 from './components/images/soccer pics/IMG_4205.jpeg';

const cardData = {
  card1: {
    src: image1,
    alt: 'image 1',
    description: 'Physical and digital merchandise revenue',
    isReversed: false,
  }, 
  card2: {
    src: image2,
    alt: 'image 2',
    description: 'Your authentic club assets',
    isReversed: true,
  }, 
  card3: {
    src: image3,
    alt: 'image 3',
    description: 'Real-time updated news and video content',
    isReversed: false,
  }, 
  card4: {
    src: image4,
    alt: 'image 4',
    description: 'Walk amongst the trophies of your icons',
    isReversed: true,
  }, 
  card5: {
    src: image5,
    alt: 'image 5',
    description: 'Be immersed with your favorite club, from anywhere',
    isReversed: false,
  }, 
  card6: {
    src: image6,
    alt: 'image 6',
    description: 'Walk through immersive 3D club exhibits',
    isReversed: true,
  }, 
  card7: {
    src: image7,
    alt: 'image 7',
    description: 'Run the bases on your field of dreams',
    isReversed: false,
  }, 
};

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className="App">
        <Header />
        <div className="container px-lg-5 px-md-4 px-sm-0 py-5 text-center cards">
          <div className="row cards">
            <h1>Fans</h1>
            <div className="cards">
              <Card 
                src={cardData.card5.src} 
                alt={cardData.card5.alt}
                description={cardData.card5.description}
                isReversed={isSmallScreen ? false : cardData.card5.isReversed}
              />
              <Card 
                src={cardData.card6.src} 
                alt={cardData.card6.alt}
                description={cardData.card6.description}
                isReversed={isSmallScreen ? false : cardData.card6.isReversed}
              />
              <Card 
                src={cardData.card7.src} 
                alt={cardData.card7.alt}
                description={cardData.card7.description}
                isReversed={isSmallScreen ? false : cardData.card7.isReversed}
              />
            </div>
          </div>
          <div className="row cards">
            <h1>Clubs</h1>
            <div className="cards">
              <Card 
                src={cardData.card1.src} 
                alt={cardData.card1.alt}
                description={cardData.card1.description}
                isReversed={isSmallScreen ? false : cardData.card1.isReversed}
              />
              <Card 
                src={cardData.card2.src} 
                alt={cardData.card2.alt}
                description={cardData.card2.description}
                isReversed={isSmallScreen ? false : cardData.card2.isReversed}
              />
              <Card 
                src={cardData.card3.src} 
                alt={cardData.card3.alt}
                description={cardData.card3.description}
                isReversed={isSmallScreen ? false : cardData.card3.isReversed}
              />
              <Card 
                src={cardData.card4.src} 
                alt={cardData.card4.alt}
                description={cardData.card4.description}
                isReversed={isSmallScreen ? false : cardData.card4.isReversed}
              />
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;
