import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PizzaService } from 'src/app/app.service';
import { Pizza } from 'src/app/models/Pizza';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  pizzaForm = this.fb.group({
    name: ['', Validators.required],
    imageUrl: ['', Validators.required],
    ingredients: this.fb.array([], Validators.required),
  });

  get ingredients() {
    return this.pizzaForm.get('ingredients') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private pizzaService: PizzaService
  ) {}

  ngOnInit() {
    const pizzaId = Number(this.route.snapshot.paramMap.get('id'));

    if (pizzaId || pizzaId === 0) {
      this.pizzaService.getPizza(pizzaId).subscribe((pizza) => {
        pizza.ingredients.map((ingredient) => this.addIngredient(ingredient));
        this.pizzaForm.patchValue(pizza);
      });
    }
  }

  addIngredient(ingredient = '') {
    this.ingredients.push(this.fb.control(ingredient, Validators.required));
  }

  deleteIngredient(id: number) {
    this.ingredients.removeAt(id);
  }

  onSubmit() {
    console.log(this.pizzaForm.value);
    this.pizzaForm.reset();
  }
}
