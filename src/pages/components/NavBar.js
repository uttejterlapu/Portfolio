import React, { useState } from 'react';
import { Link } from 'react-scroll';
import icon from '../../assets/1_generated.jpg'
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#222831] border-gray-200 dark:bg-gray-900 sticky top-0 w-full z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={icon} className="h-8" style={{borderRadius:'50%'}} alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#EEEEEE]">Portfolio</span>
                </a>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div
                    className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#393E46] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#222831] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                to="home"
                                smooth={true}
                                duration={500}
                                className="block py-2 px-3 rounded hover:bg-[#00ADB5] md:hover:bg-transparent md:border-0 md:hover:text-[#00ADB5] md:p-0 text-white"
                                activeClass="text-[#00ADB5]"
                                spy={true}
                                exact="true"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                className="block py-2 px-3 rounded hover:bg-[#00ADB5] md:hover:bg-transparent md:border-0 md:hover:text-[#00ADB5] md:p-0 text-white"
                                activeClass="text-[#00ADB5]"
                                spy={true}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="skills"
                                smooth={true}
                                duration={500}
                                className="block py-2 px-3 rounded hover:bg-[#00ADB5] md:hover:bg-transparent md:border-0 md:hover:text-[#00ADB5] md:p-0 text-white"
                                activeClass="text-[#00ADB5]"
                                spy={true}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="internship"
                                smooth={true}
                                duration={500}
                                className="block py-2 px-3 rounded hover:bg-[#00ADB5] md:hover:bg-transparent md:border-0 md:hover:text-[#00ADB5] md:p-0 text-white"
                                activeClass="text-[#00ADB5]"
                                spy={true}
                            >
                                Experience
                            </Link>
                        </li>
                        
                        <li>
                            <Link
                                to="project"
                                smooth={true}
                                duration={500}
                                className="block py-2 px-3 rounded hover:bg-[#00ADB5] md:hover:bg-transparent md:border-0 md:hover:text-[#00ADB5] md:p-0 text-white"
                                activeClass="text-[#00ADB5]"
                                spy={true}
                            >
                                Project
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="block py-2 px-3 rounded hover:bg-[#00ADB5] md:hover:bg-transparent md:border-0 md:hover:text-[#00ADB5] md:p-0 text-white"
                                activeClass="text-[#00ADB5]"
                                spy={true}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
