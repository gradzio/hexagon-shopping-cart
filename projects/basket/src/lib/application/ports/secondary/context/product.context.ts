import { ProductDto } from '../dto/product.dto';

export interface ProductContext {
  readonly all: ProductDto[];
}
