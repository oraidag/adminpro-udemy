import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/service.index';

@Component({
  selector: 'app-sitebar',
  templateUrl: './sitebar.component.html',
  styles: []
})
export class SitebarComponent implements OnInit {

  constructor(public _sidebar: SidebarService) { }

  ngOnInit() {
  }

}
