import {
  ArrowRight,
  Google,
  Amazon,
  Philips,
  Toshiba,
  Samsung,
} from "../../utils/icons.util";
export default function Newsletter() {
  return (
    <div className="Newsletter">
      <div className="box">
        <div className="text">
          <h2>Subscribe to our newsletter</h2>
          <p>
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>
        </div>
        <div className="inputs">
          <input type="text" placeholder="Email address" />
          <button className="btn">
            Subscribe <ArrowRight />
          </button>
        </div>
        <div className="logo">
          <div className="icon">
            <Google />
          </div>
          <div className="icon">
            <Amazon />
          </div>
          <div className="icon">
            <Philips />
          </div>
          <div className="icon">
            <Toshiba />
          </div>
          <div className="icon">
            <Samsung />
          </div>
        </div>
      </div>
    </div>
  );
}
