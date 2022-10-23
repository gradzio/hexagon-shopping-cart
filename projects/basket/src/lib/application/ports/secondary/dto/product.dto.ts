import { PriceDto } from './price.dto';

export interface ProductDto {
  readonly name: string;
  readonly tags: string[];
  readonly price: PriceDto;
  readonly imageUrl: string;
}
