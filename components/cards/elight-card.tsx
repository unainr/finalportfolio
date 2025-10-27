
import * as React from "react";
import { Project } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
interface EliteProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project;
}

export const EliteProjectCard = React.forwardRef<
  HTMLDivElement,
  EliteProjectCardProps
>(({ className, project, ...props }, ref) => {
  const { name, description, images, projectLink } = project;

  return (
    <div
      ref={ref}
      className={cn(
        // Make sure card height is consistent
        "relative flex flex-col justify-between w-full max-w-sm overflow-hidden rounded-3xl   transition-all duration-300 hover:scale-[1.02] hover:shadow-xl h-full",
        className
      )}
      {...props}
    >
      {/* Top image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          width={1200}
          height={1200}
          src={images[0]}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {/* Fade overlay */}
        <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-black via-black/30 to-transparent" />
      </div>

      {/* Bottom content */}
      <div className="flex flex-col justify-between flex-grow p-6 ">
        <div>
          <h3 className="mt-1 text-2xl font-bold">{name}</h3>
          <p className="mt-3 text-sm  line-clamp-5 min-h-[6rem]">
            {description}
          </p>
        </div>

        {/* CTA Button */}
        {projectLink && (
          <div className="mt-6">
            <Link href={projectLink} target="_blank">
              <Button
                size="sm"
                className="w-full bg-gradient-to-b from-rose-600 to-rose-700 text-white cursor-pointer shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Preview
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
});

EliteProjectCard.displayName = "EliteProjectCard";