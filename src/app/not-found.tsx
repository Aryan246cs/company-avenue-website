import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-heading font-bold text-primary/10 mb-4">404</p>
        <h1 className="heading-md text-dark mb-4">Page Not Found</h1>
        <p className="text-muted text-base mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/" variant="primary" size="lg">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
