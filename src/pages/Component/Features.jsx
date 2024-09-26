import {
  Prodects,
  Trophy,
  CreditCard,
  Headphones,
} from "../../utils/icons.util";
export default function Features() {
  return (
    <div className="features">
      <div className="container">
        <div className="content">
        <div className="box">
          <div className="icon">
            <Prodects color="#191C1F" size="40"/>
          </div>
          <div className="tex">
            <span>Fasted Delivery</span>
            <span>Delivery in 24/H</span>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <Trophy />
          </div>
          <div className="tex">
            <span>24 Hours Return</span>
            <span>100% money-back guarantee</span>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <CreditCard />
          </div>
          <div className="tex">
            <span>Secure Payment</span>
            <span>Your money is safe</span>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <Headphones />
          </div>
          <div className="tex">
            <span>Support 24/7</span>
            <span>Live contact/message</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
