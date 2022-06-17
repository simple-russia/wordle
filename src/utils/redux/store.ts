import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';
// import { con } from '@redux-devtools/extension/lib/types/logOnly';
import thunk from 'redux-thunk'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
)

export { store }