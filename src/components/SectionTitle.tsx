interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className="text-charcoal-900">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-charcoal-700 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}