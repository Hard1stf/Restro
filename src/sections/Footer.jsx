import { Mail, Phone } from 'lucide-react';
import Animated from '../components/Animated';
import { quickLinks, sitemapLinks, socialLinks } from '../data/data';

const Footer = () => {
  return (
    <>
      <footer className="px-auto mt-44 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* row */}
          <div className="flex flex-wrap gap-6 justify-between pb-8">
            {/* Col-1: Brand and social */}
            <div className="flex flex-col items-start text-left">
              <Animated>
                <img src="../../public/assets/logo.svg" alt="logo" />
              </Animated>

              <Animated delay={0.2}>
                <p className="mt-3 text-sm/5.5 text-zinc-600 max-w-81.25">
                  Serving freshly prepared dishes with authentic flavors,
                  premium ingredients, and exceptional hospitality every day.
                </p>
              </Animated>

              <div className="flex items-center gap-1.5 mt-6">
                {socialLinks.map((link, i) => (
                  <Animated key={i} delay={1 * 0.05}>
                    <a
                      href={link.href}
                      className="size-7.5 rounded-full border border-slate-300 grid place-content-center"
                    >
                      {link.icon}
                    </a>
                  </Animated>
                ))}
              </div>
            </div>

            {/* Col-2: Quick link */}
            <div className="">
              <p className="font-medium mb-5">Quick Links</p>
              <div className="flex flex-col gap-2.5">
                {quickLinks.map((link, i) => (
                  <Animated key={link.name} delay={i * 0.05}>
                    <a
                      href={link.href}
                      className="text-zinc-600 hover:text-zinc-500"
                    >
                      {link.name}
                    </a>
                  </Animated>
                ))}
              </div>
            </div>

            {/* Col-3: Get in Touch */}
            <div>
              <p className="font-medium mb-5">Get in Touch</p>
              <div className="space-y-2">
                <Animated>
                  <a
                    href="mailto:hello@example.com"
                    className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500"
                  >
                    <Mail size={16} className="shrink-0" />
                    hello@example.com
                  </a>
                </Animated>

                <Animated delay={0.2}>
                  <a
                    href="tel:943-683-4687"
                    className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500"
                  >
                    <Phone size={16} className="shrink-0" />
                    943-683-4687
                  </a>
                </Animated>
              </div>
            </div>

            {/* Col-4: Sitemap */}
            <div>
              <p className="font-medium mb-5">Sitemap</p>
              <div className="flex flex-col gap-2.5">
                {sitemapLinks.map((link, i) => (
                  <Animated key={i} delay={i * 0.05}>
                    <a
                      href={link.href}
                      className="text-zinc-600 hover:text-zinc-500"
                    >
                      {link.name}
                    </a>
                  </Animated>
                ))}
              </div>
            </div>
          </div>

          {/* bottom bar */}
          <div className="border-t text-zinc-500 border-slate-200 py-4.5 flex justify-between items-center">
            <p>© 2026. All Right Reserved.</p>
            <p>
              Design & built by{' '}
              <a href="https://github.com/Hard1stf">Hardik Vijeta</a>
            </p>
          </div>
        </div>
        {/* Watermark logo backdrop */}
        <div className="absolute inset-0 text-center select-none -z-1 pointer-event-none">
          <span className="text-[300px] tracking-wide font-urbanist font-semibold text-zinc-300/50">
            Restro
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
