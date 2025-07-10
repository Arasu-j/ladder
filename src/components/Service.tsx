import { Globe, Smartphone, Server, Code, BarChart2, Palette } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-6 h-6 text-[#0A6CDB]" />,
    title: "Web Development",
    description: "Modern, responsive web applications built with React, Next.js, and other cutting-edge technologies."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-[#0A6CDB]" />,
    title: "Mobile Development",
    description: "Cross-platform mobile apps for iOS and Android using React Native and Flutter."
  },
  {
    icon: <Server className="w-6 h-6 text-[#0A6CDB]" />,
    title: "Backend Development",
    description: "Robust, well-documented APIs for seamless integration between systems."
  },
  {
    icon: <Code className="w-6 h-6 text-[#0A6CDB]" />,
    title: "API Development",
    description: "Robust, well-documented APIs for seamless integration between systems."
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-[#0A6CDB]" />,
    title: "Data Analytics",
    description: "Insightful data analysis and visualization to drive business decisions."
  },
  {
    icon: <Palette className="w-6 h-6 text-[#0A6CDB]" />,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences with modern design principles."
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-[#0f0f0f]">
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 bg-[#eaf4ff] px-4 py-1 rounded-full w-fit">
          <span className="w-2 h-2 bg-[#0A6CDB] rounded-full inline-block"></span>
          <span className="text-[#0A6CDB] font-inter font-medium">Our Services</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-inter font-bold text-[64px] leading-[72px] tracking-[-0.01em] text-center text-black dark:text-white">
          Whatever you need,<br />
          we’ll <span className="text-[#0A6CDB]">build it.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] dark:bg-[#1e1e1e] w-[416px] h-[226px] pt-6 pr-8 pb-6 pl-8 gap-4 rotate-0 opacity-100 rounded-[32px]"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-inter font-semibold text-[20px] leading-[32px] tracking-[-0.01em] text-black dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 font-manrope font-medium text-[16px] leading-[24px] tracking-normal">{service.description}</p>
              <div className='flex items-start'>
              <a
                href="#"
                className="text-[#0A6CDB] font-medium inline-flex items-center gap-1"
              >
                Learn more
                <svg
                  className="w-4 h-4 pt-[5px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              </div>
             
            </div>
            

          ))}
          
        </div>
        
      </div>
    </section>
  );
}
