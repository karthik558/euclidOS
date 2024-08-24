import React, { useState, useEffect } from "react";
import DeviceData from "../../data/device.json";
import DownloadPopup from "./download-popup";

const DownloadList = ({ selectedTag }) => {
  const itemsPerPage = 9;
  const itemCount = DeviceData.length;

  const filteredItems = selectedTag
    ? DeviceData.filter((device) => device.tag === selectedTag)
    : DeviceData;

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  // Download Popup
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDownloadClick = (event, item) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedItem(item);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const items = currentItems.map((item) => {
    const updateAvailableDate = new Date(item["new-update-date"]);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - updateAvailableDate.getTime();
    const daysElapsed = Math.ceil(timeDiff / (1000 * 3600 * 24));

    // Determine if the button should be shown
    const showNewUpdateButton = item["new-update"] === "yes" && daysElapsed <= 3;

    return (
      <div key={item.id} className="col-lg-4 col-md-6">
        <div className="item">
          <div className="img">
            <img src={item.img} alt="" />
            <span className="tag">{item.tag}</span>
            {showNewUpdateButton && (
              <button className="new-update-button">New Update Available</button>
            )}
            <div className="add">
              <a href="#" onClick={(event) => handleDownloadClick(event, item)}>
                Download <span className="pe-7s-angle-right"></span>
              </a>
            </div>
          </div>
          <div className="info">
            <h6>{item.info.title}</h6>
            <span>{item.info.dev_code}</span>
          </div>
        </div>
      </div>
    );
  });

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginationButtons = Array.from(Array(totalPages).keys()).map((pageNumber) => (
    <button
      key={pageNumber}
      className={pageNumber + 1 === currentPage ? "active" : ""}
      onClick={() => handlePageClick(pageNumber + 1)}
    >
      {pageNumber + 1}
    </button>
  ));

  return (
    <div className="store">
      <div className="top-area">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="result-text">
              <span>
                Showing {startIndex + 1} - {Math.min(endIndex, itemCount)} of {itemCount} Results
              </span>
            </div>
          </div>
          <div className="col-lg-8 d-flex justify-content-end"></div>
        </div>
      </div>
      <div className="row">{items}</div>
      <div className="pagination">{paginationButtons}</div>
      {showPopup && selectedItem && (
        <DownloadPopup item={selectedItem} onClose={handlePopupClose} />
      )}
    </div>
  );
};

export default DownloadList;