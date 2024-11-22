import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Link } from "@/i18n/routing";

interface Props {
  className?: string;
}

export const Logo = ({ className }: Props) => {
  return (
    <Link href={'/'} className={cn("h-full w-auto", className)}>
      <Image
        quality={100}
        src="/svg/logo/babysun-logo.svg"
        width={1000}
        height={1000}
        alt="Baby Sun Logo"
        className="h-[40px] w-auto"
      />
    </Link>
  );
};
