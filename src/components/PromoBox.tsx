const PromoBox = () => {
    return (
        <div className="promo-box site-container pt-6 pb-12 px-5">
            <div className="grid max-md:grid-cols-1 md:grid-cols-2 gap-4">  
                <div className="row-span-2 promo-box-large">
                    <a className="tt-promo-box" href="/">
                        <img src="/assets/index-promo-img-07.jpg" alt="NEW IN" />
                        <div className="tt-description">
                            <div className="tt-description-wrapper">
                                <div className="tt-background "></div>
                                <div className="tt-title-small">NEW IN</div>
                                <div className="tt-title-large">CLOTHING</div>
                            </div>
                        </div>
                    </a>
                </div>  
                <div className="promo-box-small">
                    <a className="tt-promo-box" href="/">
                        <img src="/assets/index02-promo-img-02.jpg" alt="CLEARANCE SALES" />
                        <div className="tt-description">
                            <div className="tt-description-wrapper">
                                <div className="tt-background "></div>
                                <div className="tt-title-small">CLEARANCE SALES</div>
                                <div className="tt-title-large">GET UP TO 
                                    <span className="tt-base-color">20% OFF</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>  
                <div className="promo-box-small">
                    <a className="tt-promo-box" href="/">
                        <img src="/assets/index05-promo-img-05.jpg" alt="NEW IN:" />
                        <div className="tt-description">
                            <div className="tt-description-wrapper">
                                <div className="tt-background "></div>
                                <div className="tt-title-small">SUMMER 
                                    <span className="tt-base-color">2025</span>
                                </div>
                                <div className="tt-title-large">NEW ARRIVALS</div>
                            </div>
                        </div>
                    </a>
                </div>  
            </div>
        </div>
    );
};

export default PromoBox;