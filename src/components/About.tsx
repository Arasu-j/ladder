import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section className="w-full px-6 py-16 md:px-16 bg-white dark:bg-black">
      <div className="flex  mb-8">
        <div className="flex items-center gap-2 bg-[#eaf4ff] px-4 py-1 rounded-full w-fit">
          <span className="w-2 h-2 bg-[#0A6CDB] rounded-full inline-block"></span>
          <span className="text-[#0A6CDB] font-inter font-medium">About Us</span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div className="space-y-4">
          {/* Remove old Badge component here */}

          <h2 className="text-4xl md:text-5xl font-bold font-manrope">
            <span className="text-black dark:text-white block">Streamline.</span>
            <span className="text-primary block">Scale.</span>
            <span className="text-green-500 dark:text-green-400 block">Succeed.</span>
          </h2>
        </div>

        {/* Right Side */}
        <div className="text-gray-700 dark:text-gray-300 space-y-4 font-inter text-sm md:text-base leading-relaxed">
          <p>
            Kosal.io is a technology-driven company that builds tailored software solutions to help
            businesses streamline their operations and scale with confidence.
          </p>
          <p>
            We specialize in industry-specific platforms — like Bites, our restaurant management system —
            and custom enterprise tools for sectors such as retail and services.
          </p>
          <p>
            Our products are designed for performance, integration, and growth, powered by a team that
            understands both local needs and global standards.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 text-center font-inter">
        {[
          { value: '2.5', label: 'Years of Experience' },
          { value: '23', label: 'Projects Completed' },
          { value: '4', label: 'Own Products' },
          { value: '50+', label: 'Happy Customers' },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#f9f9f9] dark:bg-[#1a1a1a] p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">{item.value}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
