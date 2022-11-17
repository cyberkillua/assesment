import React from "react";
import Reactangle from "../assets/rectangle.svg";
import Avi from "../assets/avi.svg";

export default function BlogHeader() {
  return (
    <div className="blog">
      <div className="blog-subheading">Blog</div>
      <div className="blog-title">Thoughts and words</div>
      <div className="blog-news">
        <div className="blog-news-image">
          <img src={Reactangle} alt="Blog" />
        </div>
        <div className="blog-news-text">
          <div className="blog-news-text-header">
            <div className="blog-news-text-header-text-one">Category</div>
            <div className="blog-news-text-header-text-two">
              November 22, 2021
            </div>
          </div>
          <div className="blog-news-text-sub">
            Pitch termsheet backing validation focus release.
          </div>
          <div className="blog-news-text-profile">
            <div className="blog-news-text-profile-avi">
              <img src={Avi} alt="author avatar" />
            </div>
            <div className="blog-news-text-profile-name">Chandler Bing</div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}
