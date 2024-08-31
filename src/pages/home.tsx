// Home.tsx
import React from 'react';
import Header from '../components/header'; // Adjust the path if needed
import './Home.css'; // Optional: You can add your own CSS for styling


const Home: React.FC = () => {
  return (
    <div className="home">
      <Header /> {/* Include the Header component here */}
      <h2>Welcome to My React App!</h2>
      <p>This is the home page where you can find the latest updates and features.</p>
      <section className="features">
        <h3>Features:</h3>
        <ul>
          <li>Feature 1: Description of feature 1</li>
          <li>Feature 2: Description of feature 2</li>
          <li>Feature 3: Description of feature 3</li>
        </ul>
      </section>
      <section className="call-to-action">
        <h3>Get Started!</h3>
        <p>Explore our app to learn more about what we offer.</p>
      </section>
    </div>
  );
};

export default Home;
