// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  history: {
    type: 'browser',
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      redirect: '/product/list',
    },
    {
      path: '/product',
      name: 'Product',
      component: '@/layouts/Basic',
      routes: [
        {
          path: '/product/list',
          name: 'List',
          component: './product/list',
        },
      ],
    },
    {
      component: '404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // 'primary-color': defaultSettings.primaryColor,
  },
  title: false,
  ignoreMomentLocale: true,
  // proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  exportStatic: {},
  esbuild: {},
});
