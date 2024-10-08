import {MessageSquareText} from "lucide-react";
import {ThumbsUp} from "lucide-react";
import {ThumbsDown} from "lucide-react";

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
import {products} from "@/interfaces";
import {users} from "@/interfaces";

export default function HomePage() {
  return (
    <section className="flex justify-center">
      <Carousel>
        <CarouselContent className="h-[600px] ">
          {products.map((product) => (
            <CarouselItem key={product.id} className="basis-auto px-10">
              <div className="p-1">
                <Card className="my-auto h-[550px] w-[350px] rounded-[18px] bg-neutral-100 shadow-lg">
                  <CardHeader>
                    <img
                      alt={product.name}
                      className="border-opacity-1 mb-2 rounded-[18px] border-2 border-gray-300"
                      src={product.image}
                    />
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription className="text-lg font-semibold tracking-tight text-black">
                      USD {product.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="tracking-tight">
                    <p>{product.description}</p>
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
                          <DialogTitle className="text-xl">Agregar Reseña</DialogTitle>
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
                            Reseña
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
                          <DialogTitle className="text-xl">Reseñas</DialogTitle>
                          {product.reviews.map((review) => {
                            const user = users.find((user) => user.id === review.userId);

                            return (
                              <div key={review.id}>
                                <Card className="mt-4 border-spacing-1 rounded-[18px] border-slate-300 bg-neutral-200 shadow-md">
                                  <CardTitle className="ml-6 mt-2 text-lg">{user?.name}</CardTitle>
                                  <CardContent className="mt-auto">{review.content}</CardContent>
                                  <CardFooter className="-mb-3 -mt-5 justify-end">
                                    {review.likes}
                                    <Button
                                      className=" mr-3 hover:bg-neutral-200"
                                      size="icon"
                                      variant="ghost"
                                    >
                                      <ThumbsUp className="size-5" />
                                    </Button>
                                    {review.dislikes}
                                    <Button
                                      className=" hover:bg-neutral-200"
                                      size="icon"
                                      variant="ghost"
                                    >
                                      <ThumbsDown className="size-5" />
                                    </Button>
                                  </CardFooter>
                                </Card>
                              </div>
                            );
                          })}
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
