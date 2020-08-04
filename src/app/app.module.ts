import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { MainComponent } from "./components/main/main.component"
import { SplashPageComponent } from './components/splash-page/splash-page.component'
import { JourneyPageComponent } from './components/journey-page/journey-page.component'
import { FooterPageComponent } from './components/footer-page/footer-page.component'
import { ProjectsPageComponent } from './components/projects-page/projects-page.component'
import { ArrowButtonComponent } from "./components/arrow-button/arrow-button.component"
import { ProjectComponent } from "./components/projects-page/project/project.component"
import { TagComponent } from "./components/projects-page/project/tag/tag.component"

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    JourneyPageComponent,
    FooterPageComponent,
    ProjectsPageComponent,
    MainComponent,
    ArrowButtonComponent,
    ProjectComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
