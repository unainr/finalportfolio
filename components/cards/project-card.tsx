import { Project } from "@/types"
import MinimalCard, { MinimalCardDescription, MinimalCardImage, MinimalCardTitle } from "./minimal-card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
  const { name, description, images, projectLink } = project;

  return (
    <div className="w-full h-full ">
      <div className="flex flex-col justify-center rounded-lg p-4">
        <div className="flex flex-wrap items-stretch justify-center gap-4">
          <MinimalCard className="flex  flex-col">
            <MinimalCardImage
              className="h-[320px]   flex-shrink-0"
              src={images[0]}
              alt={name}
            />
            <div className="flex flex-1 flex-col justify-between p-4">
              <div className="flex-1">
                <MinimalCardTitle className="mb-3">{name}</MinimalCardTitle>
                <MinimalCardDescription className="mb-4 line-clamp-4 min-h-[6rem]">
                  {description}
                </MinimalCardDescription>
              </div>
              {projectLink && (
                <Link href={projectLink} target="_blank">

                <Button
                  size="sm"
                  className="w-full bg-gradient-to-b cursor-pointer from-rose-600 to-rose-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
                  
                  >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Preview
                </Button>
                    </Link>
              )}
            </div>
          </MinimalCard>
        </div>
      </div>
    </div>
  )
}