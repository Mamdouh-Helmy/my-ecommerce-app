import { Link } from "react-router-dom";
import { ArrowRight } from "../../utils/icons.util";
import CountdownTimer from "./CountdownTimer";
export default function TodayBestDeals() {
  return (
    <div className="today-best-deals">
      <div className="container">
        <div className="Content">
          <div className="text">
            Best Deals
            <div className="timear">
              Deals ends in
              <CountdownTimer/>
            </div>
          </div>
          <Link to="/prodets">
            <div className="all-prodects">
              Browse All Product <ArrowRight color="#2DA5F3" size="18" />
            </div>
          </Link>
        </div>
        <div className="Product"></div>
      </div>
    </div>
  );
}
