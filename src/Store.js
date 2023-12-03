import { configureStore } from "@reduxjs/toolkit"
import FoodcardSlice from "./FoodcardSlice";
import LoginDetailsSlice from "./components/LoginDetailsSlice";


const store = configureStore({
  reducer: {
    fooditemsCard: FoodcardSlice,
    loginDetail: LoginDetailsSlice,
  }

})

export default store;