import mainApi from '@/api';
import { Product } from './data.d';

const initState = {
  list: [],
};

const Model = {
  namespace: 'product',
  state: initState,
  effects: {
    *fetchProductList(_: any, { call, put }) {
      try {
        const res = yield call(mainApi.getRequest, 'products');
        yield put({
          type: 'save',
          payload: {
            list: res.data,
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  reducers: {
    save(state: Product, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    clear() {
      return initState;
    },
  },
};

export default Model;
