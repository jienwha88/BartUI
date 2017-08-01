import {Component} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public http: Http;
  stations: any;
  important: any[];

  constructor(http: Http){
    this.http = http;

    this.getEstimatedDepartureTime('12TH');

  }

  getEstimatedDepartureTime(station: string){
    let edtUrl = "http://localhost:8080/api/v1/etd/" + station;

    // this.http.get(edtUrl)
    //   .map(res => res.json())
    //   .subscribe(stations => this.stations = stations);
    //
    // console.log(this.stations);

    console.log(station);

    // return this.http.get(edtUrl).subscribe(
    return this.http.get('assets/stations.json').subscribe(
      (data) => {
        this.stations = data.json();
        console.log(this.stations);
        this.important = this.stations.root.station[0].etd;
        console.log(this.important);

      }
    );
  }



}
