import React from "react";
import { NavLink } from "react-router-dom";

function GalaryNav() {
  const GalaryLinks = [
    { link: "All", path: "/galary" },
    { link: "Images", path: "images" },
    { link: "Vedios", path: "vedios" },
  ];
  return (
    <div className=" rounded-md bg-[#755620d0]" data-aos="fade-down">
      <ul className="flex w-full justify-between px-7 py-4">
        {GalaryLinks.map((galaryLinks, index) => (
          <li key={index} className="">
            <NavLink to={galaryLinks.path}>{galaryLinks.link}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GalaryNav;
