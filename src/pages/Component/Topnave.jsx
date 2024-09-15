import { Twitter , Facebook , Pinterest , Reddit , Youtube , Instagram  } from "../../utils/icons.util";
export default function Topnave() {
  return (
    <div className="nav">
      <div className="container">
        <div className="text">
            Welcome to Clicon online eCommerce store.
        </div>
        <div className="left-content">
            <div className="follow-us">
                <span>Follow us:</span>
                <div className="icon">
                    <Twitter/>
                    <Facebook/>
                    <Pinterest/>
                    <Reddit/>
                    <Youtube/>
                    <Instagram/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}