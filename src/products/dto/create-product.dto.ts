//src/products/dto/create-product.dto.ts

import { IsNotEmpty, isNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class createProductDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @Min(10) //Preço não pode ser negativo
    price: number;
}