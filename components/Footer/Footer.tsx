import { Instagram, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[color:var(--container-color)] border-t border-[color:var(--title-color)] border-opacity-10">
      <div className="container py-12">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-[length:var(--h1-font-size)] text-[color:var(--title-color)] font-semibold mb-0">
            Arun
          </h1>

          <ul className="flex flex-wrap justify-center gap-8 mb-8">
            <li>
              <a
                href="#about"
                className="text-[color:var(--title-color)] hover:text-[color:var(--title-color-dark)] transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-[color:var(--title-color)] hover:text-[color:var(--title-color-dark)] transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-[color:var(--title-color)] hover:text-[color:var(--title-color-dark)] transition-colors duration-300"
              >
                Services
              </a>
            </li>
          </ul>

          <div className="flex gap-5 justify-center mb-8">
            <a
              href="https://www.instagram.com"
              className="text-[color:var(--title-color)] hover:text-[color:var(--title-color-dark)] transition-all duration-300 hover:-translate-y-1"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://twitter.com"
              className="text-[color:var(--title-color)] hover:text-[color:var(--title-color-dark)] transition-all duration-300 hover:-translate-y-1"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>

            <a
              href="https://github.com"
              className="text-[color:var(--title-color)] hover:text-[color:var(--title-color-dark)] transition-all duration-300 hover:-translate-y-1"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          <span className="block text-[length:var(--smaller-font-size)] text-center text-[color:var(--text-color)]">
            &#169; Arun Upadhyay. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
