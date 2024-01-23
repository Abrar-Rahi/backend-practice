
import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios'



function App() {

  let [error,setError]=useState("")
  
  const onFinish = async (values) => {
      
    let data = await axios.post("http://localhost:8000/animal",{
      name : values.username,
      email: values.email,
      password : values.password
    },
    {
      headers:{
        authorization: "abrar"
      }
    }
    )
    
    if(data.data.error){
      setError(data.data.error)
    }else if(data.data.success){
      setError(data.data.success)
    }else{
      setError("")
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
    
      <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      // rules={[
      //   {
      //     required: true,
      //     message: 'Please input your username!',
      //   },
      // ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="email"
      name="email"
      // rules={[
      //   {
      //     required: true,
      //     message: 'Please input your username!',
      //   },
      // ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      // rules={[
      //   {
      //     required: true,
      //     message: 'Please input your password!',
      //   },
      // ]}
    >
      <Input.Password />
    </Form.Item>

    

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  {error && <h1>{error}</h1> }
    </>
  )
}

export default App
