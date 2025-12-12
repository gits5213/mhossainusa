import { experiences } from "@/lib/data/experience";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Briefcase className="text-white" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Professional Experience
            </h1>
          </div>
          <p className="text-xl text-blue-100">
            {experiences.length} years of diverse experience in Software Quality
            Assurance and Testing
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ExperienceTimeline experiences={experiences} />
      </div>
    </main>
  );
}

