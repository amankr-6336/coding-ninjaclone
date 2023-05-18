import React from 'react'
import './Contact.scss'
import svg from '../../asset/call-icon-9597.svg'

function Contact() {
    return (
        <div className="contact">
            <div className="innercontact">
                <div className="form">
                    <div className="innerform">
                        <form >
                            <input type="text" placeholder='Phone Number*' />
                            <input type="text" placeholder='First Name*' />
                            <input type="email" name="" id="" placeholder='Email Address*' />
                            <input type="text" name="" id="" placeholder='Graduation year' />
                            <input className='but' type="button" value="Request Callback" />
                        </form>
                    </div>
                </div>
                <div className="rectangle">
                    <div className="contactdetails">
                    <div className="innercontactdetails">
                        <h2>Have any queries?</h2>
                        <p>Get a free counselling scession from experts</p>
                        <div className="combined">
                            <img src={svg} alt="" />
                            <div className="numbers">
                                <p>Call us on our toll free number</p>
                                <h1>1800-123-3598</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="cone">

                </div>
            </div>
        </div>
    )
}

export default Contact