/* eslint-disable react/prop-types, react/no-multi-comp */
// eslint-disable-next-line
import "file-loader?name=index.html!./index.html";

import React, {Component} from "react";
import {render} from "react-dom";

import Rect, {OwnRect, ParentRect} from "../../src";

@Rect()
class RectExample extends Component {
  render() {
    return <div style={{padding: "1rem", margin: "1rem", background: "#FF851B"}}>
      <h1>@Rect ­— Size of child element</h1>
      <p><b>Size of yellow box:</b> {JSON.stringify(this.props.rect)}</p>
      <div ref={this.props.setTarget} style={{padding: "1rem", background: "#FFDC00", display: "inline-block"}}>
        <textarea style={{resize: "both"}} defaultValue="Resize me!"/>
      </div>
    </div>;
  }
}

@OwnRect()
class OwnRectExample extends Component {
  render() {
    return <div style={{padding: "1rem", margin: "1rem", background: "#FF851B"}}>
      <h1>@OwnRect ­— Component's own size</h1>
      <p><b>Size of orange box:</b> {JSON.stringify(this.props.rect)}</p>
      <div style={{padding: "1rem", background: "#FFDC00", display: "inline-block"}}>
        <textarea style={{resize: "both"}} defaultValue="Resize me!"/>
      </div>
    </div>;
  }
}

@ParentRect()
class ParentRectExample extends Component {
  render() {
    return <div style={{padding: "1rem", margin: "1rem", background: "#FF851B"}}>
      <h1>@ParentRect ­— Size of component's parent</h1>
      <p><b>Size of red box:</b> {JSON.stringify(this.props.rect)}</p>
      <div style={{padding: "1rem", background: "#FFDC00", display: "inline-block"}}>
        <textarea style={{resize: "both"}} defaultValue="Resize me!"/>
      </div>
    </div>;
  }
}

@Rect()
class Example extends Component {
  render() {
    return <div style={{padding: "1rem", background: "#FF4136"}}>
      <RectExample/>
      <OwnRectExample/>
      <ParentRectExample/>
    </div>;
  }
}

render(<Example/>, document.getElementById("example"));
