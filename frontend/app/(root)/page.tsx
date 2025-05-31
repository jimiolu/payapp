import CTA from "@/components/CTA";
import { Features } from "@/components/Features";
import Hero from "@/components/Hero";
import Howto from "@/components/Howto";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import WhoFor from "@/components/WhoFor";

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <Partners />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <WhoFor />
      </section>
      <section>
        <Howto />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <CTA />
      </section>
    </div>
  );
};

export default Home;
