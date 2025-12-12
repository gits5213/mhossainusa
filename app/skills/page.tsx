import { skills } from "@/lib/data/skills";
import SkillsGrid from "@/components/SkillsGrid";
import { Code } from "lucide-react";

export default function Skills() {
  const totalSkills = skills.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Code className="text-white" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Technical Skills
            </h1>
          </div>
          <p className="text-xl text-blue-100">
            {totalSkills} skills across {skills.length} categories
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SkillsGrid skills={skills} />
      </div>
    </main>
  );
}

