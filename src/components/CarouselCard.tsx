import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CarouselItem } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Auth-app",
    footer: "API RESTful built with Express and the frontend with React. A user can create an account, login, and request a password reset. The app uses JWT for authentication and Nodemailer for sending emails.",
    image: "../images/wiki.png",
    repo: "https://github.com/juanpahv/auth-wiki-app",
    badges: ["Typescript","React","Express","JWT","Nodemailer","MySQL"],
  },
  {
    title: "Futuretech",
    footer: "Web application for a fictional company that sells technology products. A user can create an account as a seller or buyer. Sellers can create, edit, and delete products. Buyers can add products to their cart and checkout.",
    image: "../images/futuretech.png",
    repo: "https://github.com/juanpahv/futuretech",
    badges: ["Django", "Bootstrap", "MySQL"],
  },
];

function CarouselCard() {
  return projects.map(({title, image, repo, footer, badges}) => (
    <CarouselItem key={title}>
      <div className="p-1">
        <Card>
          <CardHeader className="flex justify-center">
            <CardTitle>{title}</CardTitle>
            <span className="hover:underline">
              <a href={repo} target="_blank">Github</a>
            </span>
            <div className="flex justify-center flex-wrap pt-2">
              {
              badges.map((badge, index) => (
                  <Badge key={index} variant="secondary" className="mx-1 mt-2">
                    {badge}
                  </Badge>
                ))
              }
            </div>
          </CardHeader>
          <CardContent className="flex items-center justify-center p-2">
            <img src={image} alt={title} />
          </CardContent>
          <CardFooter className="flex justify-center pt-2">
            <span>{footer}</span>
          </CardFooter>
        </Card>
      </div>
    </CarouselItem>
  ));
}

export default CarouselCard;
