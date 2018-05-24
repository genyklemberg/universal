import { Component } from '@angular/core';

@Component({
  selector: 'sp-root',
  template: `
    <sp-nav (click)='addComponent()'></sp-nav>
    <sp-sidebar></sp-sidebar>
    <router-outlet></router-outlet>
    <sp-footer></sp-footer>
    <div style='position: fixed; bottom: 0; right: 0; display: flex; z-index: 9;'>
      <ng-container *ngFor='let item of components'>
        <div style='flex-direction: row; align-items: flex-start; margin: 5px;'>
          <!--<p>Team1 <span>vs</span> Team 2</p>-->
          <!--<button>Details</button>-->
          <sp-team-widget [data]='item'></sp-team-widget>
        </div>
      </ng-container>
    </div>
  `
})
export class AppComponent {
  components = [];

  constructor(private controller: ControllerService) {
    this.controller.widgetOpen$.subscribe(data => {
      if (this.components.length > 3) {
        this.components.splice(0, 1);
      }
      this.components.push(data);
    });
    this.controller.widgetClose$.subscribe(data => {
      this.components.splice(this.components.indexOf(data), 1);
    });
  }
}
