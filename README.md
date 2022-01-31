# LoanApplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

The application contains home, about us views and a form which consists of 5 steps as well as summary. Every step is mandatory with additional validations if needed. Step 3 (income) has two possible outcomes: if income amount is less than 300, the application is summarized with being unable to proceed due to low income; else the form proceeds to the final two steps before giving the overview of all the details provided.

## Development server

Run `npm i` (to install dependencies if needed) and `ng serve --open` for a dev server. Navigate to `http://localhost:4200/home`. The app will automatically reload if you change any of the source files.

## Build and access via Index.html

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory (as well as Index.html file). This requires a remote server because the browser blocks local files. For more info please follow guidelines on https://angular.io/guide/deployment 

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
