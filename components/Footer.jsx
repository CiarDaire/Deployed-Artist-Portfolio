import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-wrapper">
            <div className="foot-border-line"></div>
            <div className="footer-text">
                <div className="copyright">
                    <p>© Lu Steven {new Date().getFullYear()}</p>
                </div>
                <ul className="foot-socials">
                    <li className="insta">
                        <a href="http://www.instagram.com/lu.lined/" target="_blank" rel="noopener noreferrer">instagram</a>  
                    </li>
                    <li>
                        <span>|</span>
                    </li>
                    <li className="phone-footer-fb">
                        <a href="https://www.facebook.com/LouisaStevenArtist/" target="_blank" rel="noopener noreferrer">facebook</a>
                    </li>
                </ul>
                {/* phone */}
                <ul className="mobile-foot-socials">
                    <li className="insta-mfs">
                        <a href='http://www.instagram.com/lu.lined/'>
                            <img src='../images/Instagram_icon.png'alt="Instagram logo"></img>
                        </a>
                    </li>
                    <li className="fb-mfs">
                        <a href='https://www.facebook.com/LouisaStevenArtist/'>
                            <img src='../images/facebook-logo.png' alt="Facebook logo"></img>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
  )
}

export default Footer