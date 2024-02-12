import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Header } from './header/header.component'
import { FeatureCard1 } from './feature-card1/feature-card1.component'

@NgModule({
  declarations: [Header, FeatureCard1],
  imports: [CommonModule, RouterModule],
  exports: [Header, FeatureCard1],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
