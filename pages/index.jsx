import dynamic from "next/dynamic";
import { Suspense } from "react";

// const Nav = dynamic(() => import("../components/nav"));
// const Footer = dynamic(() => import("../components/footer"));
// const DynamicComponent = dynamic(() =>
//   import("../components/hello").then((mod) => mod.Hello)
// );
const Home = () => {
  return (
    <main className="w-screen h-full bg-transparent relative body-container">
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense> */}
      <h1 data-aos="fade-in">aaaWWW</h1>
    </main>
  );
};

export default Home;
