import { useState } from "react";
// GLOBAL CUSTOM COMPONENTS
import Switch from "components/reuseable/Switch";
import NextLink from "components/reuseable/links/NextLink";
import { PricingCard1 } from "components/reuseable/pricing-cards";
// CUSTOM DATA
import { pricingList1 } from "data/pricing";

export default function Pricing6() {
  const [activeYearly, setActiveYearly] = useState(false);

  return (
    <div className="row gy-6 align-items-center">
      <div className="col-lg-4">
        <h2 className="fs-15 text-uppercase text-muted mb-3">Our Pricing</h2>
        <h3 className="display-4 mb-5">We offer great and premium prices.</h3>

        <p className="mb-5">
          Enjoy a free 14-day trial Limited to 15 videos and 50 AI responses. No
          credit card required!
        </p>

        <div>
          <p>
            <img src="/img/hangout_video.png" alt="" />{" "}
            <span>Video & Screen recordings</span>
          </p>
          <p>
            <img src="/img/comment.png" alt="" />{" "}
            <span>Save Template Messages</span>
          </p>
          <p>
            <img src="/img/bolt.png" alt="" />{" "}
            <span>AI generated responses</span>
          </p>
        </div>
      </div>

      <div className="col-lg-7 offset-lg-1 pricing-wrapper">
        {/* <div className="pricing-switcher-wrapper switcher justify-content-start justify-content-lg-end">
          <p className="mb-0 pe-3">Monthly</p>

          <Switch value={activeYearly} onChange={setActiveYearly} />

          <p className="mb-0 ps-3">
            Yearly <span className="text-red">(Save 30%)</span>
          </p>
        </div> */}

        <div className="row gy-6 mt-5">
          {pricingList1.map((item, i) => (
            <div className={`col-md-6 ${i === 1 && "popular"}`} key={i}>
              <PricingCard1
                roundedButton
                bulletBg
                {...item}
                activeYearly={activeYearly}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
