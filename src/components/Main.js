import React, { Component } from "react";
import { Link } from "react-router-dom";
import { injectIntl, defineMessages } from "react-intl";

const messages = defineMessages({
  title: {
    id: "app.title",
    defaultMessage: "Welcome to React"
  },
  content1: {
    id: "app.content1",
    defaultMessage: "To get started, edit"
  },
  content2: {
    id: "app.content2",
    defaultMessage: "and save to reload."
  },
  content3: {
    id: "app.content3",
    defaultMessage: "External link examples (page reload)"
  },
  about: {
    id: "app.about",
    defaultMessage: "About Us"
  }
});

class Main extends Component {
  render() {
    const {
      intl: { formatMessage }
    } = this.props;

    return (
      <div className="mt-2">
        <div className="jumbotron">
          <h1 className="display-4">{formatMessage(messages.title)}</h1>
          <p className="lead">
            {formatMessage(messages.content1)} <code>src/App.js</code>{" "}
            {formatMessage(messages.content2)}
          </p>
          <hr className="my-4" />
          <Link className="btn btn-primary" to="/about">
            {formatMessage(messages.about)}
          </Link>
        </div>
        <div>
          <ul>
            {formatMessage(messages.content3)}:
            <li>
              <a href="/?locale=ar">العربية</a>
            </li>
            <li>
              <a href="/?locale=en">English</a>
            </li>
            <li>
              <a href="/?locale=es">Español</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default injectIntl(Main);
