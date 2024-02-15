import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselCard from "@/components/CarouselCard";

function Projects() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselCard />
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Projects;
