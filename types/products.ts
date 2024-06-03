// types/Product.ts
export type Product = {
  id: string;
  title: string;
  value_name_brand: string;
  category: string;
  subcategory: string | string[]; // Pode ser uma string ou um array de strings
  price:number;
  picture_ids:Array<string>;
  permalink:string;
};
