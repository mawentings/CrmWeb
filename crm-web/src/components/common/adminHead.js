/**
 * Created by gsdrgsdfg on 2018/3/30.
 */
import  {Icon,Input,Button} from 'antd';

import React from 'react';
const Search = Input.Search;

export default class AdminUserHead extends React.Component{

    render(){
        return (
            <div>
                <lable>高级搜索:</lable>
                <Search placeholder="input search text" size="large" />
                <Button type="primary" style={{margin:'10px'}}> <Icon type="plus" />添加</Button>&nbsp;&nbsp;
                <Button type="primary"> <Icon type="arrow-left" />返回首页</Button>
            </div>
        )
    }
}
