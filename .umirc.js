// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  // routes: [
  //   {
  //     path: '/class/index',
  //     component: './class/index',
  //   },
  //   {
  //     path: '/',
  //     component: '../layouts/index', // routes: [
  //     //   {
  //     //     path: '/demo',
  //     //     component: './demo',
  //     //   },
  //     //   {
  //     //     path: '/',
  //     //     component: '../pages/index',
  //     //   },
  //     // ],
  //   },
  // ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: false,
        title: 'umi2',
        dll: false,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};
