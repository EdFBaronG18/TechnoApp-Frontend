// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlAutenticate:           "http://localhost:8081/validatedUser",
  urlGetArtists:            "http://localhost:8081/getAllArtist",
  urlAddArtist:             "http://localhost:8081/addArtist",
  urlAddComment:            "http://localhost:8081/addCommentary",
  urlGetAllCommentByArtist: "http://localhost:8081/getAllCommentByArtistId",
  urlAddUser:               "http://localhost:8081/addUser",
  urlGetUserByUsername:     "http://localhost:8081/getUserByUsername",
  urlGetAllCategories:      "http://localhost:8081/getAllCategories",
  urlRemoveComment:         "http://localhost:8081/removeComment"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
