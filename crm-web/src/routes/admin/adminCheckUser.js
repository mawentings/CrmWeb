/**
 * Created by mawen on 2018/3/28.
 */

import  React from 'react';
import ShowList from '../../routes/showTable/index.js';
import  Auserhead from '../adminHeader/index.js';

import  {Checkbox} from 'antd';
const columns = [{
    title: '用户名',
    dataIndex: 'name',
    render: (text, index) =><Link to={{pathname: '/userEdit', state : index.id,}}>{text}</Link>
}, {
    title: '全名',
    dataIndex: 'age',
},{
    title: 'Address',
    dataIndex: 'address',
}, {
    title: '允许',
    dataIndex: 'str',
}];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    str:<Checkbox disabled={true}/>
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    str:<Checkbox disabled={true}/>
},{
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    str:<Checkbox disabled={true}/>
}, {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
    str:<Checkbox disabled={true}/>
}, {
    key: '5',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
    str:<Checkbox disabled={true}/>
}, {
    key: '6',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
    str:<Checkbox disabled={true}/>
}];

export default class ShowAdminUser extends React.Component{
    constructor(props){
        super(props)
        this.state={
           /* columns:columns,
            data:data,*/
           columns:columns,
            data:data,
            location:'/saveUser',
            columnsStyle:{
                align:'center'
            }
        }

    }

/*使用生命周期 将要加载前数据赋值*/
    componentWillMount(){
        const {data,columns}=this.state;
        this.setState({
            columns:columns,
            data:data,

        })
    }


    render(){
        return (
           <div>
               <Auserhead/>
            <ShowList {...this.state} columns={this.state.columns}
                      dataSource={this.state.data}/>
           </div>
        )
    }
}

