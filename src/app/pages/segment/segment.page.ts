import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild('segmento', { static: true }) segment: IonSegment;
  superHeroes: Observable<any>;
  publisher: string = "";

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHeroes = this.dataService.getHeroes();
  }

  async segmentChanged(event) {
    this.superHeroes = await this.dataService.getHeroes();
    if (event.detail.value == 'todos') {
      this.publisher = "";
    } else {
      this.publisher = event.detail.value;
    }
  }
}
