import React from "react";
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import {menuRoute} from '../../route/route'
const { Search } = Input;
import { message } from 'antd';
const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
const onSearch = (value: string) => {
    menuRoute[0].subMenu[0].name=value
    message.success('当前修改为:'+value+'切换路由实现自动刷新')
}
function list(){
    return (
        <Search
            placeholder="修改子导航1"
            allowClear
            enterButton="修改"
            size="large"
            onSearch={onSearch}
            />
            )
}
export default list