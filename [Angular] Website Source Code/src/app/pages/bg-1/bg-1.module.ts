import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Bg1 } from './bg-1.component'

const routes = [
  {
    path: '',
    component: Bg1,
  },
]

@NgModule({
  declarations: [Bg1],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Bg1],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Bg1Module {}
