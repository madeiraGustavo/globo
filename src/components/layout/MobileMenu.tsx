"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { motionDurations, motionEase } from "@/lib/motion";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col bg-bg px-5 pt-[calc(var(--header-offset)+1.5rem)] pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] lg:hidden"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: motionDurations.normal, ease: motionEase }}
          id="mobile-navigation"
        >
          <nav aria-label="Navegação móvel" className="flex flex-1 flex-col">
            <ul className="flex flex-col gap-2">
              {navigation.map((item, index) => (
                <li key={item.id}>
                  <motion.a
                    href={item.href}
                    onClick={onClose}
                    className="flex min-h-14 items-center border-b border-line-subtle text-2xl text-fg"
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: reduceMotion ? 0 : 0.04 * index,
                      duration: motionDurations.normal,
                      ease: motionEase,
                    }}
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <Button href={site.cta.primary.href} className="w-full">
                {site.cta.primary.label}
              </Button>
            </div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
