import { useState } from 'react';
import './index.css'


const merchantList = [
    { merchant_name: 'Merchant A', merchant_id: 1, status: 'PENDING' },
    { merchant_name: 'Merchant B', merchant_id: 2, status: 'REJECTED' },
    { merchant_name: 'Merchant C', merchant_id: 3, status: 'SUCCESS' },
    { merchant_name: 'Merchant A', merchant_id: 1, status: 'PENDING' },
    { merchant_name: 'Merchant B', merchant_id: 2, status: 'REJECTED' },
    { merchant_name: 'Merchant C', merchant_id: 3, status: 'SUCCESS' },
    { merchant_name: 'Merchant A', merchant_id: 1, status: 'PENDING' },
    { merchant_name: 'Merchant B', merchant_id: 2, status: 'REJECTED' },
    { merchant_name: 'Merchant C', merchant_id: 3, status: 'SUCCESS' },
    { merchant_name: 'Merchant A', merchant_id: 1, status: 'PENDING' },
    { merchant_name: 'Merchant B', merchant_id: 2, status: 'REJECTED' },
    { merchant_name: 'Merchant C', merchant_id: 3, status: 'SUCCESS' },
    { merchant_name: 'Merchant A', merchant_id: 1, status: 'PENDING' },
    { merchant_name: 'Merchant B', merchant_id: 2, status: 'REJECTED' },
    { merchant_name: 'Merchant C', merchant_id: 3, status: 'SUCCESS' },
];

function ClubApp() {
    const [hasUrl, sethasUrl] = useState(false)
    return (
        <>
            <h3>Consumer App</h3>
            {!hasUrl ? (
                <div className='app-container'>
                    <img src="https://d30gqtvesfc1d5.cloudfront.net/hubble/bharat-swipe/images/refer-earn-banner-1713334868762.png"
                        alt='refer-earn' className='refer' />
                    <div className='refer-section'>
                        <div className='text'>Refer & Earn</div>
                        <button className='refer-cta' onClick={() => sethasUrl(true)}>REFER</button>
                    </div>

                </div>

            ) : (
                <div className='qr-container'>
                    <div className='text-1'>Scan the QR or click on the link below to <strong>earn referred money.</strong></div>
                    <img src="https://hubble.bharatpe.in/static/media/qr-icon.bfc5eaa5.png" alt="qr" width={80} height={80} />
                    <div className='text'>OR</div>
                    <a href="" target='_blank'>Refer link</a>
                </div>
            )}
            <div className='stats-container'>
                <div className='stats-count'>Total Refered: <span className='count'>15</span></div>
                <div className='stats-count'>Total Money Earned: <span className='count'>Rs. 340</span></div>
            </div>

            <div className='table-content'>
                <table>
                    <thead>
                        <tr>
                            <th>Merchant Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {merchantList.map(({ merchant_name, merchant_id, status }) => (
                            <tr key={merchant_id}>
                                <td>{merchant_name}</td>
                                <td>
                                    <button className={`btn ${status.toLowerCase()}`}>
                                        {status}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ClubApp