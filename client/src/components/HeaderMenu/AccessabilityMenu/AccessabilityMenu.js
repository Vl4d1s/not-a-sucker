import React, { useState, useEffect } from "react";
import cursorPNG from "../../../cursor.png";
import { Dropdown, Image, Sticky } from "semantic-ui-react";
import negishut from "../../../assets/images/negishut.png";
import "../../../App.css";

function AccessbilityMenu() {
  const [cursorflag, setCursorFlag] = useState(false); //flag for Cursor
  const [currentZoom, setCurrentZoom] = useState(1); // default zoom value
  const [flag, setFlag] = useState(false); //flag for zoom in zoom out
  // const [brightness, setBrightness] = useState(125); // check if background bigger then 125  and set black or white color

  // button flag if add zoom option or not
  const handleZoomButtons = () => {
    if (flag === true) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  const changeCursor = () => {
    if (cursorflag === false) {
      document.getElementById("my-App").style.cursor = `url(${cursorPNG}),auto`;
      setCursorFlag(true);
    } else {
      document.getElementById("my-App").style.cursor = ``;
      setCursorFlag(false);
    }
  };

  //change the zoom to zoom in.
  const handlePageZoomIn = () => {
    if (currentZoom < 3) {
      setCurrentZoom(currentZoom + 0.1);
      document.getElementById(
        "my-App"
      ).style.transform = `scale(${currentZoom})`;
    }
  };

  //change the zoom to zoom out
  const handlePageZoomOut = () => {
    if (currentZoom > 1) {
      setCurrentZoom(currentZoom - 0.1);
      document.getElementById(
        "my-App"
      ).style.transform = `scale(${currentZoom})`;
    }
  };

  const trigger = (
    <span>
      <Image
        style={{ border: "2px solid with" }}
        bordered
        size="tiny"
        position={Sticky}
        spaced
        circular
        src={negishut}
      />
    </span>
  );

  const options = [
    {
      key: "user",
      text: (
        <span>
          <strong>select</strong>
        </span>
      ),
      disabled: true,
    },
    { key: "zoomi", text: "הגדל את המסך", onClick: handleZoomButtons },
    { key: "zoomi", text: "הגדל סמן עכבר", onClick: changeCursor },
  ];

  useEffect(() => {
    //init default zoom - my-App the content div
    document.getElementById("my-App").style.transform = `scale(${currentZoom})`;
  }, []);

  return (
    <div id="container" style={{ zIndex: "100" }}>
      <div className="accessibility-option">
        <Dropdown inline trigger={trigger} options={options} />
      </div>

      {flag && (
        <div className="zoom-buttons">
          <button
            className="btn btn-dark button-padding"
            onClick={handlePageZoomIn}
          >
            +
          </button>
          <button
            className="btn btn-dark button-padding"
            onClick={handlePageZoomOut}
          >
            -
          </button>
        </div>
      )}
    </div>
  );
}

export default AccessbilityMenu;
