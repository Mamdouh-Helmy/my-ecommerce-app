import { Eye , ArrowRight } from "../../utils/icons.util";
import Google from '../../assets/images/Google.png'
import Apple from '../../assets/images/Apple.png'

export default function LoginUsear() {
  return (
    <div className="login">
      <div className="container">
        <div className="input-user">
          <div className="usears">
            <div className="box active">Sign In</div>
            <div className="box">Sign Up</div>
          </div>
          <div className="boxs">
            <div className="inputuser">
              <label htmlFor="email">Email Address</label>
              <input type="text" id="email" className="inputuserdetailes" />
            </div>
            <div className="inputuser">
              <div className="password">
                <label htmlFor="password">Password</label>
                <span>Forget Password</span>
              </div>
              <div className="input-password">
                <input type="text" id="password" />
                <Eye />
              </div>
              <button
                className="btn"
                style={{
                  width: "100%",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Sign in <ArrowRight />
              </button>
              <div className="acount">
                <span>or</span>
                
              </div>
              <div className="acountes">
                    <div className="box">
                        <img src={Google} alt="" />
                        <div className="text">
                        Login with Google
                        </div>
                    </div>
                    <div className="box">
                        <img src={Apple} alt="" />
                        <div className="text">
                        Login with Apple
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
