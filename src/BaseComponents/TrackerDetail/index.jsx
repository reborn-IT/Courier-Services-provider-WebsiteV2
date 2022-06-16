function TrackerDetail({
    name="",
    booking_date="",
    delivery_address="",
    delivery_date=""
}) {
    return (  
        <div className='track-details text-center'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <label className='track-details-title'>Name :</label><br/>
                            <label>{name}</label>
                        </div>
                        <div className='col-sm-6'>
                            <label className='track-details-title'>Booking Date :</label><br/>
                            <label>{booking_date}</label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-6'>
                            <label className='track-details-title'>Delivery Address :</label><br/>
                            <label>{delivery_address}</label>
                        </div>
                        <div className='col-sm-6'>
                            <label className='track-details-title'>Delivery Date :</label><br/>
                            <label>{delivery_date}</label>
                        </div>
                    </div>
                </div>
    );
}

export default TrackerDetail;