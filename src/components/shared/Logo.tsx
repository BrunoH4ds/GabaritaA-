import Image from "next/image";
import Link from "next/link";

export interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({
  width = 85,
  height = 0,
}: LogoProps) {
  return (
    <Link href="/">
      <div className="flex w-auto items-center">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={width}
          height={height}
          draggable={false}
        />
      </div>
    </Link>
  );
}
