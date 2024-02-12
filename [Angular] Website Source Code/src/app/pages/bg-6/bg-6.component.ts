import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-bg6',
  templateUrl: 'bg-6.component.html',
  styleUrls: ['bg-6.component.css'],
})
export class Bg6 {
  raw4fjy: string = ' '
  rawjb0f: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Strace | Background')
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
