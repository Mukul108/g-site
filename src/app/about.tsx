import React from 'react';
import Image from 'next/image';

const About = () => {
  // Assume you have the details of the current coach and team
  const coachName = 'John Doe';
  const teamDetails = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  return (
    <section className="about-section">
      <div className="background-image">
        <Image
          src="/acro1.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="content">
        <h2>About Us</h2>
        <div className="coach-details">
          <h3>Current Coach: {coachName}</h3>
          <p>{teamDetails}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
