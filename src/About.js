import React from 'react';

const About = () => {
    React.useEffect(() => {
        document.querySelectorAll('.about-text').forEach(async text => {
            let timeDelay = text.classList[1];
            await new Promise(resolve => setTimeout(resolve, timeDelay));
            text.classList.add('animate-in');
            text.classList.remove('hidden');
        });
    });
    return (
        <div className="section about min-w-full animate-in">
            <div className="p-10 text-white text-center">
                <h1 className="about-text 500 hidden text-4xl p-5 hover:text-slate-400 transition-all">Hello, I am Gokay!</h1>
                <h1 className="about-text 1500 hidden text-xl p-1 hover:text-slate-400 transition-all">I have always been in love with technology as well as coming up with creative solutions to challenging problems.</h1>
                <h1 className="about-text 2500 hidden text-xl p-1 hover:text-slate-400 transition-all">For the past year, I've been exploring the world of programming and currently I am mostly invested in web development.</h1>
                <h1 className="about-text 3500 hidden text-xl p-1 hover:text-slate-400 transition-all">I am always up for new challenges and I love learning along the way!</h1>
            </div>
        </div>
    );
};

export default About;