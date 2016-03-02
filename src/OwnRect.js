/* eslint-disable react/prop-types */

import React, {Component} from "react";

import Rect from "./Rect";

export default function OwnRect(...options) {
  return InnerComponent => {
    class OuterComponent extends Component {
      static displayName = "ParentRect";

      componentDidMount() {
        this.props.setTarget(this);
      }

      componentWillUnmount() {
        this.props.setTarget(null);
      }

      render() {
        const cleanProps = {...this.props};
        delete cleanProps.setTarget;

        return <InnerComponent {...cleanProps}/>;
      }
    }

    return Rect(...options)(OuterComponent);
  };
}
