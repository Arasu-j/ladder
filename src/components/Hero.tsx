
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-[1440px] h-[624px] p-[120px_64px] gap-8 rotate-0 opacity-100 grid place-items-center text-center relative ">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1F1F1F_1px,transparent_1px),linear-gradient(to_bottom,#1F1F1F_1px,transparent_1px)] [background-size:90px_90px]"></div>
      <div className="z-10 flex flex-col justify-center items-center gap-[40px] w-[1312px] h-[384px]  rotate-0 opacity-100">
        
        <div className="w-[1312px] h-[192px] max-w-[1312px] rotate-0 opacity-100">
          <h1 className="font-bold text-[88px] leading-[96px] tracking-normal text-center font-manrope ">
            Empowering Businesses with <br className="hidden md:block" />
            Smart Software Solutions
          </h1>
        </div>
       
          <p className="  w-[600px] h-[64px] max-w-[600px] font-medium text-[20px] leading-[32px] tracking-[-0.01em] text-center font-inter text-gray-600 dark:text-[#C2C2C2] font-inter mb-8">
            From restaurants to enterprise management, we build tools that<br /> grow with your goals.
          </p>
         
       
        <div className="flex justify-center w-[326px] h-[56px]  gap-[16px] rotate-0 opacity-100 rounded-[16px]">
          <Button variant="outline" className=" w-[181px] h-[56px]  gap-[16px] rotate-0 opacity-100 rounded-[16px] border font-semibold text-[18px] leading-[24px] tracking-normal align-middle font-manrope text-gray-700 dark:text-[#C2C2C2] border-gray-300">
            Schedule a Demo
          </Button>
          <Button className=" w-[181px] h-[56px]  gap-[16px] rotate-0 opacity-100 rounded-[16px] border font-semibold text-[18px] leading-[24px] tracking-normal align-middle font-manrope dark:text-white">Contact Us</Button>
        </div>
      </div>



    </section>
  );
}
