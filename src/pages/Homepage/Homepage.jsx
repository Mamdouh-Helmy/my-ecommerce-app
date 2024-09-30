import Topnave from "../Component/Topnave";
import Middlenav from "../Component/Middlenav";
import Bottomnav from "../Component/Bottomnav";
import Widgets from "../Component/Widgets";
import Features from "../Component/Features";
import TodayBestDeals from "../Component/TodayBestDeals";
import Banner from "../Component/Banner";
import Padding from "../Component/Padding";
import BannerHome from "../Component/BannerHome";
import ImportantProducts from "../Component/ImportantProducts";
import Newsletter from "../Component/Newsletter";
import Footer from "../Component/Footer";
export default function Homepage() {
  return (
    <>
      <Topnave />
      <Middlenav />
      <Bottomnav />
      <Padding/>
      <Widgets/>
      <Padding/>
      <Features/>
      <Padding/>
      <TodayBestDeals/>
      <Padding/>
      <Banner/>
      <Padding/>
      <BannerHome/>
      <Padding/>
      <ImportantProducts/>
      <Padding/>
      <Newsletter/>
      <Footer/>
    </>
  );
}
