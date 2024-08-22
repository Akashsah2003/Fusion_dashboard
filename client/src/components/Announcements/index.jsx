import React, { useState } from 'react';

const Announcements = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const announcementsStyle = {
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: 'calc(100% - 320px)', // Fixed height
        overflowY: 'auto', // Enable vertical scrolling
        cursor: 'pointer', // Change cursor to pointer to indicate it's clickable
    };

    const announcementsTitleStyle = {
        fontSize: '1.5rem',
        marginBottom: '10px',
        color: '#333',
    };

    const announcementsListStyle = {
        fontSize: '1rem',
        color: '#777',
        listStyleType: 'disc',
        paddingLeft: '20px',
    };

    const popupStyle = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      zIndex: 1000,
      width: '50vh', // Use viewport height to maintain a square shape
      height: '50vh', // Ensure equal width and height
      overflowY: 'auto', // Keep scrollable if content overflows
  };
  

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
    };

    const closeButtonStyle = {
        display: 'block',
        marginLeft: 'auto',
        marginTop: '-10px',
        marginBottom: '20px',
        cursor: 'pointer',
        fontSize: '1.2rem',
        color: '#333',
        border: 'none',
        background: 'none',
    };

    return (
        <>
            <div style={announcementsStyle} onClick={togglePopup}>
                <h2 style={announcementsTitleStyle}>Latest Announcements</h2>
                <ul style={announcementsListStyle}>
                    <li>New feature launched!</li>
                    <li>Maintenance scheduled on 25th Aug</li>
                    <li>Team meeting at 3 PM</li>
                    <li>Another announcement</li>
                    <li>And another one</li>
                    <li>Yet another announcement</li>
                    <li>Announcement keeps going</li>
                    <li>Still more announcements</li>
                </ul>
            </div>

            {isPopupVisible && (
                <>
                    <div style={overlayStyle} onClick={togglePopup}></div>
                    <div style={popupStyle}>
                        <button style={closeButtonStyle} onClick={togglePopup}>
                            &times; Close
                        </button>
                        <h2 style={announcementsTitleStyle}>Latest Announcements</h2>
                        <ul style={announcementsListStyle}>
                            <li>New feature launched!</li>
                            <li>Maintenance scheduled on 25th Aug</li>
                            <li>Team meeting at 3 PM</li>
                            <li>Another announcement</li>
                            <li>And another one</li>
                            <li>Yet another announcement</li>
                            <li>Announcement keeps going</li>
                            <li>Still more announcements</li>
                        </ul>
                    </div>
                </>
            )}
        </>
    );
};

export default Announcements;