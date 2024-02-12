import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy4biii } from './basic-py-4biii.component'

const routes = [
  {
    path: '',
    component: BasicPy4biii,
  },
]

@NgModule({
  declarations: [BasicPy4biii],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy4biii],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy4biiiModule {}
