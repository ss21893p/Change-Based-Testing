import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ChartsModule } from "ng2-charts";

import { AppComponent } from "./app.component";
import { DoughnutChartComponent } from "./doughnut-chart/doughnut-chart.component";

@NgModule({
  declarations: [AppComponent, DoughnutChartComponent],
  imports: [BrowserModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
