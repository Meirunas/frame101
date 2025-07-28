import Accordion from "@/components/accordion";

export default function Faqs() {
  const faqs = [
    {
      question:
        "What’s the difference between frontend and backend development?",
      answer:
        "Frontend development involves everything users see and interact with in a browser—HTML, CSS, and JavaScript frameworks like React or Vue. Backend development manages server-side logic, APIs, authentication, and databases using technologies such as Node.js, Express, or Python.",
      active: true,
    },
    {
      question: "Which frontend framework should I learn first?",
      answer:
        "React is a strong first choice due to its demand in the job market and component-based design. Vue is also a great option—especially for beginners—because of its simplicity and rapid learning curve. Frame101 helps you explore both.",
    },
    {
      question: "What is Express.js used for in backend development?",
      answer:
        "Express is a minimalist web framework for Node.js. It streamlines the process of building APIs, handling routes, and integrating middleware. It's ideal for scalable backend apps and RESTful services.",
    },
    {
      question: "Should I learn both frontend and backend?",
      answer:
        "If you're aiming to become a full-stack developer, yes. But it's fine to start with one. Frontend suits those who enjoy UI/UX, while backend fits problem-solvers who enjoy logic, data, and infrastructure.",
    },
    {
      question: "How do frontend and backend communicate?",
      answer:
        "Typically through HTTP requests and APIs. Frontend apps make API calls to the backend, which processes the request and returns data—usually in JSON format. REST and GraphQL are common methods.",
    },
    {
      question: "Why is Next.js popular among developers?",
      answer:
        "Next.js builds on React by adding features like file-based routing, server-side rendering (SSR), static site generation (SSG), and backend API routes—all in one framework. It’s ideal for modern full-stack apps.",
    },
    {
      question: "Which database is best for beginners?",
      answer:
        "MongoDB is beginner-friendly and pairs well with JavaScript and Node.js. It uses a flexible, JSON-like format that's easy to learn. For relational data, PostgreSQL is another great option.",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  title={faq.question}
                  id={`faqs-${index}`}
                  active={faq.active}
                >
                  {faq.answer}
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
