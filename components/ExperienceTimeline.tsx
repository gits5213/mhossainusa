import { Experience } from "@/lib/data/experience";
import { Calendar, MapPin, Building2 } from "lucide-react";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div
          key={exp.id}
          className="relative pl-8 pb-8 border-l-2 border-blue-200 last:border-l-0 last:pb-0"
        >
          {/* Timeline dot */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-lg text-gray-700 mb-2">
                  <Building2 size={18} />
                  <span className="font-semibold">{exp.company}</span>
                </div>
                {exp.account && (
                  <p className="text-gray-600 mb-2">{exp.account}</p>
                )}
              </div>
              <div className="flex flex-col gap-2 text-sm text-gray-600 mt-2 md:mt-0">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 mb-3">
                Key Responsibilities:
              </h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-600 mt-1.5">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {exp.environment && exp.environment.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Environment:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.environment.map((env, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                    >
                      {env}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

