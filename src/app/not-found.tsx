import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-cream-100">
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-6">
          Page Not Found
        </h1>
        <p className="text-lg text-charcoal-700 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button href="/" variant="primary">
          Return to Home
        </Button>
      </div>
    </div>
  );
}