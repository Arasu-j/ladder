
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Products from "@/components/Product";
import Service from "@/components/Service"
import Why from "@/components/Why"
export default function Home() {
  return (
    
       <div>
       <Navbar/>
       <Hero/>
       <About/>
       <Products/>
       <Service/>
       <Why/>
       </div> 
  );
}
