import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonCard,
  IonCardHeader, IonCardTitle
} from '@ionic/angular/standalone';
import {CountriesService} from "../services/countries/countries.service";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf} from "@angular/common";
import {Country} from "../models/country.model";
import {RouterLink} from "@angular/router";

// noinspection AngularInvalidImportedOrDeclaredSymbol,AngularNonStandaloneComponentImports
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, AsyncPipe, IonList, NgForOf, IonCard, IonCardHeader, IonCardTitle, RouterLink],
  standalone: true,
})
export class Tab1Page {

  countries$: Observable<Country[]>;

  constructor(
    private countriesService: CountriesService
  ) {
    this.countries$ = this.countriesService.countries$();

    //TODO Remove Before production
    /*
    this.countries$.subscribe(countries => {
      console.log(countries);
    });
     */

  }
}
