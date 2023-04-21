import { Component } from '@angular/core';

import { NgbOffcanvas, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private _modalService: NgbModal,
    private _sidebarService: NgbOffcanvas) {

  }

  title = 'angular-template-driven-forms';

  public toggleSidebar() {
    this._sidebarService.open(SidebarComponent);
  }

  public open(modal: any) {
    this._modalService.open(modal);
  }
}
