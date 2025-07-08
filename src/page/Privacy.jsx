import React from "react";

function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black px-6 py-12 text-green-300 font-[Poppins]">
      <div className="max-w-4xl mx-auto bg-zinc-900 p-8 rounded-xl border border-green-700/30 shadow shadow-lime-400/10 space-y-6">
        <h1 className="text-4xl font-extrabold text-lime-400 mb-6 text-center">
          Privacy Policy — ZYRA
        </h1>

        <p className="text-green-400 text-sm italic text-center mb-6">
          Effective Date: 5 July 2025
        </p>

        <div className="space-y-6 text-green-300 text-md leading-7">
          <p>
            Welcome to <strong>ZYRA</strong> (we, our, us). We are
            committed to protecting your personal data and privacy as per the
            <strong>
              {" "}
              Digital Personal Data Protection Act, 2023 (India)
            </strong>{" "}
            and IT Act, 2000 (Section 43A).
          </p>

          <h2 className="text-lg text-lime-400 font-bold">
            1. What We Collect
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Email, username, and password (hashed securely)</li>
            <li>User-generated content like posts, titles, and comments</li>
            <li>Device, IP address, browser type, and analytics metadata</li>
            <li>
              Contact information shared via forms (e.g., contact or feedback)
            </li>
          </ul>

          <h2 className="text-lg text-lime-400 font-bold">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To register and authenticate your account securely</li>
            <li>To personalize your feed and interactions</li>
            <li>To communicate updates, news, or platform changes</li>
            <li>
              To comply with legal obligations or protect platform security
            </li>
          </ul>

          <h2 className="text-lg text-lime-400 font-bold">3. Data Sharing</h2>
          <p>
            We do <strong>not</strong> sell, rent, or trade your data. We may
            share information:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>With legal or regulatory authorities upon lawful request</li>
            <li>
              With service providers bound by confidentiality (e.g., hosting or
              analytics)
            </li>
          </ul>

          <h2 className="text-lg text-lime-400 font-bold">
            4. Your Rights (as per Indian Law)
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Right to access and confirm personal data</li>
            <li>
              Right to correction and erasure (except for legal retention)
            </li>
            <li>Right to withdraw consent</li>
            <li>
              Right to grievance redressal via our Data Protection Officer
            </li>
          </ul>

          <h2 className="text-lg text-lime-400 font-bold">5. Data Security</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              We use encryption, hashed passwords, and access controls to
              protect your data
            </li>
            <li>Regular security audits and token-based authentication</li>
          </ul>

          <h2 className="text-lg text-lime-400 font-bold">6. Data Retention</h2>
          <p>
            We retain your data only as long as necessary for service or
            compliance. Upon deletion request, data is removed within 30 days.
          </p>

          <h2 className="text-lg text-lime-400 font-bold">
            7. Children's Privacy
          </h2>
          <p>
            ZYRA is not intended for individuals under 13 years. We do not
            knowingly collect data from minors.
          </p>

          <h2 className="text-lg text-lime-400 font-bold">
            8. International Users
          </h2>
          <p>
            We operate under Indian jurisdiction. Users outside India agree to
            data transfer and handling as per Indian laws.
          </p>

          <h2 className="text-lg text-lime-400 font-bold">9. Policy Updates</h2>
          <p>
            We may update this policy. Changes will be posted with a revised
            “Effective Date.” Users are encouraged to review periodically.
          </p>

          <h2 className="text-lg text-lime-400 font-bold">
            10. Terms and Community Guidelines
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Do not post abusive, defamatory, or hate content</li>
            <li>Do not impersonate, spam, or exploit vulnerabilities</li>
            <li>Respect intellectual property and content ownership</li>
            <li>
              ZYRA reserves the right to remove any content violating our values
              or laws
            </li>
          </ul>

          <h2 className="text-lg text-lime-400 font-bold">
            11. Contact & Grievance Redressal
          </h2>
          <p>
            If you have concerns, you may contact our Data Protection Officer
            (DPO):
          </p>
          <ul className="list-inside text-white list-disc">
            <li>Name: Mr. Gopal Kumar Burman</li>
            <li>Email: burmangopalkumar@gmail.com</li>
            <li>Phone: +91-8617269956</li>
          </ul>

          <p className="text-center text-green-500 mt-10 italic">
            Thank you for trusting ZYRA — create. connect. chronical.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
