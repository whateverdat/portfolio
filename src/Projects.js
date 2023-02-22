import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
    React.useEffect(() => {
        // Back button and title
        const backBtn = document.querySelector('.back-btn');
        const title = document.querySelector('.projects-title'); 
        // Select every project
        document.querySelectorAll('.project').forEach(project => {
            // Click on a project
            project.addEventListener('click', (event) => {
                // Check if already in project view
                let state = true; 
                document.querySelectorAll('.project').forEach(project => {
                    if (project.classList.contains('hidden')) {
                        state = false;
                    };
                });  
                if (state) {
                    // Hide every project except the selected
                    document.querySelectorAll('.project').forEach(async project => {
                        project.classList.add('animate-out', 'pointer-events-none');
                        title.classList.add('animate-out');
                        await new Promise(resolve => setTimeout(resolve, 500));
                        project.classList.add('hidden');
                        project.classList.remove('animate-out', 'pointer-events-none');
                        title.classList.add('hidden');
                        title.classList.remove('animate-out');
                        await new Promise(resolve => setTimeout(resolve, 250));
                        backBtn.classList.add('animate-in')
                        event.target.classList.add('animate-in');
                        event.target.children[1].classList.add('hidden'); // Hide image
                        event.target.children[2].classList.remove('hidden'); // Display links
                        event.target.children[3].classList.remove('hidden');
                        event.target.classList.remove('hidden');
                        backBtn.classList.remove('hidden');
                    });
                };  
                if (event.target.tagName === 'DIV' && state) { // Make sure it is a div that is clicked
                    // Handle back button
                    backBtn.addEventListener('click', async () => {
                        // Remove current project and back button, bring back title
                        event.target.classList.add('animate-out');
                        backBtn.classList.add('animate-out');
                        await new Promise(resolve => setTimeout(resolve, 250));
                        event.target.classList.add('hidden');
                        event.target.children[1].classList.remove('hidden'); // Display image
                        event.target.children[2].classList.add('hidden'); // Hide links
                        event.target.children[3].classList.add('hidden');
                        backBtn.classList.add('hidden');
                        event.target.classList.remove('animate-out');
                        backBtn.classList.remove('animate-out');
                        document.querySelectorAll('.project').forEach(async project => {
                            await new Promise(resolve => setTimeout(resolve, 250));
                            project.classList.add('animate-in');
                            project.classList.remove('hidden');
                            title.classList.add('animate-in');
                            title.classList.remove('hidden');
                        });
                    }, {once: true});
                };  
            });
        });
    });
    return (
        <div className="section projects min-w-full hidden">
            <div className="text-white text-center p-10">
                <h1 className="projects-title">Here are, some of the projects that I've been working on recently</h1>
                <button className='back-btn text-white hidden'>Back</button>
            </div>
            <div className="flex justify-around md:flex-col sm:flex-col">
                <div className="project card text-center text-white bg-slate-700 bg-opacity-10 transition-all hover:bg-opacity-20 sm:card-mobile md:card-mobile">
                    <h1 className="pointer-events-none">BlackPepper</h1>
                    <img src="https://i.ibb.co/xSdYHdy/Untitled-removebg-preview.png" className='object-cover pointer-events-none p-5 m-auto'/>
                    <div className='hidden p-5 sm:p-1'>
                        <h1 className='mb-5'>Starting this project, I intended to address the lack of organization among my own recipes. Initially a recipe book, I later decided to add some online functionality and turn the project into a little social platform.</h1>
                        <a target="_blank" href="https://github.com/whateverdat/blackpepper_django">
                        <FontAwesomeIcon className="text-6xl p-1 hover:scale-110 transition-all" icon={faGithub} />
                        </a>
                        <a target="_blank" href="http://whateverdat2.pythonanywhere.com/">
                        <FontAwesomeIcon className="text-6xl p-1 hover:scale-110 transition-all" icon={faCirclePlay} />
                        </a>
                        <h1 className='mt-5'>*While previewing, you can use the account 'gok' with the password '123'</h1>
                    </div>
                    <img src="https://i.ibb.co/gPC7Hck/ezgif-1-9d768d4112.gif" className='object-cover pointer-events-none m-auto hidden'/>
                    <h1 className='pointer-events-none'>· Django · SQLite · Pico.css ·</h1>
                </div>
                <div className="project card text-center text-white bg-slate-700 bg-opacity-10 transition-all hover:bg-opacity-20 sm:card-mobile md:card-mobile">
                    <h1 className="pointer-events-none">Sozluk</h1>
                    <img src="https://i.ibb.co/y6rthmw/sozluk.png" className='object-cover pointer-events-none p-5 m-auto'/>
                    <div className='hidden p-5 sm:p-1'>
                        <h1 className='mb-5'>I believe vocabulary skills to be the most important among all when learning a new language. Taking notes and creating a word-list is fine enough, the ability to test the newly acquired vocabulary skills is actually far more beneficial.</h1>
                        <a target="_blank" href="https://github.com/whateverdat/sozluk_flask">
                        <FontAwesomeIcon className="text-6xl p-1 hover:scale-110 transition-all" icon={faGithub} />
                        </a>
                        <a target="_blank" href="http://whateverdat.pythonanywhere.com/">
                        <FontAwesomeIcon className="text-6xl p-1 hover:scale-110 transition-all" icon={faCirclePlay} />
                        </a>
                        <h1 className='mt-5'>*While previewing, you can use the account 'gok' with the password '123'</h1>
                    </div>
                    <img src="https://i.ibb.co/48c5Gjx/ezgif-1-6db48e8ebf.gif" className='object-cover pointer-events-none m-auto hidden'/>
                    <h1 className='pointer-events-none'>· Flask · SQLite · Bootstrap ·</h1>
                </div>
                <div className="project card text-center text-white bg-slate-700 bg-opacity-10 transition-all hover:bg-opacity-20 sm:card-mobile md:card-mobile">
                    <h1 className="pointer-events-none">Ray Caster</h1>
                    <img src="https://i.ibb.co/z8ww2vy/RayCa.png" className='object-cover pointer-events-none p-5 m-auto'/>
                    <div className='hidden p-5 sm:p-1'>
                        <h1 className='mb-5'>I have always been enthusiastic about video-games, and I especially love the FPS genre. It seemed like a fun idea and challenge to explore the 'Ray Casting' technology that gave birth to this genre of games that I love.</h1>
                        <a target="_blank" href="https://github.com/whateverdat/ray_caster_pygame">
                        <FontAwesomeIcon className="text-6xl p-1 hover:scale-110 transition-all" icon={faGithub} />
                        </a>
                        <a target="_blank" href="https://replit.com/@whateverdat/raycasterpygame?v=1">
                        <FontAwesomeIcon className="text-6xl p-1 hover:scale-110 transition-all" icon={faCirclePlay} />
                        </a>
                    </div>
                    <img src="https://i.ibb.co/njFTNXF/ezgif-1-850913fbb6.gif" className='object-cover pointer-events-none m-auto hidden'/>
                    <h1 className='pointer-events-none'>· Python · PyGame ·</h1>
                </div>
                <div className="project card text-center text-white bg-slate-700 bg-opacity-10 transition-all hover:bg-opacity-20 sm:card-mobile md:card-mobile">
                    <h1 className="pointer-events-none">Portfolio</h1>
                    <img src="https://i.ibb.co/9ydq75V/You-Are-Here-removebg-preview.png" className='object-cover pointer-events-none p-5 m-auto'/>
                    <div className='hidden p-5 sm:p-1'>
                        <h1 className='mb-5'>I have created this static, single page app to display my portfolio with a simple and clean design. I used the combination of React.js library and Tailwind CSS framework to stylize the app in a unique way.</h1>
                        <a className='' href="#">
                        <FontAwesomeIcon className="text-6xl p-1 hover:scale-110 transition-all" icon={faGithub} />
                        </a>
                        {/* <a className='' href="#">
                        <FontAwesomeIcon className="text-6xl p-1 hover:scale-110 transition-all" icon={faCirclePlay} />
                        </a> */}
                    </div>
                    <img src="" className='object-cover pointer-events-none m-auto hidden'/>
                    <h1 className='pointer-events-none'>· React · Tailwind ·</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Projects;