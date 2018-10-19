import React from "react";
import PropTypes from "prop-types";
import { injectIntl, defineMessages } from "react-intl";
import { inject, observer } from "mobx-react";

const messages = defineMessages({
  title: {
    id: "navbar.title",
    defaultMessage: "Navigation Bar"
  }
});

const Navbar = inject("storeState")(
  observer(({ storeState, intl }) => {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          {intl.formatMessage(messages.title)} (lang = {storeState.lang})
        </span>
        <form className="form-inline">
          <button className="btn btn-sm btn-outline-success mr-1" type="button" onClick={() => storeState.setLang("en")}>
            English
          </button>
          <button className="btn btn-sm btn-outline-success mr-1" type="button" onClick={() => storeState.setLang("es")}>
            Spanish
          </button>
          <button className="btn btn-sm btn-outline-success" type="button" onClick={() => storeState.setLang("ar")}>
            Arabic
          </button>
        </form>
      </nav>
    );
  })
);

Navbar.wrappedComponent.propTypes = {
  storeState: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
};

export default injectIntl(Navbar);
