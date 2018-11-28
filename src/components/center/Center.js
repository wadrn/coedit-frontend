/**
 * Created by hao.cheng on 2017/5/3.
 */
import React from 'react';
import { Row, Col, Card, Timeline, Icon } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
// import EchartsViews from './EchartsViews';
// import EchartsProjects from './EchartsProjects';
// import b1 from '../../style/imgs/b1.jpg';
import Draggable from 'react-draggable';

class Dashboard extends React.Component {
    state = {
        activeDrags: 0,
        deltaPosition: {
            x: 0, y: 0
        },
        controlledPosition: {
            x: -400, y: 200
        }
    };
    onStart = () => {
        this.setState({activeDrags: ++this.state.activeDrags});
    };
    onStop = () => {
        this.setState({activeDrags: --this.state.activeDrags});
    };
    handleDrag = (e, ui) => {
        const {x, y} = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    };
    render() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        // const {deltaPosition} = this.state;
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom />
                <Row gutter={10}>
                    <Col className="gutter-row" md={12}>
                    <div className="gutter-box">
                        <Draggable axis="y" onDrag={this.handleDrag} {...dragHandlers}>
                            <Card bordered={false} className={'dragDemo'}>
                            <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>消息栏</h3>
                                </div>
                                <a className="card-tool"><Icon type="sync" /></a>
                                <ul className="list-group no-border">
                                    <li className="list-group-item">
                                        {/* <a href="" className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </a> */}
                                        <div className="clear">
                                            <a href="" className="block">lily</a>
                                            <span className="text-muted">请修改文档a第二章节！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        {/* <a href="" className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </a> */}
                                        <div className="clear">
                                            <a href="" className="block">tom</a>
                                            <span className="text-muted">请合作完成文档b第一章节</span>
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                            </Card>
                        </Draggable>
                    </div>
                </Col>
                <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Draggable axis="y" onDrag={this.handleDrag} {...dragHandlers}>
                                <Card bordered={false} className={'dragDemo'}>
                                <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>任务</h3>
                                    <small>10个已经完成，2个待完成，1个正在进行中</small>
                                </div>
                                <a className="card-tool"><Icon type="sync" /></a>
                                <Timeline>
                                    <Timeline.Item color="green">新版本迭代会</Timeline.Item>
                                    <Timeline.Item color="green">完成文档第一章节部分</Timeline.Item>
                                    <Timeline.Item color="red">
                                        <p>完成文档第二部分章节</p>
                                        <p>完成文档第三部分章节</p>
                                    </Timeline.Item>

                                    <Timeline.Item color="#108ee9">
                                        <p>登录功能设计</p>
                                        <p>权限模块设计</p>
                                        <p>协同编辑模块</p>
                                    </Timeline.Item>
                                </Timeline>
                            </Card>
                        </div>
                                </Card>
                            </Draggable>
                        </div>
                </Col>

                </Row>
                   
                    {/* <Col className="gutter-row" md={12}>
                       
                    </Col> */}
                    {/* <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>访问量统计</h3>
                                    <small>最近7天用户访问量</small>
                                </div>
                                <a className="card-tool"><Icon type="sync" /></a>
                                <EchartsViews />
                            </Card>
                        </div>
                    </Col> */}
            </div>
        )
    }
}

export default Dashboard;