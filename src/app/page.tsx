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

export default function HomePage() {
  return (
    <section className="flex justify-center">
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
    </section>
  );
}
