import React from "react";
import { Link } from "react-router-dom";
import { injectIntl, defineMessages } from "react-intl";

const messages = defineMessages({
  home: {
    id: "about.home",
    defaultMessage: "Home"
  },
  about: {
    id: "app.about",
    defaultMessage: "About Us"
  }
});

const About = props => {
  const {
    intl: { formatMessage }
  } = props;

  return (
    <div className="mt-2">
      <div className="jumbotron">
        <h1 className="display-4">{formatMessage(messages.about)}</h1>
        <hr class="my-4" />
        <Link className="btn btn-primary" to="/">
          {formatMessage(messages.home)}
        </Link>
      </div>
    </div>
  );
};

export default injectIntl(About);
