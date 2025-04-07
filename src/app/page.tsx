import { About } from "./_components/about";
import  { Apresentation } from "./_components/apresentation";
import { Carousel } from "./_components/carousel";
import { Carouselbrands } from "./_components/carouselbrands";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Products } from "./_components/products";


export default function Home() {
  return (
    <main className="pt-[72px]">
      <Header />
      <Apresentation />
      <Carousel/>
      <About/>
      <Products/>
      <Carouselbrands/>
      <Footer/>
    </main>
  );
}
