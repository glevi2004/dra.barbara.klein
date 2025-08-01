import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
}

export default function ServiceCard({
  title,
  description,
  slug,
}: ServiceCardProps) {
  return (
    <Link href={`/servicos/${slug}`}>
      <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
          <div className="mt-4">
            <span className="text-primary font-semibold text-sm hover:underline">
              Saiba mais →
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
