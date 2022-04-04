import { Component, Input, OnInit } from '@angular/core';
import { Precio } from '../../../models';

@Component({
  selector: 'app-precio',
  templateUrl: './precio.component.html',
  styleUrls: ['./precio.component.css']
})
export class PrecioComponent implements OnInit {

  @Input() precio!:Precio;

  constructor() { }

  ngOnInit(): void {
  }

}
