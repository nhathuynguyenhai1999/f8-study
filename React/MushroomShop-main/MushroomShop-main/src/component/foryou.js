


function Content() {
    return (
        <div className="banner" id="BESTSELLER">
            <div className="banner-title">
                <h1>THE DIFFERENCE BETWEEN STYLE AND FASHION IS QUALITY</h1>
                <p>CLICK IMAGE FOR MOR INFO</p>
            </div>
            <div className="grid wide banner-content">
                <div className="row ">
                    <div className="l-6 c-12 banner-col">
                        <div className="banner-product1">
                            <img src="./img/best1.jpg" alt="" />
                            <div className="banner-product1-description">
                                <span>NEW COLLECTION</span>
                                <p>Trendy & Modern</p>
                            </div>
                            <div className="banner-btn1">
                                MORE
                            </div>
                        </div>
                    </div>
                    <div className="l-6 c-12 banner-col">

                        <div className=" l-12 banner-product2 product2">
                            <img src="./img/best3.png" alt="" />
                            <div className="banner-product2-description">
                                <span>WOMEN'S COLLECTION</span>
                                <p>Glamorous & Sophisticated</p>
                            </div>
                            <div className="banner-btn2">
                                MORE
                            </div>
                        </div>

                        <div className="l-12 banner-product3">
                            <img src="./img/best2.png" alt="" />
                            <div className="banner-product3-description">
                                <span>MEN'S COLLECTION</span>
                                <p>Elegant & Luxurious</p>
                            </div>
                            <div className="banner-btn3">
                                MORE
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Content;