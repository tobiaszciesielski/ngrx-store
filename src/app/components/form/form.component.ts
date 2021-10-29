import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from 'src/app/app.service';
import { distinctUntilChanged } from 'rxjs/operators';

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
  isLoading = false;
  isSubmiting = false;
  formChanged = false;
  pizzaId!: number;

  get ingredients() {
    return this.pizzaForm.get('ingredients') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private pizzaService: PizzaService
  ) {}

  ngOnInit() {
    this.pizzaId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.pizzaId || this.pizzaId === 0) {
      this.isLoading = true;
      this.pizzaService.getPizza(this.pizzaId).subscribe((pizza) => {
        pizza.ingredients.map((ingredient) => this.addIngredient(ingredient));
        this.pizzaForm.patchValue(pizza);
        this.isLoading = false;
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
    this.isSubmiting = true;
    this.pizzaForm.disable();

    if (this.pizzaId || this.pizzaId === 0) {
      this.pizzaService
        .updatePizza({ id: this.pizzaId, ...this.pizzaForm.value })
        .subscribe(() => {
          this.router.navigate(['/pizzas']);
        });
    } else {
      this.pizzaService
        .createPizza(this.pizzaForm.value)
        .pipe(distinctUntilChanged())
        .subscribe(() => {
          this.router.navigate(['/pizzas']);
        });
    }
  }
}
