import {} from "../components/ui/mock_data_sistema_resenas.json";

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
  },
  {
    id: "p2",
    name: "Smartphone Android",
    description: "Tel\u00e9fono m\u00f3vil con pantalla de 6.5 pulgadas y 128GB de almacenamiento.",
    price: 299.99,
  },
];

export default function HomePage() {
  return (
    <section className="flex justify-center">
      <Carousel className="w-fit ">
        <CarouselContent>
          {products.map((x) => (
            <CarouselItem key={x.id} className="basis-auto">
              <div className="p-1">
                <Card className="my-10 h-96 w-72 bg-neutral-100 shadow-md">
                  <CardHeader>
                    <img alt={x.name} />
                    <CardTitle>{x.name}</CardTitle>
                    <CardDescription className="text-base font-semibold text-black">
                      {x.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{x.description}</p>
                  </CardContent>
                  <CardFooter className="gap-2">
                    <Button className="bg-violet-500">Agregar Reseña</Button>
                    <Button>Coments</Button>
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
