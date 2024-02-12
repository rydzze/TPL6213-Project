import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Bg4 } from './bg-4.component'

const routes = [
  {
    path: '',
    component: Bg4,
  },
]

@NgModule({
  declarations: [Bg4],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Bg4],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Bg4Module {}
