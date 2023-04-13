import About from "./section/About";
import About1 from "./section/About1";
import Customers from "./section/Customers";
import Endorsement from "./section/Endorsement";
import Faq from "./section/Faq";
import Hero from "./section/Hero";
import ProductInfo from "./section/ProductInfo";
import ProductInfo1 from "./section/ProductInfo1";
import ProductInfo3 from "./section/ProductInfo3";
import ProductInfo2 from "./section/Productinfo2";
import Testimonials from "./section/Testimonials";

export default function Home() {
  return (
    <main className="bg-secondary/white">
      <Hero />
      <Customers />
      <About />
      <About1 />
      <Endorsement />
      <ProductInfo />
      <ProductInfo1 />
      <ProductInfo2 />
      <ProductInfo3 />
      <Testimonials />
      <Faq />
    </main>
  );
}
