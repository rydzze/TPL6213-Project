import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Bg3 } from './bg-3.component'

const routes = [
  {
    path: '',
    component: Bg3,
  },
]

@NgModule({
  declarations: [Bg3],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Bg3],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Bg3Module {}
