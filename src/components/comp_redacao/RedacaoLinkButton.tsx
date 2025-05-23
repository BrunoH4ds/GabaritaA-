import Link from "next/link";

interface RedacaoLinkButtonProps {
  href: string;
  title: string;
  description: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
}

export default function RedacaoLinkButton({
  href,
  title,
  description,
  bgColor = "bg-white dark:bg-gray-800",
  borderColor = "border-blue-600 dark:border-yellow-400",
  textColor = "text-gray-900 dark:text-gray-100",
}: RedacaoLinkButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-4 rounded-md shadow-md border ${bgColor} ${borderColor} hover:opacity-90 transition`}
    >
      <div className={`${textColor}`}>
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
}
