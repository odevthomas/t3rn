import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface ImageData {
  id: number;
  url: string;
  title: string;
}

interface DeviceMockupCarouselProps {
  images: ImageData[];
  className?: string;
}

const ImageCarousel: React.FC<{
  images: ImageData[];
  aspect: number;
  activeIndex?: number;
  onSelect?: (index: number) => void;
  className?: string;
  showControls?: boolean;
  rounded?: string;
}> = ({
  images,
  aspect,
  activeIndex,
  onSelect,
  className,
  showControls = false,
  rounded = "md"
}) => {
    return (
      <Carousel
        opts={{ loop: true, startIndex: activeIndex }}
        onSelect={onSelect}
        className={cn("w-full h-full", className)}
      >
        <CarouselContent className="h-full">
          {images.map((image) => (
            <CarouselItem key={image.id} className="h-full">
              <AspectRatio ratio={aspect} className="h-full">
                <img
                  src={image.url}
                  alt={image.title}
                  className={cn("w-full h-full object-cover", `rounded-${rounded}`)}
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>

        {showControls && (
          <>
            <CarouselPrevious
              variant="outline"
              size="sm"
              className="absolute left-2 bg-black border-gray-700/50 backdrop-blur-sm text-white hover:bg-black/60"
            />
            <CarouselNext
              variant="outline"
              size="sm"
              className="absolute right-2 bg-black border-gray-700/50 backdrop-blur-sm text-white hover:bg-black/60"
            />
          </>
        )}
      </Carousel>
    );
  };

const DeviceMockupCarousel: React.FC<DeviceMockupCarouselProps> = ({ images, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn("flex flex-col items-center justify-center w-full min-h-screen px-4 py-8", className)}>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-8">

        {/* Container responsivo para a moldura */}
        <div className="relative w-full sm:max-w-[90%] md:max-w-[700px] aspect-[16/10]">
          <div className="absolute inset-0 bg-black rounded-xl border-[6px] sm:border-[8px] md:border-[10px] border-gray-800 shadow-xl">
            <div className="absolute inset-0 overflow-hidden rounded-md">
              <ImageCarousel
                images={images}
                aspect={16 / 9}
                onSelect={(index) => setActiveIndex(index)}
                activeIndex={activeIndex}
                showControls
                rounded="md"
                className="h-full"
              />
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[9px] w-4 h-4 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-600 rounded-full" />
            </div>
          </div>
          <div className="w-24 h-3 bg-gradient-to-b from-gray-700 to-gray-900 mx-auto rounded-b-lg mt-2" />
        </div>
      </div>

      {/* Indicadores responsivos */}
      <div className="mt-6 flex justify-center gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-colors",
              activeIndex === idx ? "bg-green-500" : "bg-gray-400/50"
            )}
          />
        ))}
      </div>
    </div>
  
  );
};

export default DeviceMockupCarousel;
