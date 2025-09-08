import { CreateProduct } from "./create-product.model";

export interface UpdateProduct extends CreateProduct {
    id: number;
}
