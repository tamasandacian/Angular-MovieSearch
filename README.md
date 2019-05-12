# Angular-MovieSearch


This client-side project contains all the code necessary to reproduce Online Movie Search web application using Angular 4 Javascript framework, Firebase Database and TMDB API.

![home](https://user-images.githubusercontent.com/11573356/57536640-dcbf3680-7344-11e9-90e6-dd28d003d015.png)

```
Functionality:
- login & register using Angular Firestore authentication
- browsing of movies, popular & in theater movies
- search functionality
- search suggestion by typing the first 2-3 letters
- time-range browsing
- movie details
```

Basic project installation steps:
```
1. clone repository
2. cd movie-search
3. npm install
4. create firebase account
5. input firebase credentials in environments/environments.ts & environment.prod.ts
6. in .firebaserc replace the specified string with required information
7. in Firebase page enable Authentication using Email/Password as True
8. create TMDB account
9. input TMDB API key in movie.service.ts
```
