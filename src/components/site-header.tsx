import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MainNav } from "./main-nav";
import { Spacer } from "./spacer";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="border-border sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <div>
            <Link href="/">
              <Image
                src="/integrated-logo-bg-light.png"
                alt="Cerebulb integrated logo"
                width={100}
                height={40}
                priority
              />
            </Link>
          </div>
          <Spacer />
          <MainNav />

          <div className="flex items-center gap-4">
            {/* <Button variant="outline" asChild>
              <Link href="/contact-us">Contact us</Link>
            </Button> */}
            <Button variant="secondary" asChild>
              <Link href="/find-a-job">Find a Job</Link>
            </Button>
            <Button asChild>
              <Link href="/hire-a-talent">Hire a Talent</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
