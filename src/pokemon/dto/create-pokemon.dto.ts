import { IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
    // isInt, isPositive, min 1

    @IsNumber()
    @IsPositive()
    @Min(1)
    no: number;

    // isString, min 1
    @IsString()
    @MinLength(1)
    name: string
}
