import React from 'react';
import ProLayout from '@ant-design/pro-layout';

const BasicLayout = ({ children, ...rest }) => {
  return <ProLayout {...rest}>{children}</ProLayout>;
};

export default BasicLayout;
