//最核心的管理者
//引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux'
//引入汇总之后的reducer
import reducers from './reducers'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
//引入redux-devtools-extension,用于支持redux开发者调试工具的运行
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
const storageConfig = {
    key: 'root', // 必须有的
    storage: storageSession, // 缓存机制

    blacklist: [] // reducer 里不持久化的数据,除此外均为持久化数据
}
const myPersistReducer = persistReducer(storageConfig, reducers);
const store = createStore(myPersistReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store)


//暴露store 
export default store

