import './index.css'

function Card(handleRoute = () => {}) {

    return (
        <div className='user-card'>
            <div className='shop-name'>Ambay Stationery Shop</div>
            {/* <div className='row'>
                <img width="40" height="40" src="https://img.icons8.com/bubbles/100/gender-neutral-user.png" alt="gender-neutral-user" />
                <div className='merchant-name'>Bablu Yadav</div>
            </div> */}
            <div className='row'>
                <img width="40" height="40" src="https://img.icons8.com/bubbles/100/iphone-x.png" alt="iphone-x" />
                <div className='phone-number'>+91 987563874</div>
            </div>
            {/* <div className='row'>
                <img width="40" height="40" src="https://img.icons8.com/bubbles/40/new-post.png" alt="new-post" />
                <div className='email'>babluyadav098@gmail.com</div>
            </div> */}
            <div className='row'>
                <img width="40" height="40" src="https://img.icons8.com/bubbles/100/address.png" alt="address" />
                <div className='address'>U-37 Road, Balbeer Market, Nathupur, Balveer Market, U Block, DLF Phase 3, Sector 24, Gurugram, Haryana 122002, India</div>
            </div>

            <div className='footer'>
                <button type='submit' className='button' onClick={handleRoute}>Merchant Onboard</button>
            </div>
        </div>
    )
}

export default Card