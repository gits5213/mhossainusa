import { certifications } from "@/lib/data/certifications";
import { Award, ExternalLink } from "lucide-react";
import { personalInfo } from "@/lib/data/personal";

export default function Certifications() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Award className="text-white" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Certifications
            </h1>
          </div>
          <p className="text-xl text-blue-100">
            Professional certifications and achievements
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {certifications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <Award className="text-blue-600" size={32} />
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                {cert.issuer && (
                  <p className="text-gray-600 mb-2">Issued by: {cert.issuer}</p>
                )}
                {cert.issueDate && (
                  <p className="text-sm text-gray-500">
                    Issued: {new Date(cert.issueDate).toLocaleDateString()}
                  </p>
                )}
                {cert.expiryDate && (
                  <p className="text-sm text-gray-500">
                    Expires: {new Date(cert.expiryDate).toLocaleDateString()}
                  </p>
                )}
                {cert.credentialId && (
                  <p className="text-sm text-gray-500 mt-2">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Award className="mx-auto text-gray-400 mb-4" size={64} />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Certifications Coming Soon
            </h2>
            <p className="text-gray-600 mb-6">
              Certifications are being fetched from LinkedIn. Please check back
              soon or visit my LinkedIn profile for the latest certifications.
            </p>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View LinkedIn Profile
              <ExternalLink size={20} />
            </a>
          </div>
        )}
      </div>
    </main>
  );
}

