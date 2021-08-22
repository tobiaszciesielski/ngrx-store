import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  pizzaForm = this.fb.group({
    name: ['', Validators.required],
    imageUrl: ['', Validators.required],
    ingredients: this.fb.array(
      [this.fb.control('', Validators.required)],
      Validators.required
    ),
  });

  constructor(private fb: FormBuilder) {}

  get ingredients() {
    return this.pizzaForm.get('ingredients') as FormArray;
  }

  addIngredients() {
    this.ingredients.push(this.fb.control(''));
  }

  deleteIngredient(id: number) {
    this.ingredients.removeAt(id);
  }

  onSubmit() {
    console.log(this.pizzaForm.value);
    this.pizzaForm.reset();
  }
}
