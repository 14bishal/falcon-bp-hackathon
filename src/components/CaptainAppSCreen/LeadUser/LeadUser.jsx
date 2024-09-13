import Card from "../../../common/Card";

import './index.css'

function LeadUser() {
    const handleRoute = (val) => {
        console.log(val)
    }

    return (
        <>
            <div className="list-content">
                {[...Array(5).keys()].map((key) => (
                    <div key={key} className="each-card">
                        <Card handleRoute={() => handleRoute(key)} />
                    </div>
                ))}
            </div>
        </>
    )
}
export default LeadUser