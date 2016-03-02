/* eslint-disable react/prop-types */

import React, {Component} from "react";
import {findDOMNode} from "react-dom";

import Rect from "./Rect";

export default function ParentRect(...options) {
  return InnerComponent => {
    class OuterComponent extends Component {
      static displayName = "ParentRect";

      componentDidMount() {
        const node = findDOMNode(this);
        this.props.setTarget(node.parentNode);
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
