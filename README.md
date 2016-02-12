# React Slides Boilerplate
Boilerplate for presentation library based on ReactJS

## How to Present
- Run `npm start`
- Open `localhost:3000` in two browser windows in 2 different screens
- On your screen, press F10 to open **presenter mode**
- Any windows/tabs in the same browser running React Slides will synchronize to one another

## Controls
|Key Combination|Function|
|---|---|
|Right Arrow|Next Slide|
|Left Arrow|Previous Slide|
|Media Button Next|Next Slide|
|Media Button Previous|Previous Slide|
|Space|Next Slide|
|F10|Toggle Presenter Mode|
|F9 while focus in Code Editor|Run JS code from Code Editor|
|F11 while focus in Code Editor|Toggle Fullscreen Mode of Code Editor|

## Creating Presentation
Files representing presentation slides will live in `/src/slides` folder.

The main `.js` file you write your presentation in is `/src/slides/index.js`. There you can include your slide files.

Each slide file should export an object with 2 properties: `content` and `notes`: 
- `content` is `required` and can contain JSX or custom React component. You can also use any preddefined components lile `Link`, `Code`, `Icon` and others
- `notes` is `optional` and may contain an array of strings representing your notes shown in Presenter mode
