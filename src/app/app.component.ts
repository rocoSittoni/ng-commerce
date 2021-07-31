import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'ng-commerce';

  constructor(
    private matIconRegistry: MatIconRegistry, 
    private domSanitizer: DomSanitizer 
    ) {
    this.matIconRegistry.addSvgIcon(
      "search-solid",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/search-solid.svg")
    );
  }

}
