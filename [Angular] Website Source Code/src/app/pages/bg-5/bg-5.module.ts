import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Bg5 } from './bg-5.component'

const routes = [
  {
    path: '',
    component: Bg5,
  },
]

@NgModule({
  declarations: [Bg5],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Bg5],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Bg5Module {}
