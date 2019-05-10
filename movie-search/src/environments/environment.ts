// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "REPLACE_WITH_YOUR_FIREBASE_API_KEY",
    authDomain: "REPLACE_WITH_AUTH_DOMAIN",
    databaseURL: "REPLACE_WITH_DATABASE_URL",
    projectId: "REPLACE_WITH_PROJECTID",
    storageBucket: "REPLACE_WITH_STORAGE_BUCKET",
    messagingSenderId: "REPLACE_WITH_MESSAGING_SENDERID"
  }
};
