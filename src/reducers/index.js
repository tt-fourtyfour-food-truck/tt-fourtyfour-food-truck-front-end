import { combinedReducers } from 'redux';

import { AuthReducer } from './AuthReducer';
import { AppReducer } from './AppReducer';

const rootReducer = combinedReducers({
    auth: AuthReducer,
    app: AppReducer,
});

export default rootReducer;