import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How does the expert verification process work?",
    answer: "Our verification process includes thorough background checks, skill assessments, and portfolio reviews. We verify work history, check references, and ensure all experts meet our high standards of expertise and professionalism."
  },
  {
    question: "What are the payment terms and conditions?",
    answer: "We offer flexible payment options including hourly rates and project-based pricing. Payments are securely processed through our platform, with funds held in escrow until project milestones are completed and approved."
  },
  {
    question: "How do you ensure quality of service?",
    answer: "We maintain quality through our rigorous selection process, continuous performance monitoring, and client feedback system. All experts are required to maintain a high satisfaction rating to remain active on our platform."
  },
  {
    question: "Can I hire experts for long-term projects?",
    answer: "Yes, many of our experts are available for long-term engagements. You can discuss project duration and commitment details directly with experts during the initial consultation."
  },
  {
    question: "What happens if I'm not satisfied with the service?",
    answer: "We offer a satisfaction guarantee. If you're not satisfied with the service, we'll work with you to resolve any issues or match you with a different expert. Our support team is available 24/7 to help."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#091837] via-[#1B78B1]/5 to-[#091837]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-[#74DBFD] text-transparent bg-clip-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#74DBFD]/80 max-w-2xl mx-auto">
            Find answers to common questions about our platform and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-[#1E2C37]/30 rounded-2xl border border-[#74DBFD]/10 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#74DBFD]/5"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                <span className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-[#74DBFD]" />
                  ) : (
                    <Plus className="h-5 w-5 text-[#74DBFD]" />
                  )}
                </span>
              </button>
              
              <div
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-[#74DBFD]/80">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;