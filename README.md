<p align="center">
   <img src="/assets/tilt-left.png" width="80px">&nbsp;&nbsp;&nbsp;&nbsp;
   <img src="/assets/tilt.png" width="80px">&nbsp;&nbsp;&nbsp;&nbsp;
   <img src="/assets/tilt-right.png" width="80px">
   <h1 align="center">tilt-saturate</h1>
</p>

<p align="center">
</p>

<p align="center">
   <h2 align="center"><a href="https://slutske22.github.io/tilt-saturate">&#128064; Demo &#128064;</a></h2>
</p>

## About

tile-saturate is a simple web-app that opens a webcam in the browser and applies a filter based on the orientation of the mobile device being used.  Tilt the device clockwise, and the video feed will become more [saturated](https://photographylife.com/what-is-saturation-and-how-to-get-optimal-saturation).  Tilt it counter-clockwise, and it will become less saturated.

## Central Concept

tilt-saturate uses [react-webcam](https://github.com/mozmorris/react-webcam), a simple solution to creating a `<video>` component which displays the webcam feed of the user's device. When the webcam component mounts, it checks to see if the `window` has a `DeviceOrientationEvent` property.  If so, it attaches a listener to the `deviceorientation` event and stores the `gamma` position variable from the event.  Based on the value of `gamma`, which is the tilt orientation of the device in the same plane as the screen, a [css filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) is updated on the `<Webcam />` component via the `style` prop.

## Environments

This app has been tested in the following environments:

- Mac OS Catalina 10.15.6, Chrome Version 84.0.4147.125
- XCode iPhone 11 simulator, iOS 13.7, Safari Browser
- iPhone 11 Pro, iOS 13.7, Safari Browser

## Challenges

**HTTPS Required:**<br>
tilt-saturate is built on create-react-app (CRA).  CRA's development environment uses webpack-dev-server, and is configured for use with the `http` protocol.  While developing the app, the webcam refused to cooperate with this environment.  This is because a webpage reading video feed from a user's webcam must communicate via the more secure `https` protocol.  This problem is solved by prefixing the `start` script in `package.json` with `HTTPS=true`.

**Give Device Permission to Read Motion Events:**<br>
In 2019, Apple [limited access to motion events in iOS safari by default](https://www.macrumors.com/2019/02/04/ios-12-2-safari-motion-orientation-access-toggle/).  This means that attempting to access the `deviceorientation` event requires deliberate approval by the user.  The function `DeviceOrientationEvent.requestPermission()` is available, but must be called explicitly by a `click` event (or similar), as opposed to being called programatically.  There is now a button on the `<Overlay />` component which allows the user to explicitly grant permission to the browser to use native mobile device motion events.

**Creating a Development / Desktop Experience:**<br>
Considering tilt-saturate relies in mobile device motion events for its central feature, the app is difficult to test / play with in development, or when using on a desktop/laptop browser.  While a dev can [simulate motion events in Chrome devtools](https://developers.google.com/web/tools/chrome-devtools/device-mode/orientation), this is a painful and clunky experience.  I implemented the `<Simulator />` component, which makes the same saturate-on-tilt experience available through a [circular slider](https://github.com/petecorreia/react-circular-input).

## Room for Improvement

**OS & Browser Compatibility:**<br>
OS and Browser compatibility is bound to be an issue.  I had a friend try this app on their iPhone 7, and they said the app is not responding to the native tilt motions (though the simulator does work).  Unfortunately, the latest version of Xcode only goes back to iPhone 8, so I was not able to test earlier iPhones.  And Xcode is not able to communicate with the developer environment's camera, so it is not possible to truly test the app with Xcode.  As far as other mobile devices go, more testing is needed.  Additionally, some browsers don't support CSS filters at all, so a [polyfill](https://github.com/Schepp/CSS-Filters-Polyfill) is needed to expand compatbility.

<hr>

## Available Scripts

All scrips are inherited from a standard create-react-app application.  In the project directory, you can run:
#### `npm start`

Runs the app in the development mode.<br />
Open [https://localhost:3000](https://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm run start:http`

Runs `react-scripts start` with standard http.  Useful for development on gitpod.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run deploy`

Deploys a new build to the `github-pages` branch of the repo.

<hr>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
