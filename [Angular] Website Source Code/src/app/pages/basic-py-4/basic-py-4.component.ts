import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'basic-py4',
  templateUrl: 'basic-py-4.component.html',
  styleUrls: ['basic-py-4.component.css'],
})
export class BasicPy4 {
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
