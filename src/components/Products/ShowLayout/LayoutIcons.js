import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaBars, FaGripHorizontal } from "react-icons/fa";
export default function LayoutIcons({ setLayout }) {
  const [type, setType] = useState("grid");
  return (
    <React.Fragment>
      <a
        onClick={() => {
          setLayout("list");
          setType("list");
        }}
      >
        <IconContext.Provider
          value={{
            className: `showLayout-icon ${type === "grid" ? "" : "active"}`,
            size: "1.4em"
          }}
        >
          <FaBars />
        </IconContext.Provider>
      </a>
      <a
        onClick={() => {
          setLayout("grid");
          setType("grid");
        }}
      >
        <IconContext.Provider
          value={{
            className: `showLayout-icon ${type === "grid" ? "active" : ""}`,
            size: "1.5em"
          }}
        >
          <FaGripHorizontal />
        </IconContext.Provider>
      </a>
    </React.Fragment>
  );
}
