import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import image1 from './components/images/soccer pics/IMG_4204.jpeg';
import image2 from './components/images/soccer pics/IMG_4210.jpeg';
import image3 from './components/images/soccer pics/IMG_4205.jpeg';
import image4 from './components/images/soccer pics/IMG_4209.jpeg';
import image5 from './components/images/soccer pics/IMG_4206.jpeg';
import image6 from './components/images/soccer pics/IMG_4207.jpeg';
import image7 from './components/images/soccer pics/IMG_4208.jpeg';

const cardData = {
  card1: {
    src: image1,
    description: 'Be immersed with your favorite club, from anywhere',
    isReversed: false,
  },
  card2: {
    src: image2,
    description: 'Walk through immersive 3D club exhibits',
    isReversed: true,
  },
  card3: {
    src: image3,
    description: 'Run the bases on your field of dreams',
    isReversed: false,
  },
  card4: {
    src: image4,
    description: 'Physical and digital merchandise revenue',
    isReversed: false,
  },
  card5: {
    src: image5,
    description: 'Your authentic club assets',
    isReversed: true,
  },
  card6: {
    src: image6,
    description: 'Real-time updated news and video content',
    isReversed: false,
  },
  card7: {
    src: image7,
    description: 'Walk amongst the trophies of your icons',
    isReversed: true,
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
      <div className="container cards px-lg-5 px-md-4 px-sm-p-0 py-5 text-center">
        <div className="row cards">
          <h1>Fans</h1>
          <div className="cards">
            <Card
              src={cardData.card1.src}
              description={cardData.card1.description}
              isReversed={isSmallScreen ? false : cardData.card1.isReversed}
            />
            <Card
              src={cardData.card2.src}
              description={cardData.card2.description}
              isReversed={isSmallScreen ? false : cardData.card2.isReversed}
            />
            <Card
              src={cardData.card3.src}
              description={cardData.card3.description}
              isReversed={isSmallScreen ? false : cardData.card3.isReversed}
            />
          </div>
        </div>
        <div className="row cards">
          <h1>Clubs</h1>
          <div className="cards">
            <Card
              src={cardData.card4.src}
              description={cardData.card4.description}
              isReversed={isSmallScreen ? false : cardData.card4.isReversed}
            />
            <Card
              src={cardData.card5.src}
              description={cardData.card5.description}
              isReversed={isSmallScreen ? false : cardData.card5.isReversed}
            />
            <Card
              src={cardData.card6.src}
              description={cardData.card6.description}
              isReversed={isSmallScreen ? false : cardData.card6.isReversed}
            />
            <Card
              src={cardData.card7.src}
              description={cardData.card7.description}
              isReversed={isSmallScreen ? false : cardData.card7.isReversed}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
