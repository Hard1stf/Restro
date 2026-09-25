import { ArrowRight } from 'lucide-react';
import Animated from '../components/Animated';

const floatingDishes = [
  {
    src: '../../public/assets/dish1.png',
    alt: 'dish-1',
    className: 'top-6 left-4 md:top-10 md:left-[6%] lg:left-[10%]',
  },
  {
    src: '../../public/assets/dish2.png',
    alt: 'dish-2',
    className: 'top-8 right-4 md:top-12 md:right-[8%] lg:right-[12%]',
  },
  {
    src: '../../public/assets/dish3.png',
    alt: 'dish-3',
    className: 'bottom-6 left-10 md:bottom-10 md:left-[18%] lg:left-[22%]',
  },
  {
    src: '../../public/assets/dish4.png',
    alt: 'dish-4',
    className: 'bottom-8 right-10 md:bottom-12 md:right-[18%] lg:right-[20%]',
  },
  {
    src: '../../public/assets/dish5.png',
    alt: 'dish-5',
    className:
      'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-0 md:-translate-y-1/2',
  },
];

const CTA = () => {
  return (
    <>
      <section
        id="cta"
        className="relative overflow-hidden bg-orange-500 flex flex-col justify-center items-center min-h-100 md:min-h-110 px-6 mt-44"
      >
        <div className="absolute inset-0 w-full max-w-7xl mx-auto pointer-events-none">
          {floatingDishes.map((dish) => (
            <img
              key={dish.alt}
              src={dish.src}
              alt={dish.alt}
              className={`absolute size-20 md:size-28 lg:size-35 rounded-full object-cover pointer-events-auto transition-all duration-300 hover:scale-105 ${dish.className}`}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <Animated>
            <h1 className="text-3xl md:text-[40px] font-medium text-white font-urbanist text-balance">
              Every Meal Is Made To Be Remembered
            </h1>
          </Animated>

          <Animated y={20} delay={0.2}>
            <p className="text-white mt-4 max-w-sm mx-auto">
              Join us for fresh ingredients, signature recipes, and an
              unforgettable dining experience.
            </p>
          </Animated>

          <Animated delay={0.2} className="flex items-center justify-center">
            <a
              href="#booking-process"
              className="flex items-center gap-2.5 bg-white text-black pl-5 pr-2 py-2 rounded-full mt-5.5 transition"
            >
              Book Your Table
              <span className="size-7 rounded-full bg-black text-white grid place-content-center">
                <ArrowRight size={16} />
              </span>
            </a>
          </Animated>
        </div>
      </section>
    </>
  );
};

export default CTA;
