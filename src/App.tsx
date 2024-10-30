import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";

const App = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <NavBar />
        <Hero />
      </main>
    </>
  );
};

export default App;
