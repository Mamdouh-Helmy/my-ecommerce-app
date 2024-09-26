import { Link } from "react-router-dom";
import { ArrowRight } from "../../utils/icons.util";
export default function TodayBestDeals() {
  return (
    <div className="today-best-deals">
      <div className="container">
        <div className="Content">
          <div className="text">
            Best Deals
            <div className="timear">
              Deals ends in
              <div className="timera-prodects">12d : 21h : 57m : 23s</div>
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
