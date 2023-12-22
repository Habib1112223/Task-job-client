import React from 'react';
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
      return (
            <div>
                  <footer className="footer px-10 py-4 border-t bg-gray-500 text-base-content border-gray-300">
                        <aside className="items-center grid-flow-col">
                              <div className='hidden lg:block w-3/12'>
                                    <h2 className='flex'>
                                          <img className='w-14 ' src="https://i.ibb.co/R3CTP0k/scc-logo.jpg" alt="" /><span className="font-bold">MANAGEMENT</span>
                                    </h2>
                              </div>
                              <p className="pl-52 text-black font-medium">"© 2004 [Task Management] - All Rights Reserved" </p>
                        </aside>
                        <nav className="md:place-self-center md:justify-self-end">
                              <div className="grid grid-flow-col gap-4">
                                    <h2 className="text-lg font-medium">SOCIAL MEDIA :</h2>
                                    <SlSocialFacebook className='text-2xl' />
                                    <SlSocialLinkedin className='text-2xl' />
                                    <FiTwitter className='text-2xl'/>
                              </div>
                        </nav>
                  </footer>
                  <footer className="footer p-10 bg-gray-300 text-base-content" data-aos="zoom-in">
                        <nav>
                              <header className="footer-title">INFORMATION</header>
                              <Link className="link link-hover">HOME</Link>
                              <Link className="link link-hover">SERVICES</Link>
                              <Link className="link link-hover">DASHBOARD</Link>
                              <Link className="link link-hover">MY SERVICES</Link>
                        </nav>
                        <nav>
                              <header className="footer-title">COMPANY</header>
                              <a className="link link-hover">ABOUT US</a>
                              <a className="link link-hover">CONTACT</a>
                              <a className="link link-hover">JOBS</a>
                              <a className="link link-hover">PRESS KIT</a>
                        </nav>
                        <nav>
                              <header className="footer-title">LEVELS</header>
                              <a className="link link-hover">TERMS OF USES</a>
                              <a className="link link-hover">PRIVACY POLICY</a>
                              <a className="link link-hover">COOKIE POLICY</a>
                        </nav>
                  </footer>
            </div>
      );
};

export default Footer;