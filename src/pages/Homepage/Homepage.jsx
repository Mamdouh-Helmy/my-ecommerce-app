import Topnave from "../Component/Topnave";
import Middlenav from "../Component/Middlenav";
import Bottomnav from "../Component/Bottomnav";
import Widgets from "../Component/Widgets";
import Features from "../Component/Features";
import TodayBestDeals from "../Component/TodayBestDeals";
export default function Homepage() {
  return (
    <>
      <Topnave />
      <Middlenav />
      <Bottomnav />
      <Widgets/>
      <Features/>
      <TodayBestDeals/>
    </>
  );
}
