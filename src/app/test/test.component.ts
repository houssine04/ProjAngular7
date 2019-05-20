import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  appareils: any[];

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  getColor() {
      return 'red';
    }

}
