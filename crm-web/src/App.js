import React,{Component} from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import { Link, Route, Redirect } from 'react-router-dom';
import moment from 'moment'

import ShowUser from './routes/admin/adminCheckUser.js'
import AdminMain from './routes/mainPage/index.js'
import './App.css';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
{/*moment 解决日期问题*/}
moment.locale('zh-cn');


class App extends Component {
  render() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/*根据用户角色不同  决定侧栏 一个用户拥有可拥有多个角色*/}
           {/* {this.state.userrole==1?<AdminSide/>
                :<CommonUser/>
            }*/}
          <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
          >

            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

                <Link to={`${match.url}/mainPage`}>
                <SubMenu
                    key="sub1"
                    title={<span><Icon type="pie-chart" /><span>工作台</span></span>}
                />
              </Link>
              <SubMenu
                  key="sub2"
                  title={<span><Icon type="user" /><span>系统管理</span></span>}
              >
                <Menu.Item key="3">
                  <Link to={`${match.url}/showUser`}>查看用户</Link>
                {/*  <Link to="/showTable" >查看用户</Link>*/}
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/showTable"> 角色管理</Link>
                </Menu.Item>
                <Menu.Item key="5">课程管理</Menu.Item>
              </SubMenu>

              <SubMenu
                  key="sub3"
                  title={<span><Icon type="team" /><span>重新加载</span></span>}
              />
            </Menu>
          </Sider>


          <Layout>
            <h2 style={{background:'#3c3c3c',color:'white',padding:10}}>
              广力咨询系统<Head />
            </h2>
            <Header style={{ background: '#fff', padding: 0 }}>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item></Breadcrumb.Item>
                <Breadcrumb.Item></Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding:10, background: '#fff', minHeight: 360}}>

                <Route path={`${match.url}/mainPage`} component={AdminMain} />
                <Route path={`${match.url}/showUser`} component={ShowUser} />
              </div>
            </Content>
            <Footer style={{height:'5px'}}>
            </Footer>
          </Layout>
        </Layout>
    );
  }
}

export default App;
