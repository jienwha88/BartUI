import {Component} from '@angular/core';
import {HttpService} from "./modules/services/http.service";
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

  ngOnInit(){

  }



  constructor(http: Http){
    this.http = http;

    // this.http.get('stations.json')
    //   .map(res => res.json())
    //   .subscribe(stations => this.stations = stations);

  }

  getEstimatedDepartureTime(station: string){
    let edtUrl = "http://localhost:8080/api/v1/etd/" + station;

    // this.http.get(edtUrl)
    //   .map(res => res.json())
    //   .subscribe(stations => this.stations = stations);
    //
    // console.log(this.stations);


    return this.http.get(edtUrl).subscribe(
      (data) => {
        this.stations = data.json();
        console.log(this.stations);
      }

    );
  }



}
