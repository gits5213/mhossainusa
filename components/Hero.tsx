import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/data/personal";
import Link from "next/link";
import { getImagePath } from "@/lib/utils/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-8">
              {personalInfo.title}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8">
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Phone size={20} />
                <span>{personalInfo.phone}</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Mail size={20} />
                <span>{personalInfo.email}</span>
              </a>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin size={20} />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                <Mail size={20} />
                <span>Contact Me</span>
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-600">
              <p>{personalInfo.workStatus} • {personalInfo.relocation}</p>
            </div>
          </div>
          
          {/* Logo Image on Right Side */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src={getImagePath("/mosarraf.png")}
                alt="MD MOSARRAF HOSSAIN"
                fill
                className="rounded-full object-cover shadow-2xl border-4 border-white"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

