import Animated from '../components/Animated';

const About = () => {
  return (
    <>
      <section id="about" className="px-auto mt-44">
        <div className="flex flex-col md:flex-row gap-14 md:gap-18 max-w-7xl mx-auto">
          {/* Left side: Image */}
          <Animated scale={0.8} y={0}>
            <img
              src="../../public/assets/about.png"
              alt="Dish"
              className="max-w-137 w-full h-full object-cover rounded-3xl"
            />
          </Animated>

          {/* Right side: Text content */}
          <div>
            <Animated scale={0.8} y={0} className="flex items-center gap-2">
              <img src="../../public/assets/iconL.png" alt="iconL" />
              <span className="font-medium uppercase">
                CRAFTED WITH PASSION
              </span>
              <img src="../../public/assets/iconR.png" alt="iconR" />
            </Animated>

            <Animated>
              <h2 className="mt-5 text-4xl md:text-5xl text-balance">
                Experience dining beyond expectations
              </h2>
            </Animated>

            <Animated delay={0.2}>
              <p className='text-zinc-500 max-w-sm mt-4.5'>
                We combine fresh local ingredients, creative recipes and elegant presentation to deliver a memorable experience with every visit.
              </p>
            </Animated>

            <Animated className="mt-9 bg-orange-500 text-white p-2 pr-8 rounded-lg flex items-center gap-3 w-fit">
                <img src="../../public/assets/about.png" alt="Bistro Royal Location Preview" className='rounded-lg shrink-0 object-cover size-15'/>
                <div className='flex flex-col gap-2'>
                    <p className='font-medium'>Bistro Royal, NY</p>
                    <a href="#">View on map</a>
                </div>
            </Animated>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
