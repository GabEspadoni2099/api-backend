//src/products/dto/update-product.dto.ts

import { IsNumber, IsOptional, IsString, Min } from "class-validator";

export class updateProductDto{
    @IsString()
    @IsOptional()
    name?: string;

    @IsNumber()
    @Min(0)
    @IsOptional()
    price?: number;
}