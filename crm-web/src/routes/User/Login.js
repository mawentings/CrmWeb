
import { Layout, Menu, Breadcrumb, Icon,Form, Input,Button,message,Spin } from 'antd';
import React from 'react';
import * as actions from '../../reducers/loginReducer';
import {connect,push} from 'react-redux'
import './index.css';
const FormItem = Form.Item;
import Head from '../../routes/header/index.js';
/*import  * as actions  from '../../redux/actions/login.js';*/
import api from '../../config/apiConfig';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

/**
 * 定义Login组件
 */
class Logina extends React.PureComponent {


    handleSubmit = (e) => {

        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let login = {};
                console.log('Received values of form: ', values);
                values.grant_type = 'password';
                values.client_id = 'crm';
                values.scope = 'openid';
                login = values;
                const {history}=this.props;

            }
        });
    }
    // controlled components
    handleUsernameInput = (e) => {
        this.setState({username: e.target.value});
    };

    handlePasswordInput = (e) => {
        this.setState({password: e.target.value});
    };



    render() {
        const {getFieldDecorator} = this.props.form;
        return (

            <Layout style={{ minHeight: '100vh' }}>
                {/*侧栏*/}

                <Sider
                    collapsible collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

                        <SubMenu
                            key="sub1"
                            title={<span> <Icon type="desktop"/><span>--登录页面--</span></span>}
                        />
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>- -》》--</span></span>}
                        />
                    </Menu>
                </Sider>

                <Layout>
                    <h2 style={{background:'#3c3c3c',color:'white',padding:10}}>
                        广力咨询系统<Head/>
                    </h2>
                    <Header style={{ background: '#fff', padding: 0 }}>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item></Breadcrumb.Item>
                            <Breadcrumb.Item></Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding:10, background: '#fff', minHeight: 360}}>
                            <Spin spinning={this.state.loadingType} delay={500} tip="Loading...">
                                {console.log("let see me",this.state.loadingType)}
                                <div className="Absolute-Center">
                                    <Form onSubmit={this.handleSubmit} className="login-form">
                                        {/*<h1>{globalConfig.name}</h1>*/}
                                        <FormItem>
                                            {getFieldDecorator('username',{
                                                rules: [{required: true, message: 'Please input your username!'}],
                                            })(
                                                <Input autoFocus onChange={this.handleUsernameInput}
                                                       prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名"/>
                                            )}
                                        </FormItem>

                                        <FormItem>
                                            {getFieldDecorator('password',{
                                                rules: [{required: true, message: 'Please input your Password!'}],
                                            })(
                                                <Input onChange={this.handlePasswordInput}
                                                       prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                                       placeholder="密码"/>
                                            )}

                                        </FormItem>
                                        <FormItem>
                                            <Button type="primary" htmlType="submit" className="login-form-button">
                                                登录
                                            </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <Button type="primary" htmlType="button" className="login-form-button" onClick={this.handleClear}>
                                                取消
                                            </Button>

                                        </FormItem>
                                        {/*{this.state.loadingType==true&&<Icon type="loading" style={{ fontSize: 24 }} spin />}*/}
                                    </Form>
                                </div>
                            </Spin>
                        </div>
                    </Content>
                    <Footer style={{height:'5px'}}>
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(Logina);

function mapStateToprpos(state) {
    return {loading: state.login.loading}
}
export default connect(mapStateToprpos,actions)(WrappedNormalLoginForm);
