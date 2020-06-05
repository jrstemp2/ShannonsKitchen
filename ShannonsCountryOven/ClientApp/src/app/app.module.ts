import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';



//import services
import { UserService } from './services/user.service';
import { RecipeService } from './services/recipe.service';

//import components
import { UserComponent } from './user/user.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipedetailsComponent } from './recipedetails/recipedetails.component';


//login
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    RecipeComponent,
    UserComponent,
    RecipedetailsComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'recipe', component: RecipeComponent },
      { path: 'recipe/:id', component: RecipedetailsComponent },
      
    ])
  ],
  providers: [RecipeService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
