import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Bg2 } from './bg-2.component'

const routes = [
  {
    path: '',
    component: Bg2,
  },
]

@NgModule({
  declarations: [Bg2],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Bg2],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Bg2Module {}
