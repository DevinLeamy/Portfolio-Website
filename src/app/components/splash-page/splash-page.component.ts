import { Component } from '@angular/core'
import { PageService } from "../../services/page.service"

@Component({
  selector: 'app-splash-page',
  templateUrl: 'splash-page.component.html',
  styleUrls: ['splash-page.component.css']
})
export class SplashPageComponent {
        constructor(public pageService: PageService) {}
}
