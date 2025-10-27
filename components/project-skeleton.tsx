import { Skeleton } from "@/components/ui/skeleton";

export function ProjectSkeleton() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center rounded-lg p-4">
        <div className="flex flex-wrap items-stretch justify-center gap-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col w-full max-w-sm rounded-lg border border-border bg-card shadow-sm"
            >
              {/* Image Skeleton */}
              <Skeleton className="h-[320px] w-full rounded-t-lg flex-shrink-0" />

              <div className="flex flex-1 flex-col justify-between p-4">
                <div className="flex-1">
                  {/* Title Skeleton */}
                  <Skeleton className="h-6 w-3/4 rounded-md mb-3" />

                  {/* Description Skeleton (matching min-h-[6rem] and line-clamp-4) */}
                  <div className="mb-4 min-h-[6rem] space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/6" />
                  </div>
                </div>

                {/* Button Skeleton */}
                <Skeleton className="h-9 w-full rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}