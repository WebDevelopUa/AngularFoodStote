# HFS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


=================================================================================

![Angular App](https://next.angular.io/assets/images/logos/angular/logo-nav@2x.png "Angular App")    [Application](https://next.angular.io/docs)
==========
##### Angular requires Node.js version 8.x or 10.x.

* To check your version, run in a terminal/console window: 

    ``` node -v ``` 

  
* To get *Node.js*, go to:

[nodejs.org](https://nodejs.org)

## Install/Upgrade NPM & Angular CLI globally

    npm install npm@latest -g
    npm install -g @angular/cli

## App Installing process / Create a workspace and initial application

    node -v
    npm -v
    ng v
    
    ng new health-food-store --style=scss  (if App is not created)
    ng new HFS --dir=./HFS --style=scss (if App is not created)
    ng new HFS --directory=./ --style=scss (if App is not created)
    
#### Start the development server / Run App / Serve the application

    cd health-food-store && ng serve -o
    cd HFS && ng serve -o
    ng serve --open
    
   GoTo=>  [localhost:4200](http://localhost:4200/)
    
#### Edit Angular component *(root component)*

    cd health-food-store/src/app/
    
        
#### Configuring Angular Application

    npm install @angular/material --save
    npm install @angular/cdk --save
    npm install --save @angular/animations
    npm install --save hammerjs
    npm install --save @angular/flex-layout
    
   Next, include the following into the <head> of *index.html* to make use of Material Design icons:
    
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> 
    
   src/app/app.module.ts
    
    . . . 
    
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { MatToolbarModule } from '@angular/material/toolbar'; 
    import { FlexLayoutModule } from '@angular/flex-layout';
    
    . . . 
    
    import 'hammerjs';
    
    @NgModule({
      
      . . . 
      
      imports: [ 
        
        . . .,
        
        BrowserAnimationsModule,
        MatToolbarModule,
        FlexLayoutModule
        
      ], 
        
        . . . 
      
      
    }) 
    
    . . . 
   
   Open *app.component.html*
    
    <mat-toolbar color="primary"> <span>Logo</span> </mat-toolbar>
    
       
   Open *styles.scss* (https://material.angular.io/guide/getting-started)
    
    @import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
    @import '~@angular/material/prebuilt-themes/indigo-pink.css';
    @import '~@angular/material/prebuilt-themes/pink-bluegrey.css';
    @import '~@angular/material/prebuilt-themes/purple-green.css';
    
    
#### Create **Menu component**

    ng generate component menu
    
   Open *app.component.html*
    
    <app-menu></app-menu> 
    
   Create a folder named *shared* under the *src/app* folder. To this folder, add a file named *dish.ts* with the following code:
    
    export class Dish {
        name: string;
        image: string;
        category: string;
        label: string;
        price: string;
        description: string;
    }
    
   Update *menu.component.ts* as follows to add in the data for four menu items:
    
    . . .
    import { Dish } from '../shared/dish';
    . . .
    
    export class MenuComponent implements OnInit {
    
      dishes: Dish[] = [
        {
          name: 'Kiwi',
          image: '/assets/images/kiwi.png',
          category: 'fruits',
          label: '',
          price: '2.99',
          description: 'Delicious eco friendly fruit for your family'
        }
       ];
    . . .
    }
    
   Update *menu.component.html* template as follows:
   
    <div class="container"
         fxLayout="column"
         fxLayoutGap="10px">
    
      <mat-list fxFlex>
        <mat-list-item *ngFor="let dish of dishes">
          <img matListAvatar src={{dish.image}} alt={{dish.name}}>
          <h1 matLine> {{dish.name}} </h1>
          <p matLine>
            <span> {{dish.description}} </span>
          </p>
        </mat-list-item>
      </mat-list>
    
    </div>
    
   Update *app.module.ts* as follows:
   
    . . .
    
    import { MatListModule } from '@angular/material/list';
    
    . . .
    
      imports: [
        . . .,
        MatListModule,
        . . .
      ],
    
    . . .
   
    
   
#### Updating **Menu component**

   Open *menu.component.html* and update its content as follows:
    
    . . .
    
      <div fxFlex>
        <div>
          <h3>Menu</h3>
          <hr>
        </div>
      </div>
    
      <div fxFlex>
        <mat-grid-list cols="2" rowHeight="200px">
          <mat-grid-tile *ngFor="let dish of dishes">
            <img height="200px" src={{dish.image}} alt={{dish.name}}>
            <mat-grid-tile-footer>
              <h1 matLine>{{dish.name | uppercase}}</h1>
            </mat-grid-tile-footer>
          </mat-grid-tile>
        </mat-grid-list>
      </div>
    
    . . .
    
   Open *app.module.ts* and update it as follows:
   
    . . .
    
    import { MatGridListModule } from '@angular/material/grid-list';
    import { MatCardModule } from '@angular/material/card';
    import { MatButtonModule } from '@angular/material/button';
    
    . . .
    
      imports: [
        . . .,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        . . .
      ],
    
    . . .
    
        
           
        
#### *.gitignore* file

    -
    
    node_modules
    .idea
    
    # dependencies
    node_modules
    
    # testing
    coverage
    
    
    # production
    build
    
    
    # misc
    .DS_Store
    .env.local
    .env.development.local
    .env.test.local
    .env.production.local
    
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*

    
    

