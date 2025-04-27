import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "I have been working with yohatech engineers for several years now. They have all been exceptionally talented, very professional, highly productive, great team players, good communicators, and willing to go above and beyond.",
    author: "Ian Stokes-Rees",
    role: "Partner",
    company: "BCG Digital Ventures",
    rating: 5
  },
  {
    quote: "yohatech is my go-to source to find high-quality talent I can't find elsewhere. I've been very impressed with the breadth and depth of talent they have been able to deliver.",
    author: "Tess Caputo",
    role: "Chief Operations Officer",
    company: "Zoetis",
    rating: 5
  },
  {
    quote: "With the pressure on and millions watching, yohatech delivered the talent and expertise needed to launch a brand-new fan engagement platform.",
    author: "Conor Kenney",
    role: "VP, Product and Technology",
    company: "Cleveland Cavaliers",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#091837] via-[#1B78B1]/10 to-[#091837]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-[#74DBFD] text-transparent bg-clip-text mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#74DBFD]/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about working with our experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-[#1E2C37]/30 p-6 rounded-2xl border border-[#74DBFD]/10 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-[#74DBFD]/10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#74DBFD] fill-[#74DBFD]" />
                ))}
              </div>
              
              <blockquote className="text-white/90 mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="mt-auto">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-[#74DBFD] text-sm">{testimonial.role}</p>
                <p className="text-[#74DBFD]/70 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;