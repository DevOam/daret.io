import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import ScrollToTop from '@/components/ScrollToTop';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Benefits />

        <Section
          id="testimonials"
          title="What Our Early Users Say"
          description={
            <>
              Hear from those who have tried Daret. Real Stories from Real People
              <br />
              <span style={{ fontWeight: 600 }}>
                Trusted by{" "}
                <span style={{ color: "#239450" }}>1000+</span> customers
                worldwide
              </span>
            </>
          }
        >
          <Testimonials />
        </Section>

        <FAQ />

        <CTA 
          heading="Join Us in Reimagining Finance for Good"
          subheading="Daret is more than an app—it's a return to trust-based finance, powered by technology and shared purpose. Whether you're managing a family circle or launching a new one with friends or coworkers, Daret helps you save, plan, and thrive—together."
        />
      </Container>
      <ScrollToTop />
    </>
  );
};

export default HomePage;
