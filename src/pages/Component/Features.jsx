import { Prodects } from "../../utils/icons.util"
export default function Features() {
  return (
    <div className="features">
      <div className="container">
        <div className="box">
            <div className="icon">
                <Prodects/>
            </div>
            <div className="tex">
                <span>Fasted Delivery</span>
                <span>Delivery in 24/H</span>
            </div>
        </div>
        <div className="box">
            <div className="icon">
                <Prodects/>
            </div>
            <div className="tex">
                <span>24 Hours Return</span>
                <span>100% money-back guarantee</span>
            </div>
        </div>
        <div className="box">
            <div className="icon">
                <Prodects/>
            </div>
            <div className="tex">
                <span>Secure Payment</span>
                <span>Your money is safe</span>
            </div>
        </div>
        <div className="box">
            <div className="icon">
                <Prodects/>
            </div>
            <div className="tex">
                <span>Support 24/7</span>
                <span>Live contact/message</span>
            </div>
        </div>
      </div>
    </div>
  )
}
