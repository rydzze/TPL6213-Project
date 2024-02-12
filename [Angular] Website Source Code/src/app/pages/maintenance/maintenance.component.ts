import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-maintenance',
  templateUrl: 'maintenance.component.html',
  styleUrls: ['maintenance.component.css'],
})
export class Maintenance {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Strace | Flag')
    this.meta.addTags([
      {
        name: 'description',
        content: 'TPL6213 Project',
      },
      {
        property: 'og:title',
        content: 'Strace | Flag',
      },
      {
        property: 'og:description',
        content: 'TPL6213 Project',
      },
    ])
  }
}
