
const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="px-5 site-container">
          <div className="footer-top flex justify-between">
            <div className="flex flex-col text-left footer-menu">
                <h3>About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod 
                  tempor ut labore et dolore. Lorem ipsum dolor amet conse ctetur adipisicing elit, 
                  sedo eiusmod tempor incididunt ut labore etdolore. 
                </p>
            </div>
            <div className="flex flex-col text-left footer-menu">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Refund</a>
                </li>
                <li>
                  <a href="#">Blogs and news</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col text-left footer-menu">
              <h3>Operating Countries</h3>
              <ul>
                <li>
                  <a href="#">Germany</a>
                </li>
                <li>
                  <a href="#">Canada</a>
                </li>
                <li>
                  <a href="#">Australia</a>
                </li>
                <li>
                  <a href="#">Thailand</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col text-left footer-menu">
              <h3>Help</h3>
              <ul>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Live chat</a>
                </li>
                <li>
                  <a href="#">Submit Your Inquiry</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-middle flex justify-between">
            <div className="footer-app">
              <a href="#"><img src="/src/assets/icons/playstore.svg" alt="" /></a>
              <a href="#"><img src="/src/assets/icons/googleplay.svg" alt="" /></a>
            </div>
            <div className="footer-social-media">
              <span>Follow us</span>
              <ul>
                <li>
                  <a href="#"><img src="/src/assets/icons/Facebook.svg" alt="" /></a>
                </li>
                <li>
                  <a href="#"><img src="/src/assets/icons/YouTube.svg" alt="" /></a>
                </li>
                <li>
                  <a href="#"><img src="/src/assets/icons/Linkedin.svg" alt="" /></a>
                </li>
                <li>
                  <a href="#"><img src="/src/assets/icons/Telegram.svg" alt="" /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom flex justify-between">
            <div className="footer-copywright">
              Copyright © 1995-2026 Fashion Store Inc. All Rights Reserved
            </div>
            <div className="footer-policy">
              <a href="#">Terms of service</a>
              <a href="#">Privacy policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
