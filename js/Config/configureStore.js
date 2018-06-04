 


 
 
import { createStore, applyMiddleware, compose } from 'redux';
 
import { persistStore, persistReducer } from 'redux-persist'
import reducer from '../reducers'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, reducer)
 


export default function configureStore()
{
    const enhancer = compose(
        applyMiddleware(thunk),
        devTools({
          name: 'hungvt_frame', realtime: true,
        }),
      );
    
    let store = createStore(persistedReducer,enhancer)
    let persistor = persistStore(store)
 
    return { store, persistor };
}