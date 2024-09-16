import { Eye, ArrowRight } from "../../utils/icons.util";
export default function Usears() {
  return (
    <div className="user-deatlies">
      <h1>Sign in to your account</h1>
      <div className="input-user">
        <div className="inputuser">
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" className="inputuserdetailes"/>
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
          <button className="btn" style={{width:"100%" , textAlign:"center" , justifyContent:"center"}}>
              LOGIN <ArrowRight />
            </button>
            <div className="create-account">
                <span>Don’t have account</span>
                <button className="btn-create">Create account</button>
            </div>
        </div>
      </div>
    </div>
  );
}
