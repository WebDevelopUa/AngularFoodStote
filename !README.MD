![Angular App](https://next.angular.io/assets/images/logos/angular/logo-nav@2x.png "Angular App")    [Application](https://next.angular.io/docs)
==========
##### Angular requires Node.js version 8.x or 10.x.

* To check your version, run in a terminal/console window: 

    ``` node -v ``` 

  
* To get Node.js, go to:

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
    
#### Edit Angular component (root component)

    cd health-food-store/src/app/
    
        
#### Configuring Angular Application

    npm install @angular/material --save
    npm install @angular/cdk --save
    npm install --save @angular/animations
    npm install --save hammerjs
    npm install --save @angular/flex-layout
    
   Next, include the following into the <head> of index.html to make use of Material Design icons:
    
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
   
   Open app.component.html
    
    <mat-toolbar color="primary"> <span>Logo</span> </mat-toolbar>
    
       
   Open styles.scss (https://material.angular.io/guide/getting-started)
    
    @import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
    @import '~@angular/material/prebuilt-themes/indigo-pink.css';
    @import '~@angular/material/prebuilt-themes/pink-bluegrey.css';
    @import '~@angular/material/prebuilt-themes/purple-green.css';
    
    
    
    
#### .gitignore file

    template
    
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

    
    