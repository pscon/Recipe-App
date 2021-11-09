import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../home.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    private router: Router,
    private alertCtrl: AlertController

    ) { }

  ngOnInit() {
this.activatedRoute.paramMap.subscribe(paraMap => {
  if (!paraMap.has('recipeId')) {
    // redirect
    return;
  }
  const recipeId = paraMap.get('recipeId');
 this.loadedRecipe = this.homeService.getRecipe(recipeId);
});

  }
onDeleteRecipe() {
  this.alertCtrl.create({
    header: 'Are you sure?',
    message:'Do you want to delete recipe',
    buttons: [{
      text: 'cancel',
      role: 'cancel'
    },
  {
    text: 'Delete',
    handler:  () => {
      this.homeService.deleteRecipe(this.loadedRecipe.id);
      this.router.navigate(['/home']);
    }
  }
  ]
  }).then(alertEl => {
    alertEl.present();
  }); 

}
}
