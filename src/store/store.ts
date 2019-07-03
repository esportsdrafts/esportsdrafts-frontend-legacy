
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { getStoreBuilder, BareActionContext } from 'vuex-typex'

Vue.use(Vuex);

export interface RootState {
    user: UserState
}

const store: Store<RootState> = getStoreBuilder<RootState>().vuexStore()
export default store

type authStatus = 'unauthorized' | 'authorized' | '2fa';

export interface UserState {
    username: string,
    roles: Array<string>,
    userID: string,
    loginStatus: authStatus,
}

const storeBuilder = getStoreBuilder<RootState>()
const moduleBuilder = storeBuilder.module<UserState>('user', {
    username: 'unknown',
    roles: [],
    userID: '',
    loginStatus: 'unauthorized'
})

namespace user {
    const
}
export default user;
