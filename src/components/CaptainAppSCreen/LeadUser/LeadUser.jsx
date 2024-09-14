import Card from "../../../common/Card";

import './index.css'


function LeadUser(list = [], fetchLeads) {

    const onBoardAPI = async (placeId) => {
        const baseUrl = `https://f31d-14-194-67-242.ngrok-free.app/leadGenerator/merchant/onboard`;

        try {
            const response = await fetch(baseUrl, {
                method: 'POST', // Setting method as POST
                headers: {
                    'Content-Type': 'application/json', // Set headers if you send JSON data
                    // Include any other headers if necessary (e.g., authorization)
                },
                body: JSON.stringify({
                    // Replace with your required request body data
                    placeId: placeId,
                }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();

            if (result) {
                fetchLeads(); // refetch the getLead API
                return;
            }
        } catch (error) {
            console.error('Error in onBoardAPI:', error);
        }
    };



    const handleRoute = (val) => {
        console.log(val)
        onBoardAPI(val)
    }

    return (
        <>
            <div className="list-content">
                {list?.length === 0 || !list ? (<div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                }}>
                    <img width="200" height="200" src="https://img.icons8.com/bubbles/100/list.png" alt="list"/>
                </div>) : (
                    list?.map((itm) => {
                        return (
                            <div key={itm?.shopName} className="each-card">
                                <Card handleRoute={() => handleRoute(itm?.placeId)} itm={itm} />
                            </div>
                        )
                    })

                )}
            </div>
        </>
    )
}
export default LeadUser