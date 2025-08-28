import { Routes, Route, Link } from "react-router-dom";
import fbLogo from "../assets/social/facebook.svg";
import klarnaLogo from '../assets/shops/klarna.png';
import maestroLogo from '../assets/shops/maestro.png';
import mastercardLogo from '../assets/shops/mastercard.png';
import paypalLogo from '../assets/shops/paypal.png';
import visaLogo from '../assets/shops/visa.png';

export function Footer() {
  const Links = [
    { name: "Trademark Policy", url: "/trademark" },
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Code of Conduct", url: "/code-of-conduct" },
    { name: "Security Policy", url: "/security-policy" },
  ];
  const Payments = [
    { shopLogo: klarnaLogo, url: "https://www.klarna.com/", name: "Klarna" },
    { shopLogo: paypalLogo, url: "https://www.paypal.com/", name: "PayPal" },
    { shopLogo: visaLogo, url: "https://www.visa.com/", name: "Visa" },
    { shopLogo: mastercardLogo, url: "https://www.mastercard.com/", name: "MasterCard" },
    { shopLogo: maestroLogo, url: "https://www.maestro.com/", name: "Maestro" },
  ];

  //const logoArray = [, ]
  return (
    <footer className="footer">
      <div className="footer1">
        <nav>
          <ul className="footer-links">
            {Links.map((link) => (
              <li key={link.name}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-icons">
          <svg
            className="twiter-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 248 204"
          >
            <path
              fill="#1d9bf0"
              d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
            />
          </svg>
          <svg
            className="yt-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28.57 20"
            preserveAspectRatio="xMidYMid meet"
          >
            <g>
              <path
                d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                fill="#FF0000"
              />
              <path
                d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
                fill="white"
              />
            </g>
          </svg>
          <img src={fbLogo} />
        </div>
      </div>
      <div className="footer2">
        <p>Payment methods:</p>
      </div>
      <div className="footer3">
        <ul className="pay-apps">
          {Payments.map((papp) => (
            <li>
              <a href={papp.url}>
                <img src={papp.shopLogo} alt={papp.name}></img>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
