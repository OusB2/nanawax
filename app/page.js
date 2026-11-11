import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Lookbook from "@/components/Lookbook";
import Story from "@/components/Story";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Preloader />
            <SmoothScroll />
            <Header />
            <Hero />
            <Marquee />
            <Categories />
            <Products />
            <Lookbook />
            <Story />
            <Footer />
        </main>
    );
}