import React, { FC } from "react";
import { render } from "react-dom";

const Index: FC = () => {
	return <h1>hello world</h1>;
};

render(<Index />, document.getElementById("root"));
