import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <h1>Welcome to My Portfolio</h1>
            <p>I'm a passionate developer with a knack for creating beautiful and functional web applications.</p>
            <a href="#projects" className="btn">View My Work</a>
        </section>
    );
};

export default Hero;