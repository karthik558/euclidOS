import React, { useState } from "react";

const DownloadPopup = ({ item, onClose }) => {
  const [selectedOption, setSelectedOption] = useState("gapps");

  const handleDownload = () => {
    // Implement download logic for the selected option
    window.open(selectedOption === "gapps" ? item.gappsDownloadLink : item.vanillaDownloadLink);
    onClose();
  };

  return (
    <div className="download-popup">
      <div className="popup-content">
        <div className="close-btn" onClick={onClose}>
          &times;
        </div>
        <div className="version-box">
          <span>{item.version}</span>
        </div>
        <h3>{item.info.title}</h3>
        <div className="maintainer-info">
          <p>
            Maintained by:{" "}
            <a href={item.maintainerLink} target="_blank" rel="noopener noreferrer">
              {item.maintainer}
            </a>
            &nbsp;
          </p>
        </div>
        <div className="options">
          <label>
            <input
              type="radio"
              name="download-option"
              checked={selectedOption === "gapps"}
              onChange={() => setSelectedOption("gapps")}
            />
            GAPPS
          </label>
          <label>
            <input
              type="radio"
              name="download-option"
              checked={selectedOption === "vanilla"}
              onChange={() => setSelectedOption("vanilla")}
            />
            VANILLA
          </label>
        </div>
        <button className="download-btn" onClick={handleDownload}>
          Download
        </button>
      </div>
    </div>
  );
};

export default DownloadPopup;