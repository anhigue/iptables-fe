import { Component, OnInit } from '@angular/core';
import { IptablesService } from './services/iptables.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'iptables-frontend';
  
  constructor(){}

  ngOnInit(): void {}

}
