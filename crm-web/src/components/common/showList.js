
import React from 'react';
import {Link} from 'react-router'
import {Row, Col, Card, Table, Pagination,Input,Button,Icon} from 'antd';


const Search = Input.Search;

//import  '../../components/student/style.css';
export default class ShowList extends React.Component{

    render() {
        const {columns, dataSource, rowKey, total, onChange,title,extra,pageNum,location} = this.props;
        return (
            <Card title={title} extra={extra}>

               {/* <div>
                    <lable>高级搜索:</lable>
                    <Search placeholder="input search text" size="large" />
                    <Link to={location} > <Button type="primary" style={{margin:'10px'}}><Icon type="plus" />添加</Button></Link>&nbsp;&nbsp;
                    <Link to="/mainPage"> <Button type="primary"> <Icon type="arrow-left" />返回首页</Button></Link>
                </div>*/}

                <Row gutter={10}>

                    <Col span={24} >
                        <div>
                            <Table bordered={true} columns={columns}
                                   dataSource={dataSource} pagination={false} rowKey={rowKey}/>

                        </div>
                    </Col>
                </Row>
            </Card>
        );
    }
}