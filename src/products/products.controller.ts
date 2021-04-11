import { FindProductDto } from './dto/find-product.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsModel } from './products.model';

@Controller('products')
export class ProductsController {
  @Post('create')
  async create(@Body() dto: Omit<ProductsModel, '_id'>) {}

  @Get(':id')
  async get(@Param('id') id: string) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ProductsModel) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto) {}
}
