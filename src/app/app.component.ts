import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  loadedFeature = "recipe";
  title = "app";
  
  onNavigate(feacture: string) {
    this.loadedFeature = feacture;
    console.log("gus");
  }
}
