import CtaBtn from "../components/ui/CtaButton";
import Tags from "../components/ui/Tags";

const Home = () => {
  return (
    <section className="flex-center justify-center full-width full-height flex-column">
      <div className="flex-column flex-center">
        <h1 className="heading-height hero-txt-efx">TEVIN CAMPBELL</h1>
        <Tags />
      </div>

      <div id="cta" className="flex-center reg-gap">
        <div className="cto-outline flex-center justify-between">
          <h3 id="cta-text" className="text-white">See Work</h3>
        <CtaBtn />
        </div>
      </div>
    </section>
  );
};

export default Home;
