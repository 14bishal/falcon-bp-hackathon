import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import LeadUser from './LeadUser'; // This will be your component for rendering the leads
import './index.css';

// Example of a card skeleton component
const CardSkeleton = () => {
	return (
		<div className="skeleton-card">
			<div className="skeleton-header"></div>
			<div className="skeleton-body"></div>
		</div>
	);
};

// const LEADS = [
//     {
//         id: null,
//         shopName: 'Adidas Store',
//         placeId: 'ChIJVVVVVVUWDTkRcksISMMG580',
//         businessStatus: 'OPERATIONAL',
//         iconUrl: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
//         rating: 3.6,
//         userRatingsTotal: 48,
//         permanentlyClosed: false,
//         vicinity: 'Shop No 1 &2 Ground floor, Metropolitan Mall, मेहरौली-गुड़गांव मार्ग, सेक्टर २५, गुरुग्राम',
//         merchantName: null,
//         pinCode: '122002',
//         lat: 28.4809085,
//         lng: 77.0802798,
//         southwestLat: 28.4795410197085,
//         southwestLng: 77.07874896970849,
//         northeastLat: 28.4822389802915,
//         northeastLng: 77.0814469302915,
//         formatted_address:
//             '"Shop No 1 &2 Ground floor, Metropolitan Mall, मेहरौली-गुड़गांव मार्ग, DLF फेस 2, सेक्टर २५, गुरुग्राम, हरियाणा 122002, India"',
//         placeDetailsName: '"Adidas Store"',
//         source: 'FSE',
//         status: 'PENDING',
//         contactNumber: '"+91 124 404 9411"',
//     },
//     {
//         id: null,
//         shopName: 'Sigma Industries',
//         placeId: 'ChIJSVmJtWAZDTkRH9tTCjfPHHA',
//         businessStatus: 'CLOSED_TEMPORARILY',
//         iconUrl: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
//         rating: 4.3,
//         userRatingsTotal: 16,
//         permanentlyClosed: true,
//         vicinity: 'Udyog Vihar, Plot 769 Phase-5, Dundahera, Gurugram',
//         merchantName: null,
//         pinCode: '122016',
//         lat: 28.504006,
//         lng: 77.085709,
//         southwestLat: 28.50271181970849,
//         southwestLng: 77.08428566970849,
//         northeastLat: 28.5054097802915,
//         northeastLng: 77.08698363029151,
//         formatted_address:
//             '"Udyog Vihar, Plot 769 Phase-5, Dundahera, Phase V, Udyog Vihar, Sector 19, Gurugram, Haryana 122016, India"',
//         placeDetailsName: '"Sigma Industries"',
//         source: 'FSE',
//         status: 'PENDING',
//         contactNumber: '"+91 124 234 7962"',
//     },
// ];


function CaptainAppScreen() {
	const location = useLocation();

	// Parse the query parameters from the URL
	const queryParams = new URLSearchParams(location.search);
	const latitude = queryParams.get('lat');
	const longitude = queryParams.get('long');

	const [activeTab, setActiveTab] = useState('todo');
	const [isLoading, setIsLoading] = useState(true); // Loading state for skeleton
	const [leads, setLeads] = useState([]); // Data from the API
	const [error, setError] = useState(null); // Handle API error

	const handleClick = (val) => {
		setIsLoading(true);
		setActiveTab(val);
		setIsLoading(false);
	};
	
	const fetchLeads = useCallback(async () => {
		try {
			const response = await fetch(
				`https://f31d-14-194-67-242.ngrok-free.app/leadGenerator/getLeads?latitude=${latitude}&longitude=${longitude}&radius=150000&source=FSE`, {
					method: 'GET',
					headers: {
						'Access-Control-Allow-Origin': 'http://localhost:5173/',
						'Content-Type': 'application/json'
					},
				}
			);

			if (!response.ok) {
				throw new Error('Failed to fetch leads');
			}

			const data = await response.json();
			setLeads(data); // Update the leads data
			setIsLoading(false); // Stop loading once data is fetched
		} catch (error) {
			console.error('Error fetching data:', error);
			setError(error.message);
			setIsLoading(false); // Stop loading even if there's an error
		}
	}, [latitude, longitude]);

	// Fetch data from API
	useEffect(() => {
		if (latitude && longitude) {
			console.log('dfgdf');
			fetchLeads(); // Fetch leads if latitude and longitude exist
		}
	}, [fetchLeads, latitude, longitude]); // Re-run useEffect if lat/long change


	const leadList = useMemo(() => {
		if(activeTab === 'todo') {
			return leads?.filter((itm) => itm?.status === 'PENDING');
		} else {
			return leads?.filter((itm) => itm?.status === 'ONBOARDED')
		}
	}, [activeTab, leads])

	return (
		<>
			<h3>CAPTAIN APP SCREEN</h3>
			<div className="captain-screen">
				<div className="tab-container">
					<div
						id="todo"
						className={activeTab === 'todo' ? 'highlight-tab curve-border' : 'each-tab'}
						onClick={() => handleClick('todo')}
					>
						TODO
					</div>
					<div
						id="completed"
						className={activeTab === 'completed' ? 'highlight-tab curve-border-2' : 'each-tab'}
						onClick={() => handleClick('completed')}
					>
						COMPLETED
					</div>
				</div>

				{/* Show skeleton while loading */}
				{isLoading ? (
					[...Array(4).keys()].map((key) => <CardSkeleton key={key} />)
				) : error ? (
					<div className="error">{error}</div>
				) : (
					<LeadUser list={leadList} fetchLeads={fetchLeads} />
				)}
			</div>
		</>
	);
}

export default CaptainAppScreen;
