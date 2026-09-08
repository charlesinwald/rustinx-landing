import type { Metadata } from "next";
import { LegalArticle } from "../../components/LegalArticle";

export const metadata: Metadata = {
  title: "Copyright - Rustinx",
  description:
    "Copyright notice for the Rustinx website, branding, screenshots, and software.",
};

export default function CopyrightPage() {
  return (
    <LegalArticle title="Copyright">
      <p>
        © {new Date().getFullYear()} Charles Inwald. All rights reserved,
        except as otherwise noted on this page or in an accompanying software
        license.
      </p>

      <h2>Website content</h2>
      <p>
        The text, layout, original graphics, screenshots as presented on this
        website, and other original materials on the Rustinx site (the “Site”)
        are copyright Charles Inwald. You may view and share links to the Site
        for personal or informational use. Any other reproduction,
        redistribution, or derivative use requires prior written permission,
        except where applicable law (such as fair use) allows it.
      </p>

      <h2>Rustinx name and branding</h2>
      <p>
        “Rustinx” and the presentation of the Site branding are used by
        Charles Inwald to identify this project. You may refer to Rustinx by
        name in truthful commentary, reviews, or compatibility notes. You may
        not use the name or Site design in a way that suggests sponsorship,
        endorsement, or official affiliation without permission.
      </p>

      <h2>Software</h2>
      <p>
        Source code and release binaries for the Rustinx application are
        published at{" "}
        <a
          href="https://github.com/charlesinwald/rustinx-react/"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/charlesinwald/rustinx-react
        </a>
        . Copyright in that software is held by Charles Inwald and any listed
        contributors. Your rights to copy, modify, or distribute the software
        are only those granted by the license file (if any) in that repository
        or in a given release. If no license is specified, no additional
        permission is granted beyond viewing the public repository.
      </p>

      <h2>Demo video and screenshots</h2>
      <p>
        Product screenshots on the Site and the embedded demo video are
        provided to illustrate the software. They remain subject to copyright.
        Embedding or hotlinking Site assets, other than ordinary browser
        caching while visiting the Site, is not permitted without permission.
      </p>

      <h2>Third-party trademarks</h2>
      <p>
        Nginx is a trademark of its respective owner (including F5, Inc., as
        applicable). GitHub, YouTube, Mac, Linux, and other product or company
        names mentioned on the Site are trademarks of their respective owners.
        Use of those names is for identification only. Rustinx is an
        independent project and is not affiliated with, endorsed by, or
        sponsored by those trademark owners.
      </p>
      <p>
        Third-party software libraries used in Rustinx remain the property of
        their authors and are used under their own licenses, as indicated in
        the software repository.
      </p>

      <h2>Permission requests</h2>
      <p>
        For permission to reuse Site content beyond what is allowed above,
        contact Charles Inwald through{" "}
        <a
          href="https://charlesinwald.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          charlesinwald.com
        </a>
        . Please include the material you want to use and how you intend to
        use it.
      </p>

      <h2>Copyright complaints</h2>
      <p>
        If you believe material on the Site infringes your copyright, send a
        notice via{" "}
        <a
          href="https://charlesinwald.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          charlesinwald.com
        </a>{" "}
        with a description of the work, the URL of the allegedly infringing
        material, your contact information, and a statement that you have a
        good-faith belief the use is not authorized.
      </p>

      <h2>Related policies</h2>
      <p>
        See also the <a href="/privacy">Privacy Policy</a> and{" "}
        <a href="/terms">Terms &amp; Conditions</a>.
      </p>
    </LegalArticle>
  );
}
