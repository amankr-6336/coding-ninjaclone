import React from 'react'
import lg from '../../asset/logo_variants-white-25005.png'
import {BsFacebook,BsInstagram,BsYoutube,BsTwitter,BsLinkedin,BsTelegram,BsFillEnvelopeFill} from 'react-icons/bs'
import {MdWifiCalling3} from 'react-icons/md'
import './Footer.scss'

function Footer() {
    return (
        <div className="footer">
            <div className="innerfooter">
                <div className="leftfooter">
                    <div className="logopart">
                        <img src={lg} alt="" />
                    </div>
                </div>
                <div className="middlefooter">
                    <div className="innermiddlefooter">
                        <div className="one">
                            <h3>CODING NINJAS</h3>
                            <ul>
                                <li><div className="hoverbox"><p>About us</p> <span></span></div></li>
                                <li><div className="hoverbox"><p>careers</p> <span></span></div></li>
                                <li><div className="hoverbox"><p>Privacy Policy</p> <span></span></div></li>
                                <li><div className="hoverbox"><p>Terms & Conditions</p> <span></span></div></li>
                                <li><div className="hoverbox"><p>Pricing & Refund Policy</p> <span></span></div></li>
                                <li><div className="hoverbox"><p>Bug Bounty</p> <span></span></div></li>
                                <li><div className="hoverbox"><p>Our Students</p> <span></span></div></li>
                                <li><div className="hoverbox"><p>Press Release</p> <span></span></div></li>
                            </ul>
                        </div>
                        <div className="two">
                            <h3>PRODUCTS</h3>
                            <ul>
                                <li><div className="hoverbox"><p>Courses</p> <span></span></div></li>
                                <li><div className="hoverbox"><p>Try Courses For Free</p> <span></span></div></li>
                                <li><div className="hoverbox"><p>Career Camp</p> <span></span></div></li>
                                <li><div className="hoverbox"><p>Mock Interview</p> <span></span></div></li>
                                <li><div className="hoverbox"><p>Hire Talents</p> <span></span></div></li>

                            </ul>

                        </div>
                        <div className="three">
                        <h3>COMMUINITY</h3>
                            <ul>
                                <li><div className="hoverbox"><p>CodeStudio</p> <span></span></div></li>
                                <li><div className="hoverbox"><p>Blog</p> <span></span></div></li>
                                <li><div className="hoverbox"><p>Events</p> <span></span></div></li>
                                <li><div className="hoverbox"><p>Campus ninja</p> <span></span></div></li>
                                <li><div className="hoverbox"><p>Affiliate</p> <span></span></div></li>
                                <li><div className="hoverbox"><p>Scholarship event</p> <span></span></div></li>
                                <li><div className="hoverbox"><p>Placement cell</p> <span></span></div></li>

                            </ul>

                        </div>
                    </div>

                </div>
                <div className="rightfooter">
                      <div className="innerrightfooter">
                        <h3>FOLLOW US ON</h3>
                        <div className="via">
                            <div className="circle"><BsFacebook/></div>
                            <div className="circle"><BsInstagram/></div>
                            <div className="circle"><BsYoutube/></div>
                            <div className="circle"><BsTwitter/></div>
                            <div className="circle"><BsLinkedin/></div>
                            <div className="circle"><BsTelegram/></div>
                        </div>
                        <h3>Contact us</h3>
                        <div className="innercontact">
                            <div className="con"> <MdWifiCalling3/> <div className="hoverbox"><p>1800-123-3598</p> <span></span></div>  </div>
                            <div className="con"> <BsFillEnvelopeFill/> <div className="hoverbox"><p>contact@codingninjas.com</p> <span></span></div>  </div>

                        </div>
                      </div>
                </div>
            </div>
        </div>
    )
}

export default Footer