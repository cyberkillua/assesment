import React from "react";

export default function CtaBox() {
  return (
    <div className="cta-card">
      <div className="cta-card-header">
        An enterprise template to ramp up your company website
      </div>
      <div className="cta-card-content">
        <div className="cta-card-content-input">
          <input type="text" placeholder="Your email address" />
        </div>
        <div className="cta-card-content-btn">
          <button>Start now</button>
        </div>
      </div>
    </div>
  );
}
