import React from 'react'
import image from '../images/client.avif'
import aboutImage from '../images/aboutus.avif'
import './about.css'
function AboutUs() {
    return (
        <>
            <div className="about-us">
                <div className="about-container">
                    <h1>About Us</h1>
                    <div className="about-para">
                        <img src={aboutImage} alt="" />
                        <h4>Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus. Ut sit amet porta sem, interdum tincidunt libero. Nulla vel quam lobortis, varius est scelerisque, dapibus nisl.

                            The Mission
                            At the heart of everything, we set out to offer the best quality.
                        </p>
                    </div>
                </div>
            </div>
            <div className="client">
                <h4>Our Client</h4>
                <img src={image} alt="client-img" />
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore atque perspiciatis totam ullam itaque blanditiis reprehenderit sapiente saepe dolorem ipsum.
                    Dolorem at neque earum similique fugiat cupiditate molestiae modi quidem.
                    Ad ipsum quae tenetur culpa impedit provident neque eius exercitationem cum.</h5>
                <p>Lisa Morgan</p>
                   <p> CEO of Addle</p>
            </div>
            <div className="new-update">
                <h4>New Updates</h4>
                <div className="updates">
                    <div className="update-cont">
                    <h5>New Year, New Collection!</h5>
            <h3>Get your hands on the best trending outfits.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur, libero, similique, voluptatem culpa reprehenderit corrupti hic non minus asperiores odit doloremque mollitia quia placeat eos dolore. </p>
            <h6>Continue Reading..</h6>
                    </div>
                    <div className="update-cont">
                    <h5>New Year, New Collection!</h5>
            <h3>Get your hands on the best trending outfits.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur, libero, similique, voluptatem culpa reprehenderit corrupti hic non minus asperiores odit doloremque mollitia quia placeat eos dolore. </p>
            <h6>Continue Reading..</h6>
                    </div>
                    <div className="update-cont">
                    <h5>New Year, New Collection!</h5>
            <h3>Get your hands on the best trending outfits.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur, libero, similique, voluptatem culpa reprehenderit corrupti hic non minus asperiores odit doloremque mollitia quia placeat eos dolore. </p>
            <h6>Continue Reading..</h6>
                    </div>
                </div>
            </div>
            <div className="footer">
            <div class="first-info">
                <h1>Ship Shop</h1>
                <p>75 Warren St</p>
                <p>West Edington, United Kingdom NE61 7XH</p>
                <p>070 2337 6452</p>
                <p>shipshopstore@gmail.com</p>
                </div>
            <div class="second-info">
                <h4>Support</h4>
                <p>About</p>
                <p>Contact Us</p>
                <p>About Page</p>
                <p>Size Guide</p>
                <p>Shopping & Returns</p>
                <p>Privacy</p>
            </div>
            <div class="third-info">
                <h4>Company</h4>
                <p>About</p>
                <p>Blog</p>
                <p>Affiliate</p>
                <p>Login</p>
                
            </div>
            <div class="end-text">
        <p>Copyright @2024. All rights Reserved.</p>
    </div>
            </div>
        </>
    )
}

export default AboutUs