import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './api/books/book.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://wvr8458:ZEpays6PrUiEtPnH@cluster0.lrzqih8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),  // Replace with your actual URL
    BookModule,
  ],
})
export class AppModule {}
