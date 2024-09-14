import Card from "../../../common/Card";

import './index.css'

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