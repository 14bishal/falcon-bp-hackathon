import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import './index.css'

function CaptianAppHome() {
    const navigate = useNavigate();

    const [userLocation, setUserLocation] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const getUserLocation = () => {
        // if geolocation is supported by the users browser
        if (navigator.geolocation) {
            // get the current users location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // save the geolocation coordinates in two variables
                    const { latitude, longitude } = position.coords;
                    // update the value of userlocation variable
                    setUserLocation({ latitude, longitude });
                },
                // if there was an error getting the users location
                (error) => {
                    if (error.code === 1) {
                        setErrorMessage('Location access denied. Please enable location permissions in your browser settings.');
                      } else {
                        setErrorMessage('Error getting user location. Please try again later.');
                      }
                      console.error('Error getting user location:', error);
                }
            );
        }
        // if geolocation is not supported by the users browser
        else {
            setErrorMessage('Geolocation is not supported by this browser.');
            console.error('Geolocation is not supported by this browser.');
        }
    };

    const routeToDashboard = () => {
        console.log('userLocation',userLocation);
        navigate('/captain_app_dashboard')
    }


    return (
        <>
            <h3>CAPTAIN APP SCREEN</h3>
            <div className='location-content'>
                <h4>We need to fetch your location, please click on the below button</h4>
                {errorMessage && <p className='error-message'>{errorMessage}</p>}

                {userLocation ? (
                    <button className='cta' onClick={routeToDashboard}>Continue</button>
                ) : (
                    <button className='cta' onClick={getUserLocation}>Get User Location</button>
                )}
            </div>
        </>
    )
}

export default CaptianAppHome;