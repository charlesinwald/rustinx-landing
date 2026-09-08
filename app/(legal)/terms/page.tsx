import type { Metadata } from "next";
import { LegalArticle } from "../../components/LegalArticle";

export const metadata: Metadata = {
  title: "Terms & Conditions - Rustinx",
  description:
    "Terms and conditions for using the Rustinx website and related software.",
};

export default function TermsPage() {
  return (
    <LegalArticle title="Terms & Conditions">
      <p>
        These Terms &amp; Conditions (“Terms”) govern your access to and use of
        the Rustinx website (the “Site”), operated by Charles Inwald (“we”,
        “us”, or “I”). By using the Site, you agree to these Terms. If you do
        not agree, do not use the Site.
      </p>

      <h2>The Site</h2>
      <p>
        The Site provides information about Rustinx, a Nginx management
        dashboard, including feature descriptions, screenshots, a demo video,
        and links to download or view source code. The Site is offered for
        general informational purposes.
      </p>

      <h2>The software</h2>
      <p>
        Rustinx software is distributed separately, including through{" "}
        <a
          href="https://github.com/charlesinwald/rustinx-react/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        . Use of the software is subject to any license that accompanies the
        source code or release artifacts in that repository. These Terms cover
        the Site; they do not replace that software license.
      </p>
      <p>
        The software can start, stop, and reconfigure Nginx and related
        services. You are solely responsible for how you install, configure,
        expose, and operate it, including access control, backups, and any
        impact on production systems.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the Site in any way that violates applicable law;</li>
        <li>
          attempt to interfere with, probe, or disrupt the Site or its hosting
          infrastructure;
        </li>
        <li>
          scrape or copy the Site in a manner that imposes an unreasonable load
          or circumvents access controls;
        </li>
        <li>
          misrepresent an affiliation with Rustinx or Charles Inwald, or
          suggest that Nginx, F5, or any other third party endorses this
          project.
        </li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        Unless otherwise noted, the Site’s text, layout, graphics, and other
        original content are owned by Charles Inwald and are protected by
        copyright and other laws. See our{" "}
        <a href="/copyright">Copyright</a> notice for details, including
        third-party trademarks and the software repository.
      </p>
      <p>
        You may share links to the Site. You may not copy, modify, or
        redistribute Site content except as allowed by law (such as fair use)
        or with prior written permission.
      </p>

      <h2>Third-party content and links</h2>
      <p>
        The Site includes a YouTube embed and links to GitHub and other
        external sites. Those services are not under our control. We are not
        responsible for their content, availability, or practices. Your use of
        them is governed by their own terms.
      </p>

      <h2>No affiliation</h2>
      <p>
        Rustinx is an independent project. It is not affiliated with, endorsed
        by, or sponsored by Nginx, F5, Inc., or any other Nginx trademark
        owner. “Nginx” and related marks are trademarks of their respective
        owners.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        THE SITE AND ALL RELATED INFORMATION ARE PROVIDED “AS IS” AND “AS
        AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED,
        OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
        FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. We do not
        warrant that the Site will be uninterrupted, error-free, or secure, or
        that descriptions of the software are complete or current.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, CHARLES INWALD WILL NOT BE
        LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
        PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR BUSINESS, ARISING
        OUT OF OR RELATED TO YOUR USE OF THE SITE OR THE RUSTINX SOFTWARE,
        EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. Our total liability
        for any claim relating to the Site will not exceed USD $50.
      </p>
      <p>
        Some jurisdictions do not allow certain limitations. In those places,
        the above limits apply only to the extent permitted.
      </p>

      <h2>Indemnity</h2>
      <p>
        You agree to defend and hold Charles Inwald harmless from claims,
        damages, and expenses (including reasonable attorneys’ fees) arising
        from your misuse of the Site or your operation of the Rustinx
        software, including any Nginx configuration or service changes you
        make.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these Terms from time to time. The “Last updated” date at
        the top of this page will change when we do. Continued use of the Site
        after an update constitutes acceptance of the revised Terms.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws applicable to Charles Inwald’s
        operation of the Site, without regard to conflict-of-law rules. Courts
        with jurisdiction over those matters will have exclusive venue for
        disputes that cannot be resolved informally, except where prohibited by
        law.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms can be sent via{" "}
        <a
          href="https://charlesinwald.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          charlesinwald.com
        </a>
        . Related policies:{" "}
        <a href="/privacy">Privacy Policy</a> and{" "}
        <a href="/copyright">Copyright</a>.
      </p>
    </LegalArticle>
  );
}
