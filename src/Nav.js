const Nav = () => {
    return (
        <div className="flex justify-center shadow-sm bg-slate-800 bg-opacity-25 animate-in">
            <ul className="flex justify-around p-5 space-x-10 sm:space-x-2 sm:text-center">
                <li className="nav-btn about text-3xl sm:text-lg font-light text-white cursor-pointer hover:text-white transition-all hover:translate-y-1">·aboutMe·</li>
                <li className="nav-btn projects text-3xl sm:text-lg font-light text-slate-700 cursor-pointer hover:text-white transition-all hover:translate-y-1">·myProjects·</li>
                <li className="nav-btn contact text-3xl sm:text-lg font-light text-slate-700 cursor-pointer hover:text-white transition-all hover:translate-y-1">·contactMe·</li>
            </ul>
        </div>
    );
};

export default Nav;