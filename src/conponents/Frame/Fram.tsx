import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {useNavigate} from 'react-router-dom'

const { Header, Content, Sider } = Layout;
import {menuRoute} from '../../route/route'
// import SubMenu from 'antd/lib/menu/SubMenu';
const {SubMenu}=Menu
function Frame(props){
    const to=useNavigate()
    return (
        <Layout>
        <Header className="header">
            <h1 className="hi-color">页面测试绑定修改MENU</h1>
          {/* <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            //   items={items2}
            >
                {
                menuRoute.map(route=>{
                    return(<SubMenu key={route.key} icon={<UserOutlined/>} title={route.title}>
                        {route.subMenu.map(menuchild=>{
                            //路由映射
                           return <Menu.Item key={menuchild.path} onClick={()=>{to(menuchild.path)}}>{menuchild.name}</Menu.Item>
                        })}
                    </SubMenu>)
                })
              }
           </Menu>     
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
}
export default Frame