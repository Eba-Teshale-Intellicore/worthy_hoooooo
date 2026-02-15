
"use client";

import React, { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Star, Quote, CheckCircle2 } from "lucide-react";
import { useRouter } from "../lib/next-compat";

const testimonials = [
  {
    text: "Worthy Homes made buying our dream home effortless. The team guided us with expertise and unmatched professionalism.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Homeowner",
    stars: 5,
  },
  {
    text: "The personalized guidance from Worthy Homes gave us complete confidence in our property investment decisions.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Bilal Ahmed",
    role: "Investor",
    stars: 5,
  },
  {
    text: "From viewing to purchase, the process was seamless and transparent. Truly a luxury real estate experience.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Client",
    stars: 5,
  },
  {
    text: "Our property portfolio has grown thanks to Worthy Homes’ strategic advice and market expertise.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "Investor",
    stars: 5,
  },
  {
    text: "Every interaction with Worthy Homes reflects professionalism and attention to detail. Highly recommended.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Homeowner",
    stars: 5,
  },
  {
    text: "The team’s knowledge of luxury properties and investment opportunities is second to none.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Investor",
    stars: 5,
  },
  {
    text: "Worthy Homes helped us find the perfect property for our family. Their local insight was invaluable.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Homeowner",
    stars: 5,
  },
  {
    text: "Their expertise in high-end real estate made our buying experience effortless and actually enjoyable.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Investor",
    stars: 5,
  },
  {
    text: "Thanks to Worthy Homes, we secured a premium property that exceeded all our expectations.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "Homeowner",
    stars: 5,
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const revealVariants: Variants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  hidden: {
    opacity: 0,
    y: 40,
  },
};

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-8 pb-8"
      >
        {new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role, stars }, i) => (
              <div
                className="group p-10 bg-white dark:bg-slate-900 border border-green-100 dark:border-slate-800 rounded-[3rem] shadow-[0_15px_50px_-15px_rgba(34,197,94,0.1)] dark:shadow-black/20 hover:shadow-[0_30px_70px_-10px_rgba(34,197,94,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-green-600 dark:hover:border-green-500 relative overflow-hidden"
                key={i}
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity text-green-600 dark:text-green-500">
                  <Quote size={80} />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="text-slate-700 dark:text-slate-200 leading-relaxed text-lg font-bold italic mb-8 relative z-10 transition-colors duration-500">
                  "{text}"
                </div>

                <div className="flex items-center gap-5 mt-auto">
                  <div className="relative">
                    <img
                      width={56}
                      height={56}
                      src={image}
                      alt={name}
                      className="h-14 w-14 rounded-2xl object-cover border-2 border-green-200 dark:border-slate-700 shadow-md transition-colors duration-500"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-600 dark:bg-green-700 rounded-full p-1 shadow-lg border-2 border-white dark:border-slate-800 transition-colors duration-500">
                      <CheckCircle2 size={12} className="text-white" />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="font-black text-slate-900 dark:text-white text-base leading-tight transition-colors duration-500">
                      {name}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-black text-green-600 dark:text-green-400 mt-1 transition-colors duration-500">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  return (
    <section
      ref={heroRef}
      className="bg-green-100 dark:bg-slate-950/80 py-32 relative transition-colors duration-500 overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 transition-colors duration-500">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.15)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.05)_0%,transparent_50%)] transition-colors duration-500" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            custom={1}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white dark:bg-slate-900 shadow-xl shadow-green-900/5 dark:shadow-black/20 border border-green-200 dark:border-slate-800 text-green-700 dark:text-green-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 transition-colors duration-500">
              <span className="flex h-2 w-2 rounded-full bg-green-600 transition-colors duration-500" />
              Testimonials
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-950 dark:text-white tracking-tighter leading-none transition-colors duration-500">
              Stories From Our <span className="text-green-600">Homeowners</span>
            </h2>

            <p className="mt-8 text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-bold opacity-80 transition-colors duration-500">
              Join hundreds of satisfied families who found their perfect sanctuary with Worthy Homes. We don't just sell properties; we build futures.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            custom={2}
            viewport={{ once: true }}
            className="flex flex-col items-start lg:items-end gap-6"
          >
            <div className="flex items-center gap-4 bg-white dark:bg-slate-900 px-6 py-4 rounded-[2rem] shadow-xl border border-green-50 dark:border-slate-800 transition-colors duration-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i} 
                    src={`https://randomuser.me/api/portraits/thumb/${i % 2 === 0 ? 'men' : 'women'}/${i+10}.jpg`} 
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 object-cover" 
                    alt="user"
                  />
                ))}
              </div>
              <div className="h-10 w-px bg-green-100 dark:bg-slate-800 transition-colors duration-500" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span className="text-lg font-black text-slate-900 dark:text-white tracking-tighter transition-colors duration-500">4.9/5</span>
                </div>
                <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest transition-colors duration-500">Client Satisfaction</span>
              </div>
            </div>
            
            <button
              onClick={() => router.push("/testimonials")}
              className="group flex items-center gap-4 bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs transition-all shadow-2xl shadow-green-600/20 active:scale-95"
            >
              See All Reviews <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Parallax Scrolling Wall */}
        <div className="relative">
          {/* Subtle Mask Fades */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-green-100 dark:from-slate-950/80 to-transparent z-10 pointer-events-none transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-green-100 dark:from-slate-950/80 to-transparent z-10 pointer-events-none transition-colors duration-500" />
          
          <div className="flex justify-center gap-8 md:gap-12 lg:gap-16 max-h-[840px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={40} />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={50}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={45}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
