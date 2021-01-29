export interface ProductItem {
  id: string;
  name: string;
  price: number;
  status: boolean;
}

export interface Product {
  list: ProductItem[];
}
