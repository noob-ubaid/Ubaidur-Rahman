import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image
        width={48}
        height={48}
        className="object-cover bg-center border-2 rounded-full hover:scale-90 duration-200 transition-all"
        src={"/avatar.png"}
        alt="Logo"
      />
    </Link>
  );
}
