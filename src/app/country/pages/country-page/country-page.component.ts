import { JsonPipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.services.ts.service';
import { Country } from '../../interfaces/country.interface';
import { switchMap, tap, filter, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {
  fb = inject(FormBuilder);
  CountryService = inject(CountryService);

  // Ordenar regiones (strings) alfabéticamente
  regions = signal(
    [...this.CountryService.regions].sort((a, b) => a.localeCompare(b))
  );

  countriesByRegion = signal<Country[]>([]);
  borders = signal<Country[]>([]);

  myForm = this.fb.group({
    region: ["", Validators.required],
    country: ["", Validators.required],
    border: ["", Validators.required],
  });

  onFormChanged = effect((onCleanup) => {
    const regionSubscription = this.onRegionChanged();
    const countrySubscription = this.onCountryChanged();
    onCleanup(() => {
      regionSubscription.unsubscribe();
      countrySubscription.unsubscribe();
    });
  });

  onRegionChanged() {
    return this.myForm.get("region")!.valueChanges.pipe(
      tap(() => this.myForm.get("country")!.setValue("")),
      tap(() => this.myForm.get("border")!.setValue("")),
      tap(() => {
        this.borders.set([]);
        this.countriesByRegion.set([]);
      }),
      switchMap((region) =>
        this.CountryService.getCountriesByRegion(region ?? "")
      )
    )
    .subscribe((countries) => {
      // Ordenar países por country.name.common
      const sortedCountries = [...countries].sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      this.countriesByRegion.set(sortedCountries);
    });
  }

  onCountryChanged() {
    return this.myForm.get("country")!.valueChanges
      .pipe(
        tap(() => this.myForm.get("border")!.setValue("")),
        filter((value) => value!.length > 0),
        switchMap((alphaCode) =>
          this.CountryService.getCountryByAlphaCode(alphaCode ?? "")
        ),
        switchMap((country) =>
          this.CountryService.getCountryNamesByCodeArray(country.borders)
        )
      )
      .subscribe((borders) => {
        // Ordenar fronteras por country.name.common
        const sortedBorders = [...borders].sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        this.borders.set(sortedBorders);
      });
  }
}
