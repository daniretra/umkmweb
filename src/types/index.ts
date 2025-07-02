export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  unit: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderForm {
  name: string;
  phone: string;
  address: string;
  paymentMethod: string;
  notes?: string;
}