export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
}

export interface GeneratedDesign {
  imageUrl: string | null;
  description: string | null;
}

export enum DesignStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

