import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'professional-experience', label: 'Professional Experience' },
  ];

  return (
    <nav className='bg-transparent fixed top-0 w-full z-50 dark:bg-black'>
      <div
        className={`transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] py-5 flex justify-between items-center ${
          isScrolled
            ? 'bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md dark:bg-black dark:bg-opacity-80'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <div className='text-white font-bold text-xl'>
          <span className='text-white'>Anchal Singh</span>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8 text-gray-300'>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? 'text-[#8245ec]' : ''
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons & Toggle - Desktop */}
        <div className='hidden md:flex items-center space-x-4'>
          <a
            href='https://github.com/anchal-singh26'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-[#8245ec]'
          >
            <FaGithub size={24} />
          </a>
          <a
            href='https://www.linkedin.com/in/anchal-singh-7611702b0/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-[#8245ec]'
          >
            <FaLinkedin size={24} />
          </a>
         
        </div>

        {/* Mobile Toggle Button */}
        <div className='md:hidden'>
          {isOpen ? (
            <FiX
              className='text-3xl text-[#8245ec] cursor-pointer'
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className='text-3xl text-[#8245ec] cursor-pointer'
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden dark:bg-black dark:bg-opacity-90'>
          <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? 'text-[#8245ec]' : ''
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className='flex space-x-4 items-center'>
              <a
                href='https://github.com/anchal-singh26'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-white'
              >
                <FaGithub size={24} />
              </a>
              <a
                href='https://www.linkedin.com/in/anchal-singh-7611702b0/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-white'
              >
                <FaLinkedin size={24} />
              </a>
             
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
