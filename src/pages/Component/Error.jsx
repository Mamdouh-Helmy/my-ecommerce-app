import { Link } from "react-router-dom";
import ErrorImages from "../../assets/images/error.png";
import { HomeError } from "../../utils/icons.util";
export default function Error() {
  return (
    <div className="error">
      <div className="container">
        <div className="box">
          <div className="images">
            <img src={ErrorImages} alt="Error" />
          </div>
          <div className="text">
            <h2>404, Page not founds</h2>
            <p>
              Something went wrong. It’s look that your requested could not be
              found. It’s look like the link is broken or the page is removed.
            </p>
          </div>
          <div className="go-home">
          <Link to="/">
              <button>
                Go To home <HomeError />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
