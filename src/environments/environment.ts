// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  config : {
    apiKey: 'AIzaSyDMsdYysFmBMaz02PBlu_RR5F32Al7Upt8',
    authDomain: 'sendmail-5e90a.firebaseapp.com',
    databaseURL: 'https://sendmail-5e90a.firebaseio.com',
    projectId: 'sendmail-5e90a',
    storageBucket: 'sendmail-5e90a.appspot.com',
    messagingSenderId: '908459891769'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
