import type { Metadata } from "next";
import { LegalArticle } from "../../components/LegalArticle";

export const metadata: Metadata = {
  title: "Privacy Policy - Rustinx",
  description:
    "Privacy policy for the Rustinx website, including hosting logs, cookies, and third-party services.",
};

export default function PrivacyPage() {
  return (
    <LegalArticle title="Privacy Policy">
      <p>
        This Privacy Policy describes how Charles Inwald (“we”, “us”, or “I”)
        handles information in connection with the Rustinx website (the
        “Site”). Rustinx is a free Nginx management dashboard. This policy
        covers the Site only, not data that stays on your own machines when you
        run the Rustinx application.
      </p>

      <h2>Who we are</h2>
      <p>
        The Site is operated by Charles Inwald. For questions about this
        policy, visit{" "}
        <a
          href="https://charlesinwald.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          charlesinwald.com
        </a>
        .
      </p>

      <h2>Information we collect</h2>
      <p>
        The Site does not require an account, and it does not include contact
        forms, newsletters, or other fields where you submit personal
        information to us.
      </p>
      <p>We may still process limited technical information as follows:</p>
      <ul>
        <li>
          <strong className="text-[#ebdbb2]">Hosting and server logs.</strong>{" "}
          The Site is hosted on infrastructure that typically records request
          data such as IP address, browser type, referring URL, pages requested,
          and timestamps. This is used to operate, secure, and debug the Site.
        </li>
        <li>
          <strong className="text-[#ebdbb2]">
            Information you choose to send.
          </strong>{" "}
          If you email or otherwise contact us, we will receive whatever you
          include in that message.
        </li>
      </ul>

      <h2>Cookies and similar technologies</h2>
      <p>
        We do not set first-party advertising or analytics cookies on the Site.
        Your browser may still store cookies or similar data from third-party
        content embedded on the Site, as described below.
      </p>

      <h2>Third-party services</h2>
      <p>The Site links to or embeds third-party services, including:</p>
      <ul>
        <li>
          <strong className="text-[#ebdbb2]">YouTube.</strong> The demo section
          embeds a YouTube video. Google/YouTube may collect information about
          your visit according to their own policies. See{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google’s Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong className="text-[#ebdbb2]">GitHub.</strong> Download and
          source links go to GitHub. GitHub may collect information if you visit
          those pages. See{" "}
          <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub’s Privacy Statement
          </a>
          .
        </li>
        <li>
          <strong className="text-[#ebdbb2]">Hosting provider.</strong> Our host
          may process technical logs and related data as needed to deliver the
          Site.
        </li>
      </ul>
      <p>
        We do not control these third parties. Their collection and use of
        information is governed by their own terms and privacy policies.
      </p>

      <h2>The Rustinx application</h2>
      <p>
        The Rustinx desktop/server application is designed to run on systems
        you control. This Site does not receive Nginx logs, configuration, or
        performance data from installations of the application. How you
        configure, expose, or operate the application on your own machines is
        your responsibility.
      </p>

      <h2>How we use information</h2>
      <p>Technical and contact information may be used to:</p>
      <ul>
        <li>operate, maintain, and improve the Site;</li>
        <li>diagnose errors and protect against abuse;</li>
        <li>respond if you contact us;</li>
        <li>comply with law or enforce our{" "}
          <a href="/terms">Terms &amp; Conditions</a>.
        </li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We do not sell your personal information. We may share information with
        service providers who help host or operate the Site, or if required by
        law, to protect rights and safety, or in connection with a
        reorganization of this project.
      </p>

      <h2>Retention</h2>
      <p>
        Hosting logs are retained only as long as needed for the purposes above
        or as required by our hosting provider. Correspondence is retained as
        long as reasonably needed to respond and keep a record of the
        conversation.
      </p>

      <h2>Your choices and rights</h2>
      <p>
        Depending on where you live, you may have rights to request access,
        correction, or deletion of personal information we hold about you, or
        to object to certain processing. To make a request, contact us through{" "}
        <a
          href="https://charlesinwald.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          charlesinwald.com
        </a>
        . You can also control cookies and embedded content through your
        browser settings.
      </p>

      <h2>Children</h2>
      <p>
        The Site is not directed at children under 13, and we do not knowingly
        collect personal information from them.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy from time to time. The “Last updated” date at
        the top of this page will change when we do. Continued use of the Site
        after an update means you accept the revised policy.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this Privacy Policy can be sent via{" "}
        <a
          href="https://charlesinwald.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          charlesinwald.com
        </a>
        .
      </p>
    </LegalArticle>
  );
}
