import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _modalService: NgbModal) {

  }

  title = 'angular-template-driven-forms';

  public open(modal: any) {
    this._modalService.open(modal);
  }
}
