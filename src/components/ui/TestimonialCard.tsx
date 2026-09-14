import { Card } from "@/components/ui/Card";
import type { TestimonialItem } from "@/types/content";

type TestimonialCardProps = {
  item: TestimonialItem;
};

export function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between">
      <blockquote className="text-body-lg text-fg">
        “{item.quote}”
      </blockquote>
      <footer className="mt-5">
        <p className="font-medium text-fg">{item.name}</p>
        <p className="text-small mt-1 uppercase text-fg-muted">
          {item.role} · {item.company}
        </p>
      </footer>
    </Card>
  );
}
