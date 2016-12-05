/**
 * Created by jason on 2016/12/5.
 */
import React from 'react'
import Container from '../components/container'
import Header from '../components/header'
import generalCSS, {cssUtil as css} from '../utils/generalCSS'
import Steps, {Step} from 'antd/lib/steps'
import message from 'antd/lib/message'
import Button from 'antd/lib/button'
import Form, {Item as FormItem} from 'antd/lib/form'
import Input from 'antd/lib/input'
import Tabs, {TabPane} from 'antd/lib/tabs'
import Cascader from 'antd/lib/cascader'
import {genCascadeAddr} from '../utils/citys'
import Upload from 'antd/lib/upload'
import Icon from 'antd/lib/icon'

const steps = [{
  title: '第一步',
  description: '基本信息'
}, {
  title: '第二步',
  description: '完善信息'
}, {
  title: '第三步',
  description: '注册成功'
}]


class Register extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    current: 2, // 0 1 2
    key: "2" // 1 -- 个人  , 2 -- 公司
  }

  next = () => {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev = () => {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        message.success('success', values)
      }
    })
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form
    const password = form.getFieldValue('password')
    if (value && password !== value) {
      callback('两次密码不一致')
    }else{
      callback()
    }
  }
  
  checkPassword = (rule, value, callback) => {
    const form = this.props.form
    value && form.validateFields(['confirm'], {force: true})
    callback()
  }
  
  normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  renderSteps = () => {
    const {current} = this.state
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    
    const {getFieldDecorator} = this.props.form
    switch (current) {
      case 0:
        return (
            <Form horizontal className={css(generalCSS.w100p, generalCSS.ptp30)}>
              <FormItem
                  {...formItemLayout}
                  label="邮箱"
              >
                {getFieldDecorator('email', {
                  rules: [{
                    type: 'email', message: '请输入正确的邮箱'
                  }, {
                    required: true, message: '请输入邮箱'
                  }],
          
                })(
                    <Input />
                )}
              </FormItem>
              <FormItem
                  {...formItemLayout}
                  label='验证码'
              >
                {getFieldDecorator('captcha', {
                  rules: [{
                    required: true, message: '请输入验证码'
                  }]
                })(
                    <Input addonAfter={<Button type="ghost" size="small">下发</Button>}/>
                )}
              </FormItem>
              <FormItem
                  {...formItemLayout}
                  label="密码"
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: '请输入密码'
                  }, {
                    validator: this.checkPassword
                  }]
                })(
                    <Input type="password"/>
                )}
              </FormItem>
              <FormItem
                  {...formItemLayout}
                  label='确认密码'
              >
                {getFieldDecorator('confirm', {
                  rules: [{
                    required: true, message: '请再次输入密码'
                  },{
                    validator: this.checkConfirm
                  }]
                })(
                    <Input type="password"/>
                )}
              </FormItem>
            </Form>
        )
        break
      case 1:
        return (
            <Tabs activeKey={this.state.key} onChange={(key) => {this.setState({key})}} className={css(generalCSS.w100p, generalCSS.ptp10)}>
              <TabPane tab="个人用户" key="1">
                <Form horizontal className={css(generalCSS.w100p, generalCSS.ptp30)}>
                  <FormItem
                      {...formItemLayout}
                      label="姓名"
                  >
                    {getFieldDecorator('name', {
                      rules: [{
                        required: true, message: '姓名不能为空'
                      }],
                    })(
                        <Input placeholder="请输入姓名"/>
                    )}
                  </FormItem>
                  <FormItem
                      {...formItemLayout}
                      label="地址"
                  >
                    {getFieldDecorator('address', {
                      // initialValue: ["天津市", "天津市", "和平区"],
                      rules: [{
                        type: 'array', required: true, message: '省市区不能为空'
                      }],
                    })(
                        <div>
                          <Cascader
                              onChange={(e) => {console.log(e, this.props.form.getFieldsValue())}}
                              options={genCascadeAddr()}
                              placeholder="请选择省市区"
                              showSearch
                              expandTrigger="hover"
                              changeOnSelect
                          />
                        </div>
                        
                    )}
                  </FormItem>
                  <FormItem
                      {...formItemLayout}
                      label="详细地址"
                  >
                    {getFieldDecorator('detailAddress', {
                      rules: [{
                        required: true, message: '详细地址不能为空'
                      }]
                    })(
                        <Input placeholder="请输入详细地址"/>
                    )}
                  </FormItem>
                </Form>
              </TabPane>
              <TabPane tab="企业用户" key="2">
                <Form horizontal className={css(generalCSS.w100p, generalCSS.ptp30)}>
                  <FormItem
                      {...formItemLayout}
                      label='企业名称'
                  >
                    {getFieldDecorator('companyName',{
                      rules: [{
                        required: true, message: '企业名称不能为空',
                      }]
                    })(
                        <Input placeholder="请输入企业名称"/>
                    )}
                  </FormItem>
                  <FormItem
                      {...formItemLayout}
                      label='营业执照注册号'
                  >
                    {getFieldDecorator('licenseCode',{
                      rules: [{
                        required: true, message: '营业执照注册号不能为空',
                      }]
                    })(
                        <Input placeholder="请输入营业执照注册号"/>
                    )}
                  </FormItem>
                  <FormItem
                      {...formItemLayout}
                      label="地址"
                  >
                    {getFieldDecorator('address', {
                      // initialValue: ["天津市", "天津市", "和平区"],
                      rules: [{
                        type: 'array', required: true, message: '省市区不能为空'
                      }],
                    })(
                        <div>
                          <Cascader
                              onChange={(e) => {console.log(e, this.props.form.getFieldsValue())}}
                              options={genCascadeAddr()}
                              placeholder="请选择省市区"
                              showSearch
                              expandTrigger="hover"
                              changeOnSelect
                          />
                        </div>
                    )}
                  </FormItem>
                  <FormItem
                      {...formItemLayout}
                      label="详细地址"
                  >
                    {getFieldDecorator('detailAddress', {
                      rules: [{
                        required: true, message: '详细地址不能为空'
                      }]
                    })(
                        <Input placeholder="请输入详细地址"/>
                    )}
                  </FormItem>
                  <FormItem
                      {...formItemLayout}
                      label="固定电话"
                  >
                    {getFieldDecorator('fixPhone', {
                      rules: [{
                        required: true, message: '固定电话不能为空'
                      }]
                    })(
                        <Input placeholder="xxxx-xxxxxxxx"/>
                    )}
                  </FormItem>
                  <FormItem
                      {...formItemLayout}
                      label='税务登记证扫描件'
                  >
                    {getFieldDecorator('upload', {
                      valuePropName: 'fileList',
                      normalize: this.normFile,
                    })(
                        <Upload name="logo" action="/upload.do" listType="picture" onChange={this.handleUpload}>
                          <Button type="ghost">
                            <Icon type="upload" /> 点击上传
                          </Button>
                        </Upload>
                    )}
                  </FormItem>
                </Form>
              </TabPane>
            </Tabs>
        )
      case 2:
        return (
            <div className={css(generalCSS.dirRowJcCenterAiCenter, generalCSS.pv30)}>
              <Icon type="check-circle" className={css(generalCSS.fts80, styles.successIcon)}/>
              <div className={css(generalCSS.mlf20)}>
                <h1>恭喜您，注册成功</h1>
                <p className={css(generalCSS.fts16)}>您的绑定邮箱号为:123123123@qq.com</p>
              </div>
            </div>
        )
      default:
        break
    }
  }
  
  render() {
    const { current } = this.state;
    
    return (
        <Container>
          <Header />
          <div className={css(generalCSS.dirRowJcCenterAiCenter, generalCSS.pv30)}>
            <div className={css(generalCSS.w50p, styles.container, generalCSS.pv30, generalCSS.ph30)}>
              <Steps current={current}>
                {steps.map(item => <Step key={item.title} title={item.title} description={item.description} />)}
              </Steps>
              <div className={css(generalCSS.dirColumnJcCenterAiCenter)}>
                {this.renderSteps()}
              </div>
              <div className={css(generalCSS.textAC)}>
                {
                  this.state.current < steps.length - 1
                  &&
                  <Button type="primary" onClick={() => this.next()}>下一步</Button>
                }
                {
                  this.state.current === steps.length - 1
                  &&
                  <Button type="primary" onClick={() => message.success('Processing complete!')}>返回首页</Button>
                }
                {
                  this.state.current > 0
                  &&
                  <Button style={{ marginLeft: 8 }} type="ghost" onClick={() => this.prev()}>
                    上一步
                  </Button>
                }
              </div>
            </div>

          </div>
        </Container>
    )
  }
}

export default Form.create()(Register)

const styles = {
  container: {
    boxShadow: '0px 0px 10px lightgray',
    borderRadius: 5
  },
  successIcon: {
    color: generalCSS.lightGreen800
  }
}
