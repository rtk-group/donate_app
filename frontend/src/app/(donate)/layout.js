import React from 'react'
import "../globals.css";
// import Footer from '../../../components/donatefooter'
// import Header from '../../../components/donateheader';


export default function donatelayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header/> */}
        {children}
        {/* <Footer xml="true" /> */}
      </body>
    </html>
  );
}
