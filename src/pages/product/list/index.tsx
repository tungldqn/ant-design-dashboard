import { Card, Table } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'umi';

interface ProductListProps {
  dispatch: Function;
  productList: object[];
  productListLoading: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ dispatch, productList, productListLoading }) => {
  useEffect(() => {
    dispatch({
      type: 'product/fetchProductList',
    });
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  return (
    <Card loading={productListLoading}>
      <Table columns={columns} dataSource={productList} rowKey="id" />
    </Card>
  );
};

const mapConnectToProps = ({
  product,
  loading,
}: {
  product: any;
  loading: {
    effects: { [key: string]: boolean };
  };
}) => ({
  productList: product.list,
  productListLoading: Boolean(loading.effects['product/fetchProductList']),
});

export default connect(mapConnectToProps)(ProductList);
