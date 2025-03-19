import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonItem, IonLabel, IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {ActivatedRoute, Router} from "@angular/router";
import {Country} from "../../models/country.model";

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.page.html',
  styleUrls: ['./country-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonList, IonItem, IonLabel]
})
export class CountryDetailPage implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  country: Country

  constructor(
    // private route: ActivatedRoute
  ) {
    this.country = this.route.snapshot.data['country'];
    if (this.country === null) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

}
