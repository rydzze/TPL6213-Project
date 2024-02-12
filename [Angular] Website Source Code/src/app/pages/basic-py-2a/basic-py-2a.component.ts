import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'basic-py2a',
  templateUrl: 'basic-py-2a.component.html',
  styleUrls: ['basic-py-2a.component.css'],
})
export class BasicPy2a {
  rawp871: string = ' '
  rawo4gt: string = ' '
  raw90g2: string = ' '
  raw1jpc: string = ' '
  rawmxig: string = ' '
  rawvzbt: string = ' '
  raw8f9i: string = ' '
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
