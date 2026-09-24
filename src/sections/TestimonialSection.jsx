import { Star } from 'lucide-react';
import Animated from '../components/Animated';
import { testimonials } from '../data/data';

const TestimonialSection = () => {
  return (
    <>
      <section id="testimonialSection" className="px-auto mt-44">
        <div className="text-center mb-14">
          <Animated delay={0.2}>
            <p className="text-orange-500 font-medium uppercase mb-4">
              LOVED BY FOOD LOVERS
            </p>
          </Animated>

          <Animated delay={0.2}>
            <h2 className="text-4xl md:text-5xl max-w-lg mx-auto text-balance">
              What Our Guests Say
            </h2>
          </Animated>
        </div>

        {/* testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <Animated
              key={i}
              y={80}
              delay={i * 0.1}
              className="border border-slate-200 hover:bg-slate-50/50 rounded-2xl p-6 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>
                <p className="text-zinc-600 leading-relaxed mb-6">
                  "{testimonial.review}"
                </p>
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="size-11 rounded-full object-cover shrink-0"
                />

                <div>
                  <p className="font-medium leading-tight mb-0.5">
                    {testimonial.name}
                  </p>
                  <span className="text-zinc-600">{testimonial.location}</span>
                </div>
              </div>
            </Animated>
          ))}
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
