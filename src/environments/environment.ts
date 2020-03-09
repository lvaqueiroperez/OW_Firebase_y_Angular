// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // AÑADIMOS:
  firebaseConfig: {
    apiKey: 'AIzaSyB0sgtwVdnROd_Vicyex17kCUzczPva7EE',
    authDomain: 'ow-firebaseangular.firebaseapp.com',
    databaseURL: 'https://ow-firebaseangular.firebaseio.com',
    projectId: 'ow-firebaseangular',
    storageBucket: 'ow-firebaseangular.appspot.com',
    messagingSenderId: '390017001907',
    appId: '1:390017001907:web:3fa3b379d833c844f083c6',
    measurementId: 'G-DMD1XP2TKP'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
