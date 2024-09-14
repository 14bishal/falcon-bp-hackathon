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
			// fetchLeads(); // Fetch leads if latitude and longitude exist
		}
	}, [latitude, longitude]); // Re-run useEffect if lat/long change


	const leadList = useMemo(() => {
		if(activeTab === 'todo') {
			leads?.filter((itm) => itm?.status === 'PENDING');
		} else {
			leads?.filter((itm) => itm?.status === 'ONBOARDED')
		}

		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
		return 
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
