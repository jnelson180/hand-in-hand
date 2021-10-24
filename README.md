# Getting started / contributing

To get started, you will need node and either npm or yarn installed on your machine. It is currently confirmed to work with node v14.16.1, yarn v1.22.10, and npm v6.14.12, although newer versions of these should work as well.

In order to install the needed libraries, `cd` to the root directory and run `npm install` or `yarn install`, then `npm start` or `yarn start`. This will start the web server at http://localhost:3000.

The project structure is laid out in the default CRA-MHL structure, with `src` looking like the below tree. Each page and component has its own `.scss`, `.tsx`, and `.test.tsx` file-- all styles and tests are located at the component/page level. 

There are also some shared styles in `/styles` and `index.scss` in `src`. 

* src
  * [assets/](./src/assets)
    * images and other resources
  * [components/](./src/components)
    * [Box/](./src/components/Box)
      * [Box.scss](./src/components/Box/Box.scss)
      * [Box.test.tsx](./src/components/Box/Box.test.tsx)
      * [Box.tsx](./src/components/Box/Box.tsx)
  * [features/](./src/features)
  * [hooks/](./src/hooks)
  * [layout/](./src/layout)
  * [model/](./src/model)
  * [pages/](./src/pages)
    * [Landing/](./src/pages/Landing)
      * [Landing.scss](./src/pages/Landing/Landing.scss)
      * [Landing.test.tsx](./src/pages/Landing/Landing.test.tsx)
      * [Landing.tsx](./src/pages/Landing/Landing.tsx)
  * [redux/](./src/redux)
    * [store.ts](./src/redux/store.ts)
  * [styles/](./src/styles)
    * [_mixins.scss](./src/styles/_mixins.scss)
    * [_variables.scss](./src/styles/_variables.scss)
  * [widgets/](./src/widgets)
  * [App.scss](./src/App.scss)
  * [App.test.tsx](./src/App.test.tsx)
  * [App.tsx](./src/App.tsx)
  * [AppRouter.test.tsx](./src/AppRouter.test.tsx)
  * [AppRouter.tsx](./src/AppRouter.tsx)
  * [index.scss](./src/index.scss)
  * [index.tsx](./src/index.tsx)
  * various configs

In order to get started with your first commit, please clone into this repo and create a feature branch (`git checkout -b my-feature`). Once your work is ready for review, feel free to push the branch and open a PR.

# Template
This project was started by the Must Have Libraries CRA template. 

Out of the box, it gives us the following features: 

- React v17.0.2
- Type Checker - TypeScript ^4.2.3
- Preprocessors - Sass/SCSS
- State management - Redux Toolkit, Recoil
- CSS Framework - Material-UI
- CSS-in-JS Modules — Styled Components
- Router - React Router
- Unit Testing - Jest & Enzyme + Sinon
- E2E Testing - Jest & Puppeteer
- Folder structure
- Generate templates
- Format & Lint - ESLint & Prettier
- Useful utilities - Moment, Classnames, Serve, react-snap, React-Helmet, Analyzer Bundle, react-uuid.

## Run Scripts

Inside the project directory run:

