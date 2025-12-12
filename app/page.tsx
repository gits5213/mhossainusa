import Hero from "@/components/Hero";
import { personalInfo, objective, experienceSummary } from "@/lib/data/personal";
import { experiences } from "@/lib/data/experience";
import { skills } from "@/lib/data/skills";
import Link from "next/link";
import { ArrowRight, Briefcase, Code, Award } from "lucide-react";

export default function Home() {
  const currentExperience = experiences.find((exp) => exp.isCurrent);
  const topSkills = skills.slice(0, 3);

  return (
    <main>
      <Hero />

      {/* Objective Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Professional Objective
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {objective}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">13+</div>
              <div className="text-gray-700 font-medium">Years of Experience</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                9
              </div>
              <div className="text-gray-700 font-medium">Companies</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {skills.reduce((acc, cat) => acc + cat.items.length, 0)}
              </div>
              <div className="text-gray-700 font-medium">Technical Skills</div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Role Highlight */}
      {currentExperience && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase size={32} />
                <h2 className="text-3xl font-bold">Current Position</h2>
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                {currentExperience.role}
              </h3>
              <p className="text-xl mb-4">{currentExperience.company}</p>
              {currentExperience.account && (
                <p className="text-blue-100 mb-6">{currentExperience.account}</p>
              )}
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                View Full Experience
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Skills Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Code size={48} className="mx-auto text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-gray-600">
              Proficient in a wide range of testing tools and technologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {topSkills.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.slice(0, 5).map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1 bg-blue-50 text-blue-900 rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                  {category.items.length > 5 && (
                    <span className="px-3 py-1 text-gray-500 text-sm">
                      +{category.items.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View All Skills
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Briefcase size={48} className="mx-auto text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Experience Summary
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4">
              {experienceSummary.slice(0, 6).map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Learn More About Me
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award size={48} className="mx-auto text-white mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects. Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white rounded-lg hover:bg-blue-950 transition-colors font-medium text-lg"
            >
              View LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
