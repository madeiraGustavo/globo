"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Navbar } from "@/components/layout/Navbar";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/cn";

export function Header() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-20 transition-[background-color,border-color,backdrop-filter] duration-300 ease-premium",
        scrolled || open
          ? "border-b border-line-subtle bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-full items-center justify-between gap-6">
        <Logo />
        <Navbar />
        <div className="hidden lg:block">
          <Button href={site.cta.primary.href} variant="primary">
            {site.cta.primary.label}
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-fg lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
