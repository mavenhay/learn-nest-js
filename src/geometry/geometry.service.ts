import { Injectable } from '@nestjs/common';
import { CircleDTO } from './dto/circle.dto.js';

@Injectable()
export class GeometryService {
    circleArea(circleDto: CircleDTO) {
        return {message: `Area of circle has counted`, data:Math.PI * circleDto.radius * circleDto.radius}
    }
}
