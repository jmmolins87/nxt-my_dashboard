


import { configureStore } from '@reduxjs/toolkit';
import { 
  useDispatch, 
  TypedUseSelectorHook, 
  useSelector 
} from 'react-redux';

// import { localStorageMiddleware } from './middlewares/localstorage-middleware';
import counterSlice from './counter/CounterSlice';
import pokemonsSlice from './pokemons/pokemons';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    pokemons: pokemonsSlice
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(localStorageMiddleware as import('@reduxjs/toolkit').Middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;