import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {
  private routerinfo;

  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.routerinfo = this.activatedRoute.snapshot;
  }

}