- `yarn start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `yarn test` - launches the test runner in the interactive watch mode.
- `yarn build` - builds the app for production to the `build` folder. 
- `yarn build:serve` - run a local static build using the production build using serve library. Install `yarn install -g serve`.
- `yarn build:profile` - profiling production build. 
- `yarn eject` - exposes content of `react-script` package
- `yarn lint` - lints project files according to Airbnb — as part of their style guide 👍 — it provides an ESLint configuration that anyone can use and it is the standard.
- `yarn fix` - fix lints issues according to style guide set.
- `yarn format` - will format your code prettier using opinionated settings inside `.prettierrc` file.
- `yarn isready` - will check if the code is ready for showtime (production), run lint, format and build.
- `yarn test:e2e` - run e2e integration testing with the help of Jest & Puppeteer.
- `yarn test:e2e-watch` - same as test:e2e just with a watcher.
- `yarn test:e2e-alone` - stand-alone e2e integration testing NodeJS script for testing using Puppeteer.
- `yarn test:debug` - debug your jest tests using the debugger statement, more info [here](https://medium.com/react-courses/six-best-debugging-options-to-crush-your-reacts-bugs-like-a-champion-70b11b6a1a2d).
- `yarn coverage` - this test is to create a coverage report at needs extra setting in order to work as expected.
- `analyze` - source-map-explorer to Analyzer Bundle.
- `analyzer` - uses cra-bundle-analyzer to Analyzer Bundle.

CRA template only support `scripts` and `dependencies` inside generated `package.json`. No `devDependencies` is possible on CRA template for now.

## Need bootstrap?

If you need bootstrap. Just add;
```
$ yarn add bootstrap
```
Uncomment import in index.tsx; 
```
import 'bootstrap/dist/css/bootstrap.css';
```

More here: https://create-react-app.dev/docs/adding-bootstrap

## Router + State Management

Router via React Router v5.2.0 and is set on 'AppRouter.tsx' and included in 'index.tsx', read [here](https://medium.com/react-courses/how-to-integrate-routing-in-typescript-project-with-react-router-v5-2-0-a6b0ab160a1b).

The code is set for [Redux Toolkit](https://medium.com/react-courses/instant-learn-react-redux-toolkit-with-a-simple-minimalistic-example-3c63c296ed65), but could easily be converted to use some other architecture. The CRA-MHL template also comes with support for Recoil out of the box (although those files have been removed for brevity).

## Unit Testing (out of the box)

Unit Testing is supported with [Enzyme](https://airbnb.io/enzyme/) that works with [Jest](https://github.com/facebook/jest).  Additionally, [Sinon](https://github.com/sinonjs/sinon) - a standalone test spies, stubs and mocks that works with Enzyme & Jest.  

Jest and Sinon serve the same purpose. So why add Sinon? 
The answer is that there are times that you may find one framework more natural and easier to work for the specific test you need than the other so it wouldn’t hurt to have both.

You can compare the list of APIs on Jest (https://jestjs.io/docs/en/api) and Sinon (https://sinonjs.org/releases/v9.2.0/)


The 'src/setupTests.ts' file is already configured to work with enzyme using the enzyme react adapter. 

For snapshot -- update 'package.json';

```
// package.json
  "jest": {
    "snapshotSerializers": ["enzyme-to-json/serializer"]
  }
```

Note: remember to update / delete 'src/App.test.tsx' in case you update 'App.tsx'

For instance to check if a component you added
include in App.tsx;

```
import { shallow } from "enzyme";
import Calculator from "./components/SomeComponent/SomeComponent";

test('should render SomeComponent', () => {
  const wrapper = shallow(<App />);
  const calculator = wrapper.find(SomeComponent);
  expect(calculator.exists()).toBe(true);
})
```

You can read more about unit testing: [hello-jest-enzyme-ts](https://medium.com/react-courses/unit-testing-react-typescript-app-with-jest-jest-dom-enzyme-11f52487aa18) 

To run the tests: 

`$ yarn test`

## E2E Testing

E2E testing provided by Jest & Puppeteer.  Check the E2E folder for stand-alone and testing app.test.tsx component.  You can read more about it [here](https://medium.com/react-courses/deliver-quality-software-reduce-qa-load-integrate-end-to-end-e2e-testing-on-cra-react-a20486a39ac2?sk=c9610ea9812363b262f141f1c30ae445).

To run the E2E stand-alone and Jest & Puppeteer tests run;

`$ yarn test:e2e`

And;

`$ yarn test:e2e-alone`

## Eslint configurations

Lint set according to Airbnb style guide — as part of their style guide. Feel free to tweak `.eslintrc`.

## Format configurations

[Prettier](https://prettier.io/) is set using CRA-MHL opinionated settings, feel free to [tweak prettier rules](https://prettier.io/docs/en/configuration.html) inside config file `.prettierrc` to match your preferred code style.

## Configure Components Templates

[generate-react-cli](https://github.com/arminbro/generate-react-cli) help speed up productivity in React projects, feel free to tweak rules inside the config file `generate-react-cli.json` to match your needs.

## Optimizing

- Prerender - almost static pages using `react-snap`. See comments in: `src/index.tsx`;
- Precache - src/index.tsx > `serviceWorker.register()`
- Analyzer Bundle - `yarn add -D cra-bundle-analyzer` -> Create the report: `npx cra-bundle-analyzer`