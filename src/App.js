import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import About from "./About";
import Projects from './Projects';
import Contact from './Contact';
import React from 'react';

function App() {

  React.useEffect(() => {
    document.querySelectorAll('.nav-btn').forEach(button => {
      button.addEventListener('click', async () => {
        // Select the section associated with the button
        let section = document.querySelector(`div.${button.classList[1]}`);
        // If the section is not already being displayed
        if (section.classList.contains('hidden')) {
          // Handle button effects
          document.querySelectorAll('.nav-btn').forEach(button => {button.classList.remove('text-white')});
          document.querySelectorAll('.nav-btn').forEach(button => {button.classList.add('text-slate-700')});
          button.classList.remove('text-slate-700');
          button.classList.add('text-white');
          // Hide all sections
          document.querySelectorAll('.section').forEach(async section => {
            section.classList.add('animate-out');
            await new Promise(resolve => setTimeout(resolve, 250));
            section.classList.add('hidden');
            section.classList.remove('animate-out');
          });
          // Display the selected section
          section.classList.add('animate-in');
          await new Promise(resolve => setTimeout(resolve, 250));
          section.classList.remove('hidden');
          await new Promise(resolve => setTimeout(resolve, 250));
          section.classList.remove('animate-in');
        };
      });
    });
  });

  return (
    <div className='h-full min-h-screen border-4 border-slate-700 select-none scroll-smooth'>
      <div className="">
          <Nav />
      </div>
      <div className='flex justify-center pb-5'>
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
