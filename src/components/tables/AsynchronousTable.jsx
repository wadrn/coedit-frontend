/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table, Button, Row, Col, Card } from 'antd';
import { getAllDocLists } from '../../axios';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Link } from 'react-router-dom';

const columns = [{
    title: '文档名',
    dataIndex: 'doc_name',
    width: 100,
    render: (text, record) => <a href={record.url} target="_blank">{text}</a>
}, {
    title: '路径',
    dataIndex: 'path',
    width: 80
}, {
    title: '版本',
    dataIndex: 'doc_version',
    width: 80
},{
    title:'操作',
    dataIndex:'action',
    render: ()=> <Link to="/app/ui/wysiwyg">join edit</Link>,
    width:80
}];

class AsynchronousTable extends React.Component {
    state = {
        selectedRowKeys: [],  // Check here to configure the default column
        loading: false,
        data: []
    };
    componentDidMount() {
        this.start();
    }
    start = () => {
        this.setState({ loading: true });
        getAllDocLists().then(res => {
            console.log(res);
            this.setState({
                data: res.Docs.map(val => {
                    val.key = val.id;
                    return val;
                }),
                loading: false
            });
        });
    };
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="表格" second="异步表格" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="全部文档" bordered={false}>
                                <div style={{ marginBottom: 16 }}>
                                    <Button type="primary" onClick={this.start}
                                            disabled={loading} loading={loading}
                                    >Reload</Button>
                                    <span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
                                </div>
                                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AsynchronousTable;