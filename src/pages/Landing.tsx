import  HeroBanner from "../components/HeroBanner";
import PromoBox from "../components/PromoBox";
import TendingProduct from "../components/TendingProduct";

const Landing = () => {
  return (
    <>
    <div className="mian">
      <HeroBanner />
      <PromoBox />
      <TendingProduct />
    </div>
    </>
  );
};
export default Landing;
