import Hero from "@/components/Hero";
import Partners from "@/components/Partners";

const Home = () => {
  return (
    <div className="root-container">
      <section>
        <Hero />
      </section>
      <section>
        <Partners />
      </section>
    </div>
  );
};

export default Home;
