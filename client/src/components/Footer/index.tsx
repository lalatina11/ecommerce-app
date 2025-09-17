import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";

const Footer = () => {
  return (
    <Card className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-background p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="iShop" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            iShop
          </p>
        </Link>
        <p className="text-sm text-muted-foreground">© 2025 iShop</p>
        <p className="text-sm text-muted-foreground">All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-muted-foreground items-center md:items-start">
        <p className="text-sm text-foreground font-semibold">Pages</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-muted-foreground items-center md:items-start">
        <p className="text-sm text-foreground font-semibold">Products</p>
        <Link href="/">All Products</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Best Sellers</Link>
        <Link href="/">Sale</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-muted-foreground items-center md:items-start">
        <p className="text-sm text-foreground font-semibold">Extra</p>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Affiliate Program</Link>
      </div>
    </Card>
  );
};

export default Footer;
