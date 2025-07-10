'use client';

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, Moon ,Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes"
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme()

  return (
    <header className="flex w-[1440px] h-[64px] justify-between px-[40px] py-[16px] rotate-0 opacity-100 border-b">
      <div className="flex flex-row w-[105.01px] h-[28px] gap-3 rotate-0 opacity-100 items-center">
       <img src="/kosallogo 1.png" alt="logo" className="w-[28px] h-[28px] rounded-[8px]" />
       <img src="/Logo Text.png" alt="logo" className="w-[65.01px] h-[14.15px] rotate-0 opacity-100" />
      </div>
      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center w-[677px] h-[24px] gap-8 rotate-0 opacity-100 font-medium text-[14px] leading-[24px] tracking-normal font-manrope text-[#4F4B5C]  dark:text-[#C2C2C2]">
        <div className="flex items-center gap-1 cursor-pointer">
          Services <ChevronDown size={14} />
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          Products <ChevronDown size={14} />
        </div>
        <div className="cursor-pointer">Careers</div>
        <div className="cursor-pointer">Why Chose Kosal</div>
        <div className="cursor-pointer">Ladder Academy</div>
        <div className="cursor-pointer">About Us</div>
      </nav>

      {/* Desktop Right */}
      <div className="hidden lg:flex items-center w-[121px] h-[32px] gap-[16px] rotate-0 opacity-100">
        <button
          type="button"
          aria-label="Toggle theme"
          className="py-4  w-[20px] rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={ () => setTheme(theme === 'dark' ? 'light' : 'dark') }
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <Button className="bg-primary w-[85px] h-[32px] px-[10px] py-[8px] gap-[6px] rotate-0 opacity-100 rounded-[24px] font-semibold text-[12px] leading-[16px] tracking-normal align-middle font-manrope text-white font-inter hover:bg-primary/90">
          Contact Us
        </Button>
      </div>

      {/* Mobile Nav Toggle */}
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className=" w-full p-4">
            <div className="flex flex-col gap-6 mt-8 font-manrope text-gray-700">
              <div className="flex items-center gap-1">
                Services <ChevronDown size={14} />
              </div>
              <div className="flex items-center gap-1">
                Products <ChevronDown size={14} />
              </div>
              <div>Careers</div>
              <div>Why Chose Kosal</div>
              <div>Ladder Academy</div>
              <div>About Us</div>
              <Button className="bg-primary text-white mt-4 font-inter hover:bg-primary/90">
                Contact Us
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
