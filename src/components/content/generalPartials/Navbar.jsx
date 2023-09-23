import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useStateContext } from '../../../contexts/ContextProvider';

// Navigation button component
const NavButton = ({ customFunc, icon, color, dotColor }) => (
  <button type='button' onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    />
    {icon}

  </button>
)

// Navbar component
const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext();

  // Effect to update screen size state
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect to update active menu state based on screen size
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  // Navbar component markup
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      {/* Navigation button */}
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        icon={<AiOutlineMenu />}
      />
    </div>
  )
}

export default Navbar
