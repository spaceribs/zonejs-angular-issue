import { BrowserModule } from "@angular/platform-browser";
import { NgModule, DoBootstrap, ApplicationRef } from "@angular/core";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef): void {
    const plopdownAppElem = document.createElement("app-root");
    document.body.appendChild(plopdownAppElem);
    appRef.bootstrap(AppComponent);
  }
}
