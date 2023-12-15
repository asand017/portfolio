"use client"

import Page from "./common/Page";
import React, { useState, useEffect } from "react";

const Header = () => {

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          // Check if the user has scrolled past a certain point to make the header sticky
          const offset = window.scrollY;
          console.log("offset: " + offset);
          if (offset > 3) {
            setSticky(true);
          } else {
            setSticky(false);
          }
        };

        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      return (
        <div>
            <div className={'h-16 z-0 w-screen'}></div>
            <header className={`sticky-header sticky  ${isSticky ? 'sticky-background' : ''} h-16 z-10`}>
              <h1 className={`normal-font ${isSticky ? 'sticky-font' : ''}`}>Your Sticky Header Content</h1>
            </header>
        </div>
      );

    return (
        <Page/>
    )

}

export default Header;