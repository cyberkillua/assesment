import React from "react";

export default function OneCard({ headline, author, avi, newsImage }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={newsImage} alt="" />
      </div>
      <div className="card-text">
        <div className="card-text-header">
          <div className="card-text-header-text-one">Category</div>
          <div className="card-text-header-text-two">November 22, 2021</div>
        </div>
        <div className="card-text-sub">{headline}</div>
        <div className="card-text-profile">
          <div className="card-text-profile-avi">
            <img src={avi} alt="author avatar" />
          </div>
          <div className="card-text-profile-name">{author}</div>
        </div>
      </div>
    </div>
  );
}
