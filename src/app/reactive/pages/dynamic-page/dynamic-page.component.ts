import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {
  private fb = inject(FormBuilder);
  FormUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['Death Stranding', Validators.required],
      ],
      Validators.minLength(3)
    ),
  });

  newFavorite = new FormControl("", Validators.required);

  get favoriteGames(){
    return this.myForm.get("favoriteGames") as FormArray;
  };

    // isValidFieldInArray(formArray: FormArray, index: number) {
    //   return (
    //     formArray.controls[index].errors && formArray.controls[index].touched
    //   );
    // };

    onAddToFavorites() {
    if (this.newFavorite.invalid) return;
    const newGame = this.newFavorite.value;

    this.favoriteGames.push(this.fb.control(newGame, Validators.required));

    this.newFavorite.reset();
  };


  onDeleteFavorite(index: number) {
    this.favoriteGames.removeAt(index);
  };

  onSubmit(){
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }


}


