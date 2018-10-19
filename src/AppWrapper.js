import React, { Component } from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import arLocaleData from "react-intl/locale-data/ar";
import esLocaleData from "react-intl/locale-data/es";
import translations from "./i18n/locales";
import App from "./App";
import { inject, observer } from "mobx-react";

addLocaleData(arLocaleData);
addLocaleData(esLocaleData);

const AppWrapper = inject("storeState")(
  observer(
    class AppWrapper extends Component {
      componentDidMount() {
        // get locale from url or browser (url param higher priority)
        const urlParams = getParams(window.location)
        if (urlParams.locale && urlParams.locale.length === 2) {
          this.props.storeState.setLang(urlParams.locale);
        } else if (navigator && navigator.language) {
          this.props.storeState.setLang(navigator.language);
        }
      }

      render() {
        // default locale == 'en'
        let locale = this.props.storeState.lang;
        const messages = translations[locale];
        return (
          <IntlProvider locale={locale} key={locale} messages={messages}>
            <App />
          </IntlProvider>
        );
      }
    }
  )
);

// This works in all modern browsers, and back to at least IE6.
// https://gomakethings.com/getting-all-query-string-values-from-a-url-with-vanilla-js/
function getParams(url) {
  var params = {};
  var parser = document.createElement("a");
  parser.href = url;
  var query = parser.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  return params;
}

export default AppWrapper;
