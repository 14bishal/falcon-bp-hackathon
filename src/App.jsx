import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';


import './App.css';

import ClubApp from './components/ClubApp';
import CaptainAppScreen from './components/CaptainAppSCreen';
import LeadData from './components/ASMScreen/LeadData';
import CaptianAppHome from './components/CaptianAppHome';

function AppSelectionScreen() {
    const navigate = useNavigate();

    const handleRoleChange = (e) => {
        const selectedRole = e.target.value;
        if (selectedRole) {
            navigate(`/${selectedRole}`); // Navigate to the selected role route
        }
    };

    return (
        <div className='screen-1'>
            <div className='title'>Lead Generator</div>
            <div className='app-selection'>
                <label htmlFor="role-select">Select App</label>
                <select name="roles" id="role-select" onChange={handleRoleChange}>
                    <option value="">Select app</option>
                    <option value="app">Consumer App</option>
                    <option value="captain_app_home">Captian App</option>
                </select>

            </div>
            <div className='logo-section'>
                <img src='https://innovate.bharatpe.io/static/media/header-icon.f85adcc0.svg' alt='innovate' width={200} height={200} />
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div className='container'>
                <Routes>
                    <Route path="/" element={<AppSelectionScreen />} />
                    <Route path="/app" element={<ClubApp />} />
                    <Route path="/captain_app_home" element={<CaptianAppHome />} />
                    <Route path="/captain_app_dashboard" element={<CaptainAppScreen />} />
                    <Route path="/asm/list" element={<LeadData />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
