export default function WhyChoose() {
    return (
      <section className="py-20 px-4 bg-white dark:bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          {/* Section Badge */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 bg-[#eaf4ff] px-4 py-1 rounded-full w-fit">
              <span className="w-2 h-2 bg-[#0A6CDB] rounded-full inline-block"></span>
              <span className="text-[#0A6CDB] font-inter font-medium">Why Chose Kosal</span>
            </div>
          </div>
          <h2 className="text-[48px] font-bold font-inter leading-tight text-black dark:text-white mb-12 text-left pl-2">
            <span className="text-[#00A651]">We listen</span> first,<br />
            Then <span className="text-[#0A6CDB]">we build.</span>
          </h2>

          {/* 4x2 Grid */}
          <div className="grid grid-cols-4 grid-rows-2 gap-6 auto-rows-fr">
            {/* Box 1: Vetted Engineers - 2 cols & 2 rows */}
            <div className="row-span-2 col-span-2 bg-[#f9f9f9] dark:bg-[#1e1e1e] rounded-[32px] flex flex-col items-center justify-center p-0">
              <div className="flex flex-col items-start justify-center h-full w-full p-10">
                <div className="flex flex-col items-center justify-center">
                <img src="/image 2.png" alt="Vetted Engineers" className="w-[470px] h-[485px] object-contain " />
                </div>
                <div className="w-[274px] h-[104px] max-w-[274px] gap-4 rotate-0 opacity-100">
                <h3 className="font-semibold text-[26px] leading-[40px] tracking-[-0.01em] font-inter text-black dark:text-white mb-2">Vetted Engineers</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium text-[18px] leading-[24px] tracking-normal font-manrope">Only the top 3% of engineers make it into our network.</p>
              </div>
              </div>
            </div>

            {/* Box 2: Fast Onboarding - 2 cols x 1 row */}
            <div className="col-span-2 row-span-1 bg-[#f9f9f9] dark:bg-[#1e1e1e] rounded-[32px] flex flex-row items-center justify-center p-0 ">
              <div className="flex flex-col items-center justify-center w-full h-full p-10">
              <div className="absolute top right-3">
                <img src="/rocket-dynamic-color.png" alt="Fast Onboarding" className="w-[370px] h-[329px] object-contain mr-6" />
                </div>
                <div className="flex flex-col content-end justify-baseline">
                  <h3 className="font-semibold text-[26px] leading-[40px] tracking-[-0.01em] font-inter text-black dark:text-white mb-2">Fast Onboarding</h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium text-[18px] leading-[24px] tracking-[0] font-manrope">Get matched with the right engineers in days, not weeks.</p>
                </div>
               
              </div>
            </div>

            {/* Box 3: Quality Guaranteed - 1 col x 1 row */}
            <div className="col-span-1 row-span-1 bg-[#f9f9f9] dark:bg-[#1e1e1e] rounded-[32px] flex flex-row items-center justify-center p-0">
              <div className="flex flex-row items-center justify-center w-full h-full p-10">
                <img src="/thumb-up-dynamic-color.png" alt="Quality Guaranteed" className="w-[60px] h-[60px] object-contain mr-4" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Quality Guaranteed</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Quality you can trust, support you can count on.</p>
                </div>
              </div>
            </div>

            {/* Box 4: Flexible Engagement - 1 col x 1 row */}
            <div className="col-span-1 row-span-1 bg-[#f9f9f9] dark:bg-[#1e1e1e] rounded-[32px] flex flex-row items-center justify-center p-0">
              <div className="flex flex-row items-center justify-center w-full h-full p-10">
                <img src="/chat-bubble-dynamic-color.png" alt="Flexible Engagement" className="w-[60px] h-[60px] object-contain mr-4" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Flexible Engagement</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">From short-term to long-term — we scale with you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
  