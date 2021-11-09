import { Component, OnInit } from '@angular/core';
import {Recipe } from './home.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
recipes: Recipe[];
  constructor(private homeService: HomeService ) {}

  ngOnInit() {
   this.recipes = this.homeService.getAllRecipes();
  }
}
