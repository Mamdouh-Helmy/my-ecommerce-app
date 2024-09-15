import {
    Drodpwonbottom,
    MapPinLine,
    ArrowsCounterClockwise,
    Headphones,
    Info,
    PhoneCall
  } from "../../utils/icons.util";
export default function Bottomnav() {
  return (
    <div className="bottom-nav">
      <div className="container">
        <div className="left-side">
            <div className="box">
                All Category
                <Drodpwonbottom color="#191C1F"/>
            </div>
            <div className="box">
                <MapPinLine/>
                Track Order
            </div>
            <div className="box">
                <ArrowsCounterClockwise/>
                Compare
            </div>
            <div className="box">
                <Headphones/>
                Customer Support
            </div>
            <div className="box">
                <Info/>
                Need Help
            </div>
        </div>
        <div className="right-side">
            <div className="box">
                <PhoneCall/>
                +1-202-555-0104
            </div>
        </div>
      </div>
    </div>
  )
}
