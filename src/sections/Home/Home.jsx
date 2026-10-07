import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <main className="relative min-h-min lg:min-h-screen overflow-hidden    text-white bg-[#050816]">
      <Navbar />

      <Hero />
    </main>
  );
};

export default Home;
