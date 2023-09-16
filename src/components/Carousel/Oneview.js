import React from "react";
import background from "./slider1.png";
import { Link } from '@react-email/link';

function Oneview() {
  return (
    <div style={{ height: "500px",
                   width: "1450px",backgroundImage: `url(${background})` }}>
      <h1>This Website is under process and will be live soon.</h1>
      <h3>Reach us for any query:</h3>
      <h3>Phone no:- 9319663620</h3>
      <h3>info@gkprojects.com </h3>
      <h3>gksprojects@yahoo.com</h3>
     <Link href="info@gkprojects.com">Example</Link>;
    </div>
  );
}

export default Oneview;