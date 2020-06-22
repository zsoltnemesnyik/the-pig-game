# the-pig-game
A virtual version of the classig Pig Game, created with HTML, CSS and Javascript.

## Installation
Use NPM to install the packages from **package.json**.

```
npm i (install packages)
npm run start (run webpack-dev-server with browsersync and watch scss files)
npm run build (build)
```

## Used technologies
**HTML**, **CSS** (Flexbox, Grid, converted from **SCSS**, based on **ITCSS**), **Vanilla Javascript** (scripts separated to views, modules, and a "global controller"), **Webpack** for building, **Babel** to convert JS back to ES5.

## Usage
This is a virtual version of a classic dice game, called ***The Pig Game***. The game is played by 2 person, the goal is to reach to win the game by reaching the final score first.
On the welcome screen, you can change the final score, which is 100 by default.

```
**RULES**
- if the ACTIVE PLAYER rolls a 1 with any of the dices, that player loses it's CURRENT points, and it's the other player's turn
- if the ACTIVE PLAYER rolls 6 with both dices (2x6), that player loses it's CURRENT and TOTAL points (complete reload of points), and it's the next player's turn 
```
To play the game, you need to roll the dices by clicking on one of them, and you can see your current points under the ***CURRENT*** text of the active player. Remember: your current points are just temporary points, what really count is your ***TOTAL POINTS***, which you can see under the PLAYER1 or PLAYER2 text.

If you think you've risked enough by rolling the dices, click on ***HOLD***, to add your current points to your total. If your total is equal or greater than the desired score (displayed by: ***Score to reach***), you win.

If you would like to start a new game or any player have won the game, click on ***NEW GAME***

## Live version
https://www.thepiggame.nemesnyikzsolt.hu/