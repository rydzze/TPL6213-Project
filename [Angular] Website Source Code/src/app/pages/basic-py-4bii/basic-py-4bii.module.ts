import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy4bii } from './basic-py-4bii.component'

const routes = [
  {
    path: '',
    component: BasicPy4bii,
  },
]

@NgModule({
  declarations: [BasicPy4bii],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy4bii],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy4biiModule {}
