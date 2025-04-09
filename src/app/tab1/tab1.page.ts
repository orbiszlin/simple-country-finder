import {Component} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonSearchbar,
  IonModal,
  IonButtons,
  IonButton,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone';
import {CountriesService} from "../services/countries/countries.service";
import {map, Observable} from "rxjs";
import {AsyncPipe, NgForOf} from "@angular/common";
import {Country} from "../models/country.model";
import {RouterLink} from "@angular/router";

// noinspection AngularInvalidImportedOrDeclaredSymbol,AngularNonStandaloneComponentImports
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, AsyncPipe, IonList, NgForOf, IonCard, IonCardHeader, IonCardTitle, RouterLink, IonSearchbar, IonModal, IonButtons, IonButton, IonItem, IonInput, IonSelect, IonSelectOption],
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

  handleSearch(event: CustomEvent) {
    const search = event.detail.value.toLowerCase();
    console.log(search);
    this.countries$ = this.countriesService.search$(search);


  }

  filtrate(event: any) {
    const value = event.detail.value;
    this.countries$ = this.countriesService.countries$()
      .pipe(
        map(countries => {
          return countries
            .filter((country: any) => country.currencies.findIndex((c: any) => c.shortcode === value) > -1)
        })
      );
  }
}
