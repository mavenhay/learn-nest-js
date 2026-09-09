import { IsNotEmpty, IsNumber,Min } from "class-validator";
import {Type} from "class-transformer"

export class CircleDTO {
    @IsNotEmpty()
    @IsNumber()
    @Type(()=>Number)
    @Min(1)
    radius!:number
}