import React from 'react';
import { Input, Button, Card, Typography, Space } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useForm, Controller } from 'react-hook-form'; // Added Controller
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../../utils/axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

type SignupValues = {
    name: string;
    email: string;
    password: string;
}

async function login(data: SignupValues) {
    const res = await axiosInstance.post("/auth/signup", data);
    return res.data;
}

const SignupPage: React.FC = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<SignupValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const mutation = useMutation({
        mutationFn: login,
        onSuccess: () => {
            toast.success("Successfully signed up");
        },
        onError: () => {
            toast.error("Failed to signup.");
        }
    });

    const onSubmit = (data: SignupValues) => {
        mutation.mutate(data);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
            <Card style={{ width: 400, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
                    <div>
                        <Title level={2} style={{ marginBottom: 0 }}>Welcome!</Title>
                        <Text type="secondary">Please provide details for your account</Text>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        
                        {/* name Field */}
                        <div>
                            <Controller
                                name="name"
                                control={control}
                                rules={{ required: "Name is required" }}
                                render={({ field }) => (
                                    <Input 
                                        {...field} 
                                        status={errors.name ? 'error' : ''}
                                        prefix={<UserOutlined />} 
                                        placeholder="John Doe" 
                                        size="large"
                                    />
                                )}
                            />
                            {errors.name && <div style={{ color: '#ff4d4f', textAlign: 'left', fontSize: '12px' }}>{errors.name.message}</div>}
                        </div>

                        {/* email Field */}
                        <div>
                            <Controller
                                name="email"
                                control={control}
                                rules={{ required: "Email is required" }}
                                render={({ field }) => (
                                    <Input 
                                        {...field} 
                                        status={errors.email ? 'error' : ''}
                                        prefix={<MailOutlined />} 
                                        placeholder="example@email.com" 
                                        size="large"
                                    />
                                )}
                            />
                            {errors.email && <div style={{ color: '#ff4d4f', textAlign: 'left', fontSize: '12px' }}>{errors.email.message}</div>}
                        </div>

                        {/* Password Field */}
                        <div>
                            <Controller
                                name="password"
                                control={control}
                                rules={{ required: "Password is required" }}
                                render={({ field }) => (
                                    <Input.Password 
                                        {...field} 
                                        status={errors.password ? 'error' : ''}
                                        prefix={<LockOutlined />} 
                                        placeholder="Password" 
                                        size="large"
                                    />
                                )}
                            />
                            {errors.password && <div style={{ color: '#ff4d4f', textAlign: 'left', fontSize: '12px' }}>{errors.password.message}</div>}
                        </div>

                        <Button 
                            type="primary" 
                            htmlType="submit" 
                            size="large" 
                            block 
                            loading={mutation.isPending}
                        >
                            Sign Up
                        </Button>

                        <Text type="secondary">
                            Already have an account? <Link to="/login">Login in here!</Link>
                        </Text>
                    </form>
                </Space>
            </Card>
        </div>
    );
};

export default SignupPage;