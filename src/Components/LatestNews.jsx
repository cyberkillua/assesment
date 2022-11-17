import React from "react";
import OneCard from "./OneCard";
import avatarOne from "../assets/avi.svg";
import imageTwo from "../assets/image2.svg";
import imageOne from "../assets/image1.svg";
import imageThree from "../assets/image3.svg";
import imageFour from "../assets/image4.svg";
import imageFive from "../assets/image5.svg";
import imageSix from "../assets/image6.svg";
import avatarTwo from "../assets/avi2.svg";
import avatarThree from "../assets/avi3.svg";

const posts = [
  {
    news: "Pitch termsheet backing validation focus release.",
    author: "Chandler Bing",
    avi: avatarOne,
    newsImage: imageTwo,
  },
  {
    news: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    author: "Rachel Green",
    avi: avatarTwo,
    newsImage: imageOne,
  },
  {
    news: "Beta prototype sales iPad gen-z marketing network effects value proposition",
    author: "Monica Geller",
    avi: avatarThree,
    newsImage: imageThree,
  },
  {
    news: "Pitch termsheet backing validation focus release.",
    author: "Chandler Bing",
    avi: avatarOne,
    newsImage: imageFour,
  },
  {
    news: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    author: "Rachel Green",
    avi: avatarTwo,
    newsImage: imageFive,
  },
  {
    news: "Beta prototype sales iPad gen-z marketing network effects value proposition",
    author: "Monica Geller",
    avi: avatarThree,
    newsImage: imageSix,
  },
];

export default function LatestNews() {
  return (
    <div className="latest-news">
      <div className="latest-news-header">Latest News</div>
      <div className="latest-news-grid">
        {posts.map((item) => {
          return (
            <OneCard
              headline={item.news}
              author={item.author}
              avi={item.avi}
              newsImage={item.newsImage}
            />
          );
        })}
      </div>
      <div className="latest-news-btn">
        <div className="latest-news-btn-container">
          <button>Load more</button>
        </div>
      </div>
    </div>
  );
}
