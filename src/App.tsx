import React from 'react'
import Marquee from "react-fast-marquee";
import {
  FaPinterest,
  FaGooglePay,
  FaApplePay,
  FaCcMastercard,
  FaCcVisa,
  FaPaypal,
} from "react-icons/fa";
import './App.css'

function App() {
  const PAYMENT_LOGOS = [
    {
      name: "Apple Pay",
      logo: FaApplePay,
    },
    {
      name: "MasterCard",
      logo: FaCcMastercard,
    },
    {
      name: "Google Pay",
      logo: FaGooglePay,
    },
    {
      name: "Visa",
      logo: FaCcVisa,
    },
    {
      name: "Paypal",
      logo: FaPaypal,
    },
  ];

  return (
    <>
      <h1>React Marquee</h1>
      <Marquee
        gradient={false}
        speed={55}
        pauseOnHover
        className="max-w-sm">
        <div className="cont flex cursor-pointer items-center gap-6">
          {PAYMENT_LOGOS.map(({ name, logo: Logo }) => {
            return (
              <div
                className="Marq w-12 grayscale duration-100 ease-linear hover:grayscale-0"
                key={name}
              >
                <Logo size={30} />
              </div>
            );
          })}
        </div>
      </Marquee>

      <Marquee
        gradient={false}
        speed={55}
        pauseOnHover
        direction='right'
        className="max-w-sm">
        <div className="cont flex cursor-pointer items-center gap-6">
          {PAYMENT_LOGOS.map(({ name, logo: Logo }) => {
            return (
              <div
                className="Marq w-12 grayscale duration-100 ease-linear hover:grayscale-0"
                key={name}
              >
                <Logo size={30} />
              </div>
            );
          })}
        </div>
      </Marquee>
    </>
  )
}

export default App
