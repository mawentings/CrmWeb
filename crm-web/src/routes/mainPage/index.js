/**
 * Created by LGH on 2018/4/11.
 */
import React from 'react';
import {connect} from 'react-redux'

import {Input, Icon, Select, Row, Col, Button, Layout, Card, Collapse, Table} from 'antd';
import './index.css';

const {Header, Content, Footer} = Layout;
const Option = Select.Option;
const Panel = Collapse.Panel;
const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}, {
    key: '3',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}, {
    key: '4',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}, {
    key: '5',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}, {
    key: '6',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}, {
    key: '7',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}, {
    key: '8',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}, {
    key: '9',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}, {
    key: '10',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}, {
    key: '11',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}, {
    key: '12',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}, {
    key: '13',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}];
const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

/*登记咨询人信息*/
class mainPage extends React.PureComponent {

    render() {
        return (
            <Row>
                <Col span={24}>
                    {/*访问来源*/}
                    <Row className="mainPage_Row">
                        <Col>
                            <Card title="访问来源" extra={<Select defaultValue="all" style={{width: 120}}>
                                <Option value="all">全部</Option>
                            </Select>}>
                                <Card.Grid className=".gridStyle">
                                    <Row>
                                        <Col span={10}>
                                            <h2>
                                                <Icon type="phone"/>&nbsp;&nbsp;回访数:
                                            </h2>
                                        </Col>
                                        <Col offset={11} span={3}>
                                            <h2>0</h2>
                                        </Col>
                                    </Row>
                                </Card.Grid>
                                <Card.Grid className=".gridStyle">
                                    <Row>
                                        <Col span={10}>
                                            <h2>
                                                <Icon type="check"/>&nbsp;&nbsp;有效回访数:
                                            </h2>
                                        </Col>
                                        <Col offset={11} span={3}>
                                            <h2>0</h2>
                                        </Col>
                                    </Row>
                                </Card.Grid>
                                <Card.Grid className=".gridStyle">
                                    <Row>
                                        <Col span={10}>
                                            <h2>
                                                <Icon type="coffee"/>&nbsp;&nbsp;上门数:
                                            </h2>
                                        </Col>
                                        <Col offset={11} span={3}>
                                            <h2>0</h2>
                                        </Col>
                                    </Row>
                                </Card.Grid>
                                <Card.Grid className=".gridStyle">
                                    <Row>
                                        <Col span={10}>
                                            <h2>
                                                <Icon type="bulb"/>&nbsp;&nbsp;定位数:
                                            </h2>
                                        </Col>
                                        <Col offset={11} span={3}>
                                            <h2>0</h2>
                                        </Col>
                                    </Row>
                                </Card.Grid>
                                <Card.Grid className=".gridStyle">
                                    <Row>
                                        <Col span={10}>
                                            <h2>
                                                <Icon type="flag"/>&nbsp;&nbsp;报名数:
                                            </h2>
                                        </Col>
                                        <Col offset={11} span={3}>
                                            <h2>0</h2>
                                        </Col>
                                    </Row>
                                </Card.Grid>
                            </Card>
                        </Col>
                    </Row>
                    {/*统计人数*/}
                    <Row className="mainPage_Row">
                        <Col>
                            <Collapse>
                                <Panel header="统计人数" key="1">
                                    <Card>
                                        <Table dataSource={dataSource} columns={columns} />
                                    </Card>
                                </Panel>
                            </Collapse>
                        </Col>
                    </Row>
                    {/*未回访*/}
                    <Row className="mainPage_Row">
                        <Col>
                            <Collapse>
                                <Panel header="未回访" key="1">
                                    <Card>
                                        <Table dataSource={dataSource} columns={columns} rowSelection={rowSelection} />
                                    </Card>
                                </Panel>
                            </Collapse>
                        </Col>
                    </Row>
                    {/*计划当天回访*/}
                    <Row className="mainPage_Row">
                        <Col>
                            <Collapse>
                                <Panel header="计划当天回访" key="1">
                                    <Card>
                                        <Table dataSource={dataSource} columns={columns} rowSelection={rowSelection} />
                                    </Card>
                                </Panel>
                            </Collapse>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

function mapStateToProps(state) {
    return {}
}
export default connect(mapStateToProps)(mainPage);