import React from 'react';
import {render} from 'react-dom';

import RouterConfig from "../app/routerConfig/index";

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
let root = document.getElementById("app");
render(<RouterConfig/>,root);