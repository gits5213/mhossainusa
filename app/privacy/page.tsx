import { Shield } from "lucide-react";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="text-white" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-blue-100">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This portfolio website may collect information that you voluntarily
              provide when you contact us through the contact form, including
              your name, email address, and message content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use the information you provide solely to respond to your
              inquiries and communicate with you. We do not sell, trade, or
              otherwise transfer your personal information to third parties
              without your consent, except as described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate security measures to protect your personal
              information. However, no method of transmission over the Internet
              or electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Cookies and Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This website may use cookies to enhance user experience. You can
              choose to disable cookies through your browser settings, though this
              may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This website may contain links to third-party websites, including
              LinkedIn. We are not responsible for the privacy practices of these
              external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to access, update, or delete your personal
              information at any time. If you wish to exercise these rights,
              please contact us using the contact information provided on this
              website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update this privacy policy at any time. We
              will notify you of any changes by posting the new policy on this
              page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact
              us at{" "}
              <a
                href="mailto:mdmosarrafhossain1@gmail.com"
                className="text-blue-600 hover:text-blue-700"
              >
                mdmosarrafhossain1@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

