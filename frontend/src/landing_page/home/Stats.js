import React from "react";

function Stats() {
  return (
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col p-6">
          <h1 className="p-5">Trust with confidence</h1>
          <h4>Customer-first always</h4>
          <p className="text-muted mb-3">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h4>No spam or gimmicks</h4>
          <p className="text-muted mb-3">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h4>The Zerodha universe</h4>
          <p className="text-muted mb-3">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4>Do better with money</h4>
          <p className="text-muted mb-3">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col p-5">
          <img
            style={{ width: "85%" }}
            src="media/images/ecosystem.png"
            alt="Ecosystem.png"
          ></img>
          <div className="text-center">
            <a className="mx-5" href="" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa-solid fa-magnifying-glass-arrow-right"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite Demo{" "}
              <i class="fa-solid fa-magnifying-glass-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
