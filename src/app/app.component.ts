import { Component, OnInit, AfterContentInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterContentInit {
  title = "zonejs-webext-issue";

  ngOnInit(): void {
    console.log("Content Script Initialized.");
  }

  ngAfterContentInit(): void {
    const timeout = setTimeout(() => {
      console.log("Timeout Reached");
    }, 5000);

    clearTimeout(timeout);
  }
}
