import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy3bii } from './basic-py-3bii.component'

const routes = [
  {
    path: '',
    component: BasicPy3bii,
  },
]

@NgModule({
  declarations: [BasicPy3bii],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy3bii],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy3biiModule {}
