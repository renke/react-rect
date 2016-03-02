import isEqual from "lodash.isequal";
import ElementResizeDetector from "element-resize-detector";
import React, {Component} from "react";
import {findDOMNode} from "react-dom";

const defaults = {
  propKey: "rect",
  defaultRect: {width: 0, height: 0},
  computeRect: defaultComputeRect,
};

function defaultComputeRect(node) {
  const rect = node.getBoundingClientRect();

  const width = rect.right - rect.left;
  const height = rect.bottom - rect.top;

  return {width, height};
}

export default function Rect({propKey, defaultRect, computeRect} = defaults) {
  return InnerComponent => class extends Component {
    static displayName = "Rect";

    constructor(props) {
      super(props);

      this.elementResizeDetector = ElementResizeDetector();

      this.state = {
        rect: defaultRect,
      };
    }

    setTarget = target => {
      if (target) {
        this.node = findDOMNode(target);
        this.elementResizeDetector.listenTo(this.node, this.handleResize);
      } else {
        this.elementResizeDetector.removeAllListeners(this.node);
        this.node = null;
        this.setState({rect: defaultRect});
      }
    }

    handleResize = node => {
      const rect = computeRect(node);

      if (!isEqual(this.state.rect, rect)) {
        this.setState({rect});
      }
    }

    render() {
      const rectProps = {
        [propKey]: this.state.rect,
      };

      return <InnerComponent {...this.props} {...rectProps} setTarget={this.setTarget}/>;
    }
  };
}
