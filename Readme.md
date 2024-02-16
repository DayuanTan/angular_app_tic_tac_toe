# Angular App - Tic Tac Toe

## Steps

1. Build an app
2. Make it look good
3. Deploy it
4. Install it

## Records

```
$cd angular_app_tic_tac_toe
$npm install -g @angular/cli
$ng new myapp

- Choose SCSS when asking CSS/SCSS/Sass/Less
- Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? Yes
```

Because Angular Console doesn't exist anymore. Nx Console replaced it.
And Nx console doesn't recognize the above created "myapp" folder. 
So I use Nx to create the "myorg" folder/workspace.

```
\angular_app_tic_tac_toe> npx create-nx-workspace

 >  NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

√ Where would you like to create your workspace? · myorg
√ Which stack do you want to use? · angular
√ Integrated monorepo, or standalone project? · standalone
√ Which bundler would you like to use? · esbuild
√ Default stylesheet format · scss
√ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? · Yes
√ Test runner to use for end to end (E2E) tests · cypress
√ Set up CI with caching, distribution and test deflaking · skip
√ Would you like remote caching to make your build faster? · skip
```

The myapp and myorg folder actually have very similar file architecutre.
Next I will follow steps in the (previous video](https://www.youtube.com/watch?v=G0bBLvWXBvc&list=PL0vfts4VzfNjsTV_6i9a9iczMnthWqHzM&index=9) to develop the tic tac toe app but inside the myorg folder.


For those steps following videos, please see may commits:
- [https://github.com/DayuanTan/angular_app_tic_tac_toe/commits/main/](https://github.com/DayuanTan/angular_app_tic_tac_toe/commits/main/)
    - http://localhost:4200/ shows square works!
    - add a random number property in component class then bind it to the template
    - a random number changes every 500 ms works well
    - generate a board component with default setting
    - game works now with plain ui


Next, use [Nebula](https://akveo.github.io/nebular/docs/guides/install-nebular#install-nebular) to make it more beautiful. 



