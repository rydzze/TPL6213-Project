import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Bg6 } from './bg-6.component'

const routes = [
  {
    path: '',
    component: Bg6,
  },
]

@NgModule({
  declarations: [Bg6],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Bg6],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Bg6Module {}
