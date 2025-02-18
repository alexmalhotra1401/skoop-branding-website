import clsx from "clsx";
import Price from "./Price";
import NextLink from "../links/NextLink";

// ================================================================
interface PricingCard1Props {
  planName: string;
  features: string[];
  bulletBg?: boolean;
  yearlyPrice: number;
  monthlyPrice: number;
  activeYearly: boolean;
  roundedButton?: boolean;
}
// ================================================================

export default function PricingCard1(props: PricingCard1Props) {
  const {
    planName,
    features,
    yearlyPrice,
    monthlyPrice,
    activeYearly,
    roundedButton,
    bulletBg,
  } = props;

  const yearClasses = activeYearly ? "price-show" : "price-hide price-hidden";
  const monthClasses = !activeYearly ? "price-show" : "price-hide price-hidden";

  return (
    <div className="pricing card shadow-lg">
      <div className="card-body pb-12">
        <div className="prices text-dark justify-content-center text-center">
          {/* <Price duration="mo" value={monthlyPrice} classes={monthClasses} />
          <Price duration="yr" value={yearlyPrice} classes={yearClasses} /> */}
          <div className="price-value">
            ${planName === "Monthly" ? monthlyPrice : yearlyPrice}
          </div>
        </div>

        <h4 className="card-title mt-2 text-center">{planName}</h4>

        {/* <ul className={clsx({ "icon-list bullet-soft-primary mt-7 mb-8": true, "bullet-bg": bulletBg })}>
          {features.map((item, i) => (
            <li key={i}>
              <i className="uil uil-check fs-21" />
              <span>
                <strong>{item.split(" ")[0]}</strong> {item.split(" ").slice(1).join(" ")}
              </span>
            </li>
          ))}
        </ul> */}

        <NextLink
          href="#"
          title="Choose Plan"
          className={`btn btn-primary ${
            roundedButton ? "rounded" : "rounded-pill"
          }`}
        />
      </div>
    </div>
  );
}
