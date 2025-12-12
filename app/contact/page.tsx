import ContactForm from "@/components/ContactForm";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Mail className="text-white" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Contact Me
            </h1>
          </div>
          <p className="text-xl text-blue-100">
            Let's connect and discuss opportunities
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ContactForm />
      </div>
    </main>
  );
}

