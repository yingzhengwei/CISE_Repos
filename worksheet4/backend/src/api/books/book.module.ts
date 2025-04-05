import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './book.schema';
import { BookService } from './book.service';
import { BookController } from './book.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
