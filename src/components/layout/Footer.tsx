import { contactLines, footerColumns } from "@/data/footer";
import { site } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer className="border-t border-line-subtle bg-bg-secondary">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="text-body-lg mt-4 max-w-sm text-fg-secondary">
              {site.tagline}
            </p>
            <ul className="mt-5 space-y-2 text-body text-fg-muted">
              {contactLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          {footerColumns.map((column) => (
            <div key={column.id} className="lg:col-span-4">
              <p className="text-small mb-5 uppercase text-fg-muted">
                {column.title}
              </p>
              <ul className="space-y-3">
                {"links" in column
                  ? column.links.map((link) => (
                      <li key={link.id}>
                        <a
                          href={link.href}
                          className="text-body text-fg-secondary transition-colors duration-200 hover:text-accent"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))
                  : column.items.map((item) => (
                      <li key={item.id} className="text-body text-fg-secondary">
                        {item.label}
                      </li>
                    ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-line-subtle pt-6">
          <p className="text-small text-fg-muted">{site.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
