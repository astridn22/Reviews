interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  reviews: Review[];
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface Review {
  id: string;
  productId: string;
  userId: string;
  content: string;
  likes: number;
  dislikes: number;
}

export const users: User[] = [
  {
    id: "u1",
    name: "Juan P\u00e9rez",
    email: "juan.perez@example.com",
  },
  {
    id: "u2",
    name: "Ana Garc\u00eda",
    email: "ana.garcia@example.com",
  },
  {
    id: "u3",
    name: "Carlos G\u00f3mez",
    email: "carlos.gomez@example.com",
  },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Auriculares Bluetooth",
    description: "Auriculares inal\u00e1mbricos con cancelaci\u00f3n de ruido.",
    price: 59.99,
    image: "../images/img1.jpg",
    reviews: [
      {
        id: "r1",
        productId: "p1",
        userId: "u1",
        content: "Los mejores auriculares que he probado.",
        likes: 10,
        dislikes: 1,
      },
      {
        id: "r2",
        productId: "p1",
        userId: "u2",
        content: "Buena calidad de sonido pero la bater\u00eda no dura mucho.",
        likes: 5,
        dislikes: 2,
      },
    ],
  },
  {
    id: "p2",
    name: "Smartphone Android",
    description: "Tel\u00e9fono m\u00f3vil con pantalla de 6.5 pulgadas y 128GB de almacenamiento.",
    price: 299.99,
    image: "../images/img2.jpg",
    reviews: [
      {
        id: "r3",
        productId: "p2",
        userId: "u3",
        content: "Muy buen tel\u00e9fono por el precio.",
        likes: 20,
        dislikes: 3,
      },
    ],
  },
];
