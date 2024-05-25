import React from "react";
import "../css/Header.css";
import Button from "./Button";
function Header() {
  return (
    <div className="div1">
      <img src="../../public/SiteLogo.png" alt="" />
      <ul>
        <li>About</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>gallery</li>
        <li>Team</li>
      </ul>
      <div className="btndiv">
        <div className="btndiv4">
          <Button color="col1">Contact sales</Button>{" "}
        </div>

        <Button color="col2">Sing in</Button>
      </div>
    </div>
  );
}

export default Header;
