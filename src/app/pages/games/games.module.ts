import { GamesRoutingModule } from './games-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { TranslateLazyModule } from 'src/app/shared/modules/translate-lazy.module';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    TranslateLazyModule
  ]
})
export class GamesModule { }
