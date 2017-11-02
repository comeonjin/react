//由于使用了redux 和 react-redux, 所以要求store必须只有一个,创建的store用于整个项目数据的存储和处理

import {createStore} from "redux";
import reducer from "./reducer";

const store = createStore(reducer);
export default store;