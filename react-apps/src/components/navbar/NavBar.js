import React, { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('home');

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setMenuOpen(false); // Close the menu after selecting a tab
  };

  return (
    <div>
      <nav style={styles.navbar}>
        <div style={styles.logo}>Logo</div>
        <button style={styles.menuButton} onClick={toggleMenu}>
          Menu
        </button>
        <div style={isMenuOpen ? styles.menuOpen : styles.menu}>
          <div onClick={() => handleTabClick('home')}>Home</div>
          <div onClick={() => handleTabClick('about')}>About</div>
          <div onClick={() => handleTabClick('services')}>Services</div>
          <div onClick={() => handleTabClick('contact')}>Contact</div>
        </div>
      </nav>

      <div style={styles.content}>
        {selectedTab === 'home' && <p>This is the Home tab content.</p>}
        {selectedTab === 'about' && <p>This is the About tab content.</p>}
        {selectedTab === 'services' && <p>This is the Services tab content.</p>}
        {selectedTab === 'contact' && <p>This is the Contact tab content.</p>}
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#333',
    color: 'white',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  menuButton: {
    display: 'none', // Hide the menu button on larger screens
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '30%',
  },
  menuOpen: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: '60px', // Adjust the top position based on your design
    left: 0,
    width: '100%',
    backgroundColor: '#333',
    zIndex: 1,
  },
  content: {
    padding: '20px',
  },
};

export default NavBar;
