import { Promocion } from "@/src/types/index";

export const PROMOCIONES: Promocion[] = [
  {
    id: 1,
    titulo: "Combo Familiar",
    desc: "Ofrecemos un combo variado de nuestros mejores platos",
    precio: "Consultar",
    color: "bg-red-600",
    foto: "/platoFamiliarPromo.jpeg",
  },
  {
    id: 2,
    titulo: "PROMO Alitas",
    desc: "Para que no te quedes con ganas de saborear nuestras famosas alitas",
    precio: "Consultar",
    color: "bg-orange-500",
    foto: "/alitasPromo.webp",
  },
  {
    id: 3,
    titulo: "Menú Ejecutivo",
    desc: "Plato principal + Bebida",
    precio: "Consultar",
    color: "bg-red-800",
    foto: "/promoPlatodelDia.jpeg",
  },
];
