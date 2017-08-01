import {Component} from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public http: Http;
  stations: any [];

  currentDate: number = Date.now();
  durations: any[];



  constructor(http: Http){
    this.http = http;
    this.getEstimatedDepartureTime('12TH');


  }


  getEstimatedDepartureTime(station: string){
    let edtUrl = "http://localhost:8080/api/v1/etd/" + station;

    console.log(station);

    return this.http.get(edtUrl).subscribe(
      (data) => {
        this.stations = data.json();
        console.log(this.stations);

      }
    );
  }


  getDurationToDestination(origin: string, destination: string){
    console.log(origin);
    console.log(destination);

    let params = new URLSearchParams();
    params.set('orig', origin);
    params.set('dest', destination);
    let durationUrl = "http://localhost:8080/api/v1/duration";

    return this.http.get(durationUrl, {search: params}).subscribe(
      (data) => {
        this.durations = data.json();
        console.log(this.durations);
      }
    );
  }

}
