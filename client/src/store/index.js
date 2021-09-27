import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import bookingReducer from "./reducers/bookingReducer";
import podReducer from "./reducers/podReducer";
import consignerReducer from "./reducers/consignerReducer";
import consigneeReducer from "./reducers/consigneeReducer";
import manifestReducer from "./reducers/manifestReducer";
import trackingReducer from "./reducers/trackingReducer";
import printReducer from "./reducers/printReducer";
import profileReducer from "./reducers/profileReducer";
import adminReducer from "./reducers/adminReducer";



export default configureStore({
  reducer: {
      users:userReducer,
      bookings:bookingReducer,
      pods:podReducer,
      consigners:consignerReducer,
      consignees:consigneeReducer,
      manifests:manifestReducer,
      trackings:trackingReducer,
      prints:printReducer,
      profile:profileReducer,
      admin:adminReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

