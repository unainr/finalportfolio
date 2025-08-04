import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/icon0.svg" // or your public path
        alt="UNAIN Logo"
        width={120}
        height={40}
        priority
      />
    </Link>
  );
};

export default Logo;
