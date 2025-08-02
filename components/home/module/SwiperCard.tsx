import React from "react"
import { CardSwipe } from "./Swiper"


const CardSwipeDemo = () => {
  const images = [
    { src: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/screencapture-wisera-vercel-app-2025-08-01-13_04_22.png?updatedAt=1754035533383", alt: "Image 1" },
    { src: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/7.png?updatedAt=1754034870667", alt: "Image 2" },
    { src: "https://ik.imagekit.io/a3gy4rsgb/portfolioimages/11.png?updatedAt=1754034871698", alt: "Image 3" },
  ]

  return (
    <div className="w-full">
      <CardSwipe images={images} autoplayDelay={2000} slideShadows={false} />
    </div>
  )
}

export default CardSwipeDemo
