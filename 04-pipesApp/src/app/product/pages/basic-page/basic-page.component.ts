import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.scss'
})
export class BasicPageComponent {
  public nameLower: string = 'arturo';
  public nameUpper: string = 'ARTURO';
  public nameComplete: string = 'aRtUrO caRrIlLo';

  public customData = new Date();
}
