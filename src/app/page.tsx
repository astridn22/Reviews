import {} from "../components/ui/mock_data_sistema_resenas.json";
import {MessageSquareText} from "lucide-react";

import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

//const products: [id: number, name: string, description: string, price: number];

const products = [
  {
    id: "p1",
    name: "Auriculares Bluetooth",
    description: "Auriculares inal\u00e1mbricos con cancelaci\u00f3n de ruido.",
    price: 59.99,
    image: "../images/img1.jpg",
  },
  {
    id: "p2",
    name: "Smartphone Android",
    description: "Tel\u00e9fono m\u00f3vil con pantalla de 6.5 pulgadas y 128GB de almacenamiento.",
    price: 299.99,
    image: "../images/img2.jpg",
  },
];

export default function HomePage() {
  return (
    <section className="flex justify-center">
      <Carousel>
        <CarouselContent className="h-[600px] ">
          {products.map((x) => (
            <CarouselItem key={x.id} className="basis-auto px-10">
              <div className="p-1">
                <Card className="my-auto h-[550px] w-[350px] rounded-[18px] bg-neutral-100 shadow-lg">
                  <CardHeader>
                    <img
                      alt={x.name}
                      className="border-opacity-1 mb-2 rounded-[18px] border-2 border-gray-300"
                      src={x.image}
                    />
                    <CardTitle>{x.name}</CardTitle>
                    <CardDescription className="text-lg font-semibold tracking-tight text-black">
                      USD {x.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="tracking-tight">
                    <p>{x.description}</p>
                  </CardContent>
                  <CardFooter className="justify-between">
                    <Button className="h-8 w-48 bg-[#b2a2bc] text-center font-semibold tracking-wide text-black hover:bg-[#9e8aab] focus:bg-[#9e8aab] focus:text-white">
                      Agregar Reseña
                    </Button>
                    <MessageSquareText className="mr-2 size-7 h-8 stroke-[1.5px] text-center" />
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

/*<Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
            <Card className="my-10 w-72 bg-neutral-100 shadow-md">
        <CardHeader>
          <img alt="Auriculares Bluetooth" />
          <CardTitle>Auriculares Bluetooth</CardTitle>
          <CardDescription className="text-base font-semibold text-black">
            USD 59.99
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Auriculares inalámbricos con cancelación de ruido</p>
        </CardContent>
        <CardFooter className="gap-2">
          <Button className="bg-violet-500">Agregar Reseña</Button>
          <Button>Coments</Button>
        </CardFooter>
      </Card>
            </div>
          </CarouselItem>*/
