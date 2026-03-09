export interface Plato {
  id: string;
  nombre: string;
  descripcion: string;
  precio: string;
  categoria: "entradas" | "principales" | "bebidas";
  imagen: string;
}

export interface Promocion {
  id: number;
  titulo: string;
  desc: string;
  precio: string;
  color: string;
  foto: string;
}
