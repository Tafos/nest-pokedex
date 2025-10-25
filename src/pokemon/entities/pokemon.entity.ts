import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//un schema de base de datos y extendes de mongo documento
@Schema()
export class Pokemon extends Document {
  
    //id: string // Mongo me lo da

  @Prop({
    unique: true,
    index: true,
  })
  name: string;
  
  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}

export const PokemonSchemna = SchemaFactory.createForClass(Pokemon);
