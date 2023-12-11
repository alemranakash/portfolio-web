
import  { useState, useEffect } from 'react';
import './Introduction.css'; 

const Introduction = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Hi, I am Al Emran.', 'I am a MERN stack developer.'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>


     <div>
       <div className="intro-container">
        <div className="tech-circle"></div>
        <img
          src="/AL-Emran.jpg" 
          alt="Al Emran"
          className="intro-photo"
        />
        <div className="intro-text">
          <p>{texts[textIndex]}</p>
        </div>
      </div>
     </div>
    </section>
  );
};

export default Introduction;
