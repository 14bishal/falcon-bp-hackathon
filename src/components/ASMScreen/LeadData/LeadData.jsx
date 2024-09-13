// import { useNavigate } from 'react-router-dom';

import Card from "../../../common/Card";

import './index.css'

function LeadData() {
    // const navigate = useNavigate();

    const handleRoute = (val) => {
        console.log(val)
    }

    return (
        <>
            <h3>ASM SCREEN</h3>
            <div className="list-container">
                {[...Array(5).keys()].map((key) => (
                    <div key={key} className="each-card">
                        <Card handleRoute={() => handleRoute(key)} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default LeadData;