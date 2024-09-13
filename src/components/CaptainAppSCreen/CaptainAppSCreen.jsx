import { useState } from 'react';
import LeadUser from './LeadUser';

import './index.css';

function CaptainAppScreen() {
	const [activeTab, setActiveTab] = useState('todo');

	const handleClick = (val) => {
		setActiveTab(val);
	};

	return (
		<>
			<h3>CAPTAIN APP SCREEN</h3>
			<div className='captain-screen'>
				<div className='tab-container'>
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
				<LeadUser/>
			</div>
		</>
	);
}

export default CaptainAppScreen;
