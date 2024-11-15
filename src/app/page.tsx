import { Navbar } from "./components/Navbar";
import Content from "./components/Content";
import Marquee from "./components/Marquee";
import Content2 from "./components/Content2";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Content/>
    <Marquee/>
    <Content2/>
    <Marquee/>
    <Footer/>
    </>
  );
}
