import React, { useState } from 'react';
import { FaBars, FaBell, FaSignOutAlt } from 'react-icons/fa';
import { BsEmojiWink } from 'react-icons/bs';

function Navbar({ onSidebarToggle }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Student');

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleSelect = (option) => {
        setSelectedOption(option);
        setDropdownOpen(false);
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.leftSection}>
                <FaBars style={styles.menuIcon} onClick={onSidebarToggle} />
                <BsEmojiWink style={styles.emojiIcon} />
                <span style={styles.greeting}>Hi Aarav</span>
            </div>
            <div style={styles.rightSection}>
                <div style={styles.dropdown}>
                    <button style={styles.studentBtn} onClick={toggleDropdown}>
                        {selectedOption}
                    </button>
                    {dropdownOpen && (
                        <div style={styles.dropdownContent}>
                            <div style={styles.dropdownItem} onClick={() => handleSelect('Student')}>Student</div>
                            <div style={styles.dropdownItem} onClick={() => handleSelect('Faculty')}>Faculty</div>
                        </div>
                    )}
                </div>
                <FaBell style={styles.icon} />
                <FaSignOutAlt style={styles.icon} />
            </div>
        </nav>
    );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ddd',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: '1.5rem',
    marginRight: '16px',
    cursor: 'pointer',
  },
  emojiIcon: {
    fontSize: '1.5rem',
    marginRight: '8px',
  },
  greeting: {
    fontSize: '1.2rem',
    fontWeight: '500',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  dropdown: {
    position: 'relative',
    display: 'inline-block',
  },
  studentBtn: {
    backgroundColor: '#e0e0e0',
    border: 'none',
    borderRadius: '20px',
    margin:'0 12px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  dropdownContent: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    zIndex: 1,
  },
  dropdownItem: {
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '1rem',
    whiteSpace: 'nowrap',
  },
  icon: {
    margin:'0 15px',
    cursor: 'pointer',
    fontSize: '1.2rem',
  },
};

export default Navbar;
