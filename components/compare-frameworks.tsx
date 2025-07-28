"use client";


const comparisonData = [
  {
    label: "Components",
    React: "JSX + functional/class components",
    Vue: "Single File Components (.vue)",
    Next: "Built on React with custom _app and pages",
    Express: "Not component-based",
    Node: "Not component-based",
  },
  {
    label: "Router",
    React: "React Router",
    Vue: "Vue Router",
    Next: "File-based routing built-in",
    Express: "Express Router",
    Node: "Requires 3rd-party lib like Express",
  },
  {
    label: "State Management",
    React: "useState, useReducer, external (Redux, Zustand)",
    Vue: "Reactive refs, Vuex or Pinia",
    Next: "Same as React",
    Express: "Managed manually or via DB",
    Node: "Depends on framework used",
  },
  {
    label: "Hooks",
    React: "Built-in (useEffect, useMemo, etc.)",
    Vue: "Composition API + lifecycle hooks",
    Next: "Same as React",
    Express: "Not applicable",
    Node: "Not applicable",
  },
  {
    label: "Reactivity",
    React: "Virtual DOM + diffing",
    Vue: "Reactivity system + Virtual DOM",
    Next: "Inherits from React",
    Express: "Event-driven, but no reactivity",
    Node: "Non-blocking I/O, no UI reactivity",
  },
];

export default function CompareFrameworks() {
  return (
    <section className="px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
          Framework Comparison Table
        </h2>
        <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-md">
          <table className="min-w-[700px] w-full text-left text-sm text-gray-700">
            <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4">React</th>
                <th className="p-4">Vue</th>
                <th className="p-4">Next.js</th>
                <th className="p-4">Express.js</th>
                <th className="p-4">Node.js</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <th className="bg-gray-50 p-4 font-semibold text-gray-800">
                    {row.label}
                  </th>
                  <td className="p-4">{row.React}</td>
                  <td className="p-4">{row.Vue}</td>
                  <td className="p-4">{row.Next}</td>
                  <td className="p-4">{row.Express}</td>
                  <td className="p-4">{row.Node}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          Ready to explore further? Build a basic CRUD application using your
          preferred framework to gain practical experience and better understand
          its strengths, limitations, and developer ergonomics.
        </p>
      </div>
    </section>
  );
}
