import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'training-video',
  templateUrl: 'training-video.component.html',
  styleUrls: ['training-video.component.css'],
})
export class TrainingVideo {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Strace | Training Video')
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
