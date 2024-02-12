import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sample-app-sales',
  templateUrl: 'sample-app-sales.component.html',
  styleUrls: ['sample-app-sales.component.css'],
})
export class SampleAppSales {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Strace | Sample Application')
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
