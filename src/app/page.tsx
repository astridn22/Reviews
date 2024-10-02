import {} from "../components/ui/mock_data_sistema_resenas.json";
import {FileInput, MessageSquareText} from "lucide-react";

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

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
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="h-8 w-48 bg-[#b2a2bc] text-center font-semibold tracking-wide text-black hover:bg-[#9e8aab] focus:bg-[#9e8aab] focus:text-white">
                          Agregar Reseña
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="rounded-[18px] bg-neutral-100 shadow-lg">
                        <DialogHeader>
                          <DialogTitle>Agregar Reseña</DialogTitle>
                        </DialogHeader>
                        <div className="relative mt-4 flex flex-wrap items-center gap-2">
                          <Label className=" text-left" htmlFor="name">
                            Nombre
                          </Label>
                          <Input id="name" placeholder="Pedro Duarte" />
                          <Label className="mt-3 text-left" htmlFor="email">
                            Email
                          </Label>
                          <Input id="email" placeholder="peduarte@gmail.com" type="email" />
                          <Label className="mt-3 text-left" htmlFor="coment">
                            Comentario
                          </Label>
                          <Input id="coment" placeholder="Muy buen producto!" />
                        </div>
                        <DialogFooter className="mt-2 gap-2">
                          <DialogClose>
                            <Button className="border-gray-300" variant="outline">
                              Cancelar
                            </Button>
                          </DialogClose>
                          <Button
                            className="bg-[#b2a2bc] tracking-wide text-black hover:bg-[#9e8aab] focus:bg-[#9e8aab] focus:text-white"
                            type="submit"
                          >
                            Aceptar
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="mr-2" size="icon" variant="ghost">
                          <MessageSquareText className="size-7 h-8 stroke-[1.5px]" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="rounded-[18px] bg-neutral-100 shadow-lg sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Comentarios</DialogTitle>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
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
