


function Footer() {
    return (
        <div className="grid footer" id="FOOTER">
            <div className="row footer-content">
                <div className="footer-item l-3 m-6 c-12">
                    <div className="footer-title">FOLLOW US
                    </div>
                    <div className="row follow">
                        <div className="c-6 follow-icon">
                            <a className="follow-link" href=""><div><img src="./img/qrcode.png" /></div></a>
                        </div>
                        <div className="c-6 follow-icon">
                            <li><a className="follow-link" href=""><div><i className="fa-brands fa-facebook"></i>Facebook</div></a></li>
                            <li><a className="follow-link" href=""><div><i className="fa-brands fa-instagram"></i>Instagram</div></a></li>
                            <li><a className="follow-link" href=""><div><img src="./img/logo1.png" /></div></a></li>
                        </div>
                    </div>
                </div>
                <div className="footer-item l-3 m-6 c-12">
                    <div className="footer-title">CONTACT
                    </div>
                    <div className="contact">
                        <p>Email: mushroom@gmail.com</p>
                        <p>Phone: 0224743456</p>
                        <p>Address: No 436, Nguyen Tri Phuong Street, Hai Chau distric, Da Nang city</p>
                    </div>
                </div>
                <div className="footer-item l-3 m-6 c-12">
                    <div className="footer-title">ABOUT US
                    </div>
                    <div className="about-us">
                        <li><a className="follow-link" href=""><div>Mushroom Boutique</div></a></li>
                        <li><a className="follow-link" href=""><div>News</div></a></li>
                        <li><a className="follow-link" href=""><div>Best service</div></a></li>
                        <li><a className="follow-link" href=""><div>Primary policy</div></a></li>
                    </div>
                </div>
                <div className="footer-item l-3 m-6 c-12">
                    <div className="footer-title">FEEDBACK
                    </div>
                    <div className="feedback">
                        <p> We really 'd love to hear from you to improve our service </p>
                        <p>Hotline: 0224743456 (8:30-22:00)</p>
                        <p>Email: mushroom@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer