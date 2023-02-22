import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className="section contact min-w-full hidden">
            <h1 className="text-white text-center p-10">You can find me on these platforms, or send me an email</h1>
            <div className="card-small flex items-center m-auto justify-around text-white bg-slate-700 bg-opacity-10 sm:card-mobile md:card-mobile">
                <a href="https://github.com/whateverdat" target="_blank">
                    <FontAwesomeIcon className="text-4xl hover:text-slate-400" icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/g%C3%B6kay-%C3%B6nder-b5992a265/" target="_blank">
                    <FontAwesomeIcon className="text-4xl hover:text-slate-400" icon={faLinkedin} />
                </a>
                <a href="mailto:gokay.onder@hotmail.com" target="_blank">
                    <FontAwesomeIcon className="text-4xl hover:text-slate-400" icon={faAt} />
                </a>
            </div>
            <form target="_blank" id="contact-form" action='https://docs.google.com/forms/d/e/1FAIpQLSd2xI0pA4tlX3h4qTwZyChYqNikRUaYbSMKOvDqU0-Gd2sUQA/formResponse'>
                <div className='card m-auto mt-5 flex flex-col bg-slate-700 bg-opacity-10 sm:card-mobile md:card-mobile'>
                    <h1 className="text-white text-center mb-5">Alternatively, you can leave your message below</h1>
                    <textarea id="contact-info" name="entry.1781382758" className='resize-none rounded h-10 bg-gray-700 text-white p-2 mb-5' placeholder='Your contact information'></textarea>
                    <textarea id="message-text" name="entry.1374462686" className='resize-y rounded bg-gray-700 text-white p-2 mb-5' placeholder='Your message'></textarea>
                    <button id="send-btn" className='button m-auto transition-all'>Send</button>
                    <h1 className="text-white text-center mt-2 text-xs">*Uses Google Forms.</h1>
                </div>
            </form>
        </div>
    );
};

export default Contact;