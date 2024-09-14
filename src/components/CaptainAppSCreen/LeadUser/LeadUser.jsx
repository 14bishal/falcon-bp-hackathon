import Card from "../../../common/Card";
import PropTypes from 'prop-types';
import './index.css';

function LeadUser({ list, fetchLeads }) { // Destructure props

    const onBoardAPI = async (placeId) => {
        const baseUrl = `http://localhost:8080/leadGenerator/merchant/onboard?placeId=${placeId}`;

        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('response', response);

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();

            console.log('result', result);

            if (result) {
                fetchLeads(); // refetch the getLead API
                return;
            }
        } catch (error) {
            console.error('Error in onBoardAPI:', error);
        }
    };

    const handleRoute = (val) => {
        console.log(val);
        onBoardAPI(val);
    }

    return (
        <>
            <div className="list-content">
                {list?.length === 0 || !list ? (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '50vh',
                    }}>
                        <img width="200" height="200" src="https://img.icons8.com/bubbles/100/list.png" alt="list" />
                    </div>
                ) : (
                    list?.map((itm) => (
                        <div key={itm?.shopName} className="each-card">
                            <Card handleRoute={() => handleRoute(itm?.placeId)} itm={itm} />
                        </div>
                    ))
                )}
            </div>
        </>
    )
}

LeadUser.propTypes = {
    fetchLeads: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
};

export default LeadUser;
