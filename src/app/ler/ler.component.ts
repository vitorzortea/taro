import { Component, OnInit } from '@angular/core';
import { BaralhoService } from '../core/baralho.service';

@Component({
  selector: 'app-ler',
  templateUrl: './ler.component.html',
  styleUrls: ['./ler.component.styl']
})
export class LerComponent implements OnInit {

  constructor(
    public baralhoServer: BaralhoService
  ) { }

  ngOnInit(): void {
    this.baralhoServer.embaralhar();
  }

}
