import About from "./section/About";
import About1 from "./section/About1";
import Customers from "./section/Customers";
import Hero from "./section/Hero";

export default function Home() {
  return (
    <main className="bg-secondary/white">
      <Hero />
      <Customers />
      <About />
      <About1 />
    </main>
  );
}
