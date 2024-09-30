import Topnave from "../Component/Topnave";
import Middlenav from "../Component/Middlenav";
import Bottomnav from "../Component/Bottomnav";
import Error from "../Component/Error";
import Footer from "../Component/Footer";
export default function ErrorPage() {
  return (
    <>
      <Topnave />
      <Middlenav />
      <Bottomnav />
      <Error/>
      <Footer/>
    </>
  )
}
