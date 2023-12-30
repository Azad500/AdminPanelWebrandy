import { configureStore } from "@reduxjs/toolkit"; //state konfiqure etmeye komek edecek
import counterReducer from "../counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer, //her yere gonderile bilecek state var
  }, //qlobal stateleri ozunde saxlayacaq
});
