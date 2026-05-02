export interface Property {
  id: number;
  title: string;
  image: string;
  price: string;
  location: string;
  bhk: number;
  type: "Buy" | "Rent";
  description: string;
}
