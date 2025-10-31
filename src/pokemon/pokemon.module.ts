import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchemna } from './entities/pokemon.entity';
import { ConfigModule } from '@nestjs/config';


@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        //el nombre de la clase
        name: Pokemon.name,
        schema: PokemonSchemna,
      },
    ]),
  ],
  exports: [PokemonService,MongooseModule]
})
export class PokemonModule {}
