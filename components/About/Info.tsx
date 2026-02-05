import { Award, Briefcase, Headphones } from "lucide-react";

const items = [
  { icon: Award, title: "Experience", value: "3+ Years Working" },
  { icon: Briefcase, title: "Completed", value: "20+ Projects" },
  { icon: Headphones, title: "Support", value: "24/7 Available" },
];

export default function Info() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {items.map(({ icon: Icon, title, value }) => (
        <div
          key={title}
          className="rounded-2xl border border-black/10 bg-(--container-color) p-5 text-center transition hover:-translate-y-1 hover:shadow-lg"
        >
          <Icon className="mx-auto mb-2 text-(--title-color)" size={22} />
          <h3 className="text-sm font-medium">{title}</h3>
          <p className="mt-1 text-xs text-(--text-color)">{value}</p>
        </div>
      ))}
    </div>
  );
}
