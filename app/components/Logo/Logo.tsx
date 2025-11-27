import { Lora } from "next/font/google";
import Link from "next/link";

const lora = Lora({ subsets: ["latin"], weight: "700" }); 

export default function Logo() {
    const name = "<Ubaidur/>"
  return (
    <Link href={'/'} className={`${lora.className} text-3xl italic font-bold`}>
      {name}
    </Link>
  );
}
