import { Component, OnInit } from '@angular/core';
import { SkywalkerService } from '../skywalker.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
})
export class TestComponentComponent implements OnInit {
  planets: any[] = [];
  currentPlanet: any;
  constructor(private skyService: SkywalkerService) {}

  ngOnInit(): void {
    this.getAndSetPlanets();
  }

  getAndSetPlanets = () => {
    this.skyService.getPlanetsFirstPage().subscribe((response: any) => {
      // console.log(response);
      let responseArr = response.results;
      // console.log(responseArr);
      this.planets.push(...responseArr);
      // console.log(this.planets);
      // console.log(response.next);
      // console.log(this.skyService.swAPIPlanetsURL);

      if (response.next) {
        this.skyService.swAPIPlanetsURL = response.next;
        this.getAndSetPlanets();
        this.skyService.swAPIPlanetsURL = 'https://swapi.dev/api/planets/';
        // this.showRandomPlanet();
      }
      // this.showRandomPlanet();
    });
    // this.showRandomPlanet();
  };

  showRandomPlanet = () => {
    this.currentPlanet = this.planets[Math.floor(Math.random() * 59)];
    console.log(this.currentPlanet);
  };
}
