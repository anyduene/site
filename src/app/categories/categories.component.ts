import { Component } from '@angular/core';
import { Category } from '../categories';
import { CATEGORIES } from '../categories-list';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categoriesList = CATEGORIES;
}
