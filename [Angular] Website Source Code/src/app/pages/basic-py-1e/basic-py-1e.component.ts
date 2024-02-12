import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'basic-py1e',
  templateUrl: 'basic-py-1e.component.html',
  styleUrls: ['basic-py-1e.component.css'],
})
export class BasicPy1e {
  raw75ej: string = ' '
  rawkz5o: string = ' '
  raw6fbi: string = ' '
  rawse2m: string = ' '
  rawhn16: string = ' '
  raw7sum: string = ' '
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
