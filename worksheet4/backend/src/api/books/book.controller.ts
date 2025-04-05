import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './create-book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: Partial<CreateBookDto>) {
    return this.bookService.update(id, updateBookDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.bookService.delete(id);
  }
}
