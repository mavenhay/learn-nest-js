import { IsNumber, IsString } from "class-validator";

export class CreateBookDto {
  @IsString()
  judul: string;

  @IsString()
  penulis: string;

  @IsNumber()
  tahun: number;
}
