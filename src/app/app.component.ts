import { Component, OnInit, NgZone, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "zonejs-webext-issue";
  number = 0;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    browser.storage.onChanged.addListener((changes) => {
      this.number += 1;
      console.log((window as any).Zone.current);
      console.log(NgZone.isInAngularZone());
    });

    setTimeout(() => {
      console.log((window as any).Zone.current);
      browser.storage.local.set({ test: this.number.toString() });
    }, 1000);
  }
}
