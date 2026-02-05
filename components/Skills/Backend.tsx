import { BadgeCheck } from "lucide-react";

export default function Backend() {
  return (
    <div className="relative bg-[color:var(--container-color)] border border-solid border-[color:var(--title-color)] border-opacity-10 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:-translate-y-1 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-[color:var(--title-color)] before:to-transparent before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
      <h3 className="text-[length:var(--normal-font-size)] font-medium text-center mb-6">
        Backend Developer
      </h3>

      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        {[
          { name: "Node.js", level: "Advanced" },
          { name: "Express.js", level: "Advanced" },
          { name: "MongoDB", level: "Advanced" },
          { name: "PostgreSQL", level: "Advanced" },
          { name: "Redis", level: "Intermediate" },
          { name: "REST APIs", level: "Advanced" },
          { name: "GraphQL", level: "Advanced" },
          { name: "AWS", level: "Intermediate" },
        ].map((skill, index) => (
          <div className="flex gap-2" key={index}>
            <BadgeCheck className="text-[color:var(--title-color)] min-w-[1rem]" size={18} />
            <div>
              <h3 className="font-medium text-[length:var(--normal-font-size)] leading-none mb-1">{skill.name}</h3>
              <span className="text-[length:var(--tiny-font-size)] text-[color:var(--text-color)]">{skill.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
