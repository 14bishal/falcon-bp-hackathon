import PropTypes from 'prop-types';

import './index.css'

function Card({handleRoute, itm}) {
    return (
        <div className='user-card'>
            <div className='shop-name'>{itm?.shopName}</div>
            {/* <div className='row'>
                <img width="40" height="40" src="https://img.icons8.com/bubbles/100/gender-neutral-user.png" alt="gender-neutral-user" />
                <div className='merchant-name'>Bablu Yadav</div>
            </div> */}
            <div className='row'>
                <img width="40" height="40" src="https://img.icons8.com/bubbles/100/iphone-x.png" alt="iphone-x" />
                <div className='phone-number'>{JSON.parse(itm?.contactNumber)}</div>
            </div>
            <div className='row'>
                <img width="40" height="40" src="https://img.icons8.com/bubbles/100/address.png" alt="address" />
                <div className='address'>{itm?.vicinity}</div>
            </div>
            <div className='row'>
            <img width="40" height="40" src="https://img.icons8.com/bubbles/100/filled-star.png" alt="filled-star"/>
                <div className='email'>{`${itm?.rating}/5`}</div>
            </div>

            <div className='footer'>
                <button type='submit' className='button' onClick={handleRoute}>Merchant Onboard</button>
            </div>
        </div>
    )
}

Card.propTypes = {
    handleRoute: PropTypes.func.isRequired,
    itm: PropTypes.object.isRequired, // Or specify a more detailed shape if needed
  };

export default Card