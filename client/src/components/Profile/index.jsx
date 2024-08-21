import React, { useState } from 'react';
import profilePic from '../../assets/profile.webp'; // Adjust the path as needed

const Profile = () => {
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);

    const profileStyle = {
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: isImageEnlarged ? 'auto' : '300px', // Adjust height based on state
        width: isImageEnlarged ? 'auto' : 'auto',
        position: isImageEnlarged ? 'relative' : 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        zIndex: isImageEnlarged ? '1000' : 'auto',
    };

    const profilePicStyle = {
        borderRadius: '50%',
        width: isImageEnlarged ? '120px' : '80px', // Reduced enlarged size
        height: isImageEnlarged ? '120px' : '80px',
        marginBottom: '15px',
        border: isImageEnlarged ? '4px solid grey' : 'none', // Grey border when enlarged
        transition: 'width 0.3s ease, height 0.3s ease, border 0.3s ease',
        cursor: 'pointer',
    };

    const profileNameStyle = {
        fontSize: '1.5rem',
        marginBottom: '10px',
        color: '#333',
    };

    const profileDetailsStyle = {
        fontSize: '1rem',
        color: '#777',
    };

    const overlayStyle = {
        display: isImageEnlarged ? 'flex' : 'none',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '999', // Ensure overlay is above other content
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
        zIndex: '1001', // Ensure close button is above modal content
    };

    const modalContentStyle = {
        backgroundColor: '#fff',
        padding: '20px',
        border: '2px solid grey',
        borderRadius: '10px',
        width: '400px', // Fixed width for the modal
        maxWidth: '90%', // Responsive design
        position: 'relative', // Ensure close button is positioned relative to modal
    };

    const handleImageClick = () => {
        setIsImageEnlarged(!isImageEnlarged); // Toggle image size
    };

    return (
        <div>
            <div style={profileStyle}>
                <img
                    src={profilePic}
                    alt="Profile"
                    style={profilePicStyle}
                    onClick={handleImageClick}
                />
                <h2 style={profileNameStyle}>XXXXXXXX</h2>
                <div style={profileDetailsStyle}>
                    <p>22BCSXXX</p>
                    <p>Email: 22bcsxx@iiitdmj.ac.in</p>
                    <p>BTECH 2022</p>
                    <p>SEM-XXXX</p>
                </div>
            </div>

            {/* Overlay for enlarged view */}
            <div style={overlayStyle} onClick={() => setIsImageEnlarged(false)}>
                <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
                    <button style={closeButtonStyle} onClick={() => setIsImageEnlarged(false)}>
                        X
                    </button>
                    <img
                        src={profilePic}
                        alt="Profile"
                        style={{
                            ...profilePicStyle,
                            width: '120px',
                            height: '120px',
                            border: '4px solid grey',
                        }}
                    />
                    <h2 style={profileNameStyle}>XXXXXXXX</h2>
                    <div style={profileDetailsStyle}>
                        <p>22BCSXXX</p>
                        <p>Email: 22bcsxx@iiitdmj.ac.in</p>
                        <p>BTECH 2022</p>
                        <p>SEM-XXXX</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;