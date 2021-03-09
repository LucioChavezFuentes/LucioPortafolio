import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import WebFont from 'webfontloader';

//Providers
import AppProviders from './AppProviders';

//TODO: is urls really working? is Webfont working at all?

/*const fontsLoaded : any[] =  [];
const fontsToLoad = 2;

const app = (fontFamily : string) => {

  fontsLoaded.push(fontFamily);
    if(fontsLoaded.length >= fontsToLoad) {
      ReactDOM.render(
        <AppProviders>
          <App />
        </AppProviders>,
        document.getElementById("root")
      );
    }
  
}

const webFontConfig = {
  custom: {
      families: ['Roboto', 'Roboto Slab'],
      urls: ['/fonts/fonts.css'],
      },
  //active: handleLoadedFonts,
  fontactive: app
};

WebFont.load(webFontConfig);
*/

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);



/*


const webFontConfig = {
  google: {
      families: ['Roboto'],
  },
  custom: {
      families: ['Roboto'],
      urls: [
          './fonts/fonts.css',
        ],
      },
  classes: false,
  timeout: 1000,
  active: app, // invoked when fonts are active
};

const webFontConfig2 = {
  google: {
      families: ['Roboto'],
  },
  custom: {
      families: ['FontAwesome', 'Roboto', 'Roboto Slab'],
      urls: [
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons',
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
          'https://opensource.keycdn.com/fontawesome/4.7.0/font-awesome.min.css',
      ],
  },
  classes: false,
  timeout: 1000,
  active: app, // invoked when fonts are active
};

// application entry point
WebFont.load(webFontConfig2);
*/