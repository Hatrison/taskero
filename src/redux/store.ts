import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { authReducer } from "./auth/authSlice";
import { userReducer } from "./user/userSlice";
import { themeReducer } from "./theme/themeSlice";
import { companiesReducer } from "./companies/companiesSlice";
import { projectsReducer } from "./projects/projectsSlice";
import { columnsReducer } from "./columns/columnsSlice";
import { tasksReducer } from "./tasks/tasksSlice";
import { commentsReducer } from "./comments/commentsSlice";
import { reviewsReducer } from "./reviews/reviewsSlice";

const themePersistConfig = {
  key: "theme",
  storage,
};

const companiesPersistConfig = {
  key: "companies",
  storage,
  whitelist: ["current"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  theme: persistReducer(themePersistConfig, themeReducer),
  companies: persistReducer(companiesPersistConfig, companiesReducer),
  projects: projectsReducer,
  columns: columnsReducer,
  tasks: tasksReducer,
  comments: commentsReducer,
  reviews: reviewsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const baseMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    return process.env.NODE_ENV === "development"
      ? baseMiddleware.concat(logger)
      : baseMiddleware;
  },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
