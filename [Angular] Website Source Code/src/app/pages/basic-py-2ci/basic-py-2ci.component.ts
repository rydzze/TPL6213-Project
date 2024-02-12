import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'basic-py2ci',
  templateUrl: 'basic-py-2ci.component.html',
  styleUrls: ['basic-py-2ci.component.css'],
})
export class BasicPy2ci {
  raw6mhs: string = ' '
  raw88n2: string = ' '
  rawhfus: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Strace | Basic Python')
    this.meta.addTags([
      {
        name: 'description',
        content: 'TPL6213 Project',
      },
      {
        property: 'og:title',
        content: 'Strace',
      },
      {
        property: 'og:description',
        content: 'TPL6213 Project',
      },
    ])
  }
}
