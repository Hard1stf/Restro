import { ChefHat, Heart, Leaf } from 'lucide-react';
import Animated from '../components/Animated';
import { featuresData } from '../data/data';

const iconMap = { ChefHat, Leaf, Heart };

const Features = () => {
  return (
    <>
      <section id="features" className="px-auto mt-44">
        <div className="text-center mb-16">
          <Animated delay={0.2}>
            <p className="text-orange-500 font-medium uppercase mb-3.5">
              WHAT SETS US APART
            </p>
          </Animated>

          <Animated delay={0.2}>
            <h2 className="text-4xl md:text-5xl max-w-lg mx-auto text-balance">
              Crafting memorable dining experiences
            </h2>
          </Animated>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-14 max-w-7xl mx-auto">
          <div className="space-y-10 max-w-md">
            {featuresData.map((feature, i) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <Animated
                  key={i}
                  delay={i * 0.5}
                  y={150}
                  className="flex items-start text-left gap-4"
                >
                  {IconComponent && (
                    <IconComponent className="text-orange-500 size-5 shrink-0 mt-0.5" />
                  )}

                  <div>
                    <h3 className="text-xl mb-2">{feature.title}</h3>
                    <p className="text-zinc-600 max-w-sm">
                      {feature.description}
                    </p>
                  </div>
                </Animated>
              );
            })}
          </div>

          <Animated x={50} y={0}>
            <img
              src="../../public/assets/chef.png"
              alt="chef"
              className="w-full max-w-sm h-111 object-cover rounded-3xl"
            />
          </Animated>
        </div>
      </section>
    </>
  );
};

export default Features;
