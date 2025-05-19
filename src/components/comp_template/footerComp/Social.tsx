import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram } from "@tabler/icons-react";
import Link from "next/link";

export default function Social() {
  return (
    <div className="flex gap-5 justify-center">
      {/* Instagram */}
      <Link
        href="https://www.instagram.com/bruno_h4ds"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="bg-white/10 border border-white/20 p-2 rounded-md text-white hover:bg-yellow-300 hover:text-blue-900 transition-colors"
      >
        <IconBrandInstagram size={36} />
      </Link>

      {/* Facebook */}
      <Link
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="bg-white/10 border border-white/20 p-2 rounded-md text-white hover:bg-yellow-300 hover:text-blue-900 transition-colors"
      >
        <IconBrandFacebook size={36} />
      </Link>
      
      {/* Github */}
      <Link
        href="https://github.com/BrunoH4ds"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github"
        className="bg-white/10 border border-white/20 p-2 rounded-md text-white hover:bg-yellow-300 hover:text-blue-900 transition-colors"
      >
        <IconBrandGithub size={36} />
      </Link>
    </div>
  );
}
