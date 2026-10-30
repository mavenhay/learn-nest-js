import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateBookDto {
  @IsString()
  @IsOptional()
  judul?: string;

  @IsString()
  @IsOptional()
  penulis?: string;

  @IsNumber()
  @IsOptional()
  tahun?: number;
}
