import { SkillCategory } from "@/lib/data/skills";

interface SkillsGridProps {
  skills: SkillCategory[];
}

export default function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <div className="space-y-8">
      {skills.map((category, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            {category.category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {category.items.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-blue-50 text-blue-900 rounded-lg font-medium hover:bg-blue-100 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

