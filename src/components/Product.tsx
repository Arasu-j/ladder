// app/components/Products.tsx

import { cn } from "@/lib/utils"

export default function Products() {
  return (
    <section className="w-full bg-background py-16 px-4 text-center font-manrope dark:text-white">
      {/* Section header */}
      <div className="flex mb-8">
        <div className="flex items-center gap-2 bg-[#eaf4ff] px-4 py-1 rounded-full w-fit mx-auto">
          <span className="w-2 h-2 bg-[#0A6CDB] rounded-full inline-block"></span>
          <span className="text-[#0A6CDB] font-inter font-medium">Our Products</span>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mb-12">
        {/* Remove old badge here */}
        <h2 className="text-4xl font-bold mt-4">
          <span className="text-blue-600 dark:text-blue-400">Solutions</span> for Every Business Need.
        </h2>
      </div>

      {/* Product Card Section */}
      <div className="flex flex-col items-center gap-8">
        {/* Product Image Card */}
        <div className="bg-white dark:bg-muted rounded-2xl shadow-md p-6 max-w-4xl mx-auto">
          <img
            src="/Product Image.png"
            alt="Bites Product"
            className="rounded-lg mx-auto max-w-full h-auto"
          />
          <p className="mt-4 text-sm text-muted-foreground">Bites: Restaurant Management Software</p>
        </div>

        {/* Product Filter Pills */}
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-2 bg-[#f4f4f5] px-2 py-1 rounded-full">
            {["Bites", "LinkedIn AI Agent", "Retailer's CRM", "Collection App"].map((item, idx) => (
              <button
                key={item}
                className={cn(
                  "px-5 py-2 rounded-full font-inter text-base transition-colors",
                  idx === 0
                    ? "bg-white font-bold text-[#444] shadow-sm"
                    : "bg-transparent text-gray-400 font-medium"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Product Description */}
        <p className="max-w-2xl text-center text-muted-foreground font-inter text-base">
          Manage every aspect of your restaurant — from digital menus and real-time kitchen displays to seamless billing, analytics, and POS integration.
        </p>
      </div>
    </section>
  );
}
