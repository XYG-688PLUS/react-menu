import React from "react";
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import {menuRoute} from '../../route/route'
import { message } from 'antd';
const { Search } = Input;
const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

const onSearch = (value: string) => {
    console.log('当前修改为',value)
    message.success('当前修改为:'+value+'切换路由实现自动刷新')
    menuRoute[1].subMenu[1].name=value
}
function priceConfig(){
    return (
        <Search
            placeholder="修改子导航2"
            allowClear
            enterButton="修改"
            size="large"
            onSearch={onSearch}
            />
            )
}
export default priceConfig