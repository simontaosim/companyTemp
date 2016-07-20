import React from 'react';
import ReactDOM from 'react-dom';
import {DatePicker,message} from 'antd';
import { Tabs, Select, Icon } from 'antd';
const TabPane = Tabs.TabPane;
const Option = Select.Option;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('您选择日期是: ' + date.toString());
    this.setState({ date });
  }
  render() {
    return (
      <Tabs tabPosition="bottom">
          <TabPane tab={
            <p style={{textAlign: "center"}}>
            <Icon type="home"  style={{textAlign: "center", fontSize: "18pt"}}/><br/>
            <span style={{textAlign: "center", fontSize: "8pt"}}>首页</span>
            </p>
          } key="1">选项卡一内容
          asfawefaw
          afawefawe
          awfeawefawef
          <Icon type="like" />
          awfeawef<br/>
          awfeawef<br/>
          </TabPane>
          <TabPane tab={
            <p style={{textAlign: "center"}}>
            <Icon type="home"  style={{textAlign: "center", fontSize: "18pt"}}/><br/>
            <span style={{textAlign: "center", fontSize: "8pt"}}>首页</span>
            </p>
          } key="2">
          选项卡二内容
          <Icon type="step-backward" />
          </TabPane>
          <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
    </Tabs>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
