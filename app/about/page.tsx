import { personalInfo, objective, experienceSummary } from "@/lib/data/personal";
import { education } from "@/lib/data/education";
import { GraduationCap, Target, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-blue-100">
            IT Automation & Monitoring Engineer/Project Manager with 13+ years of experience
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Objective */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">
              Professional Objective
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">{objective}</p>
        </section>

        {/* Education */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">
              {education.degree}
            </h3>
            <p className="text-lg text-gray-700">{education.institution}</p>
          </div>
        </section>

        {/* Experience Summary */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">
              Experience Summary
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experienceSummary.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Info */}
        <section className="bg-white rounded-lg shadow-md p-8 mt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Additional Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Work Status</h3>
              <p className="text-gray-700">{personalInfo.workStatus}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Relocation</h3>
              <p className="text-gray-700">{personalInfo.relocation}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700">{personalInfo.location}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-700">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </p>
              <p className="text-gray-700">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

