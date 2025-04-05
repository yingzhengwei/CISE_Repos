import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  isbn: string;

  @Prop()
  author: string;

  @Prop()
  description: string;

  @Prop()
  published_date: Date;

  @Prop()
  publisher: string;

  @Prop({ default: Date.now })
  updated_date: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
