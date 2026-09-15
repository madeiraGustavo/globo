import { navigation } from "@/data/navigation";

export function Navbar() {
  return (
    <nav aria-label="Principal" className="hidden items-center gap-8 xl:flex">
      {navigation.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="text-sm text-fg-secondary transition-colors duration-200 hover:text-fg"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
