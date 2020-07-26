import { Component, OnInit } from '@angular/core';
import { BaralhoService } from '../core/baralho.service';

@Component({
  selector: 'app-embaralhar',
  templateUrl: './embaralhar.component.html',
  styleUrls: ['./embaralhar.component.styl']
})
export class EmbaralharComponent implements OnInit {

  constructor(
    public baralhoServer: BaralhoService
  ) {}

  ngOnInit(): void {
  }

}
