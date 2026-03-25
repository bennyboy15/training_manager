import React from 'react';
import { Input, Button, Checkbox, Card, Typography, Space } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useForm, Controller } from 'react-hook-form'; // Added Controller
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../../utils/axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

type LoginValues = {
    email: string;
    password: string;
    remember: boolean;
}

async function login(data: LoginValues) {
    const res = await axiosInstance.post("/auth/login", data);
    return res.data;
}

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<LoginValues>({
        defaultValues: {
            email: '',
            password: '',
            remember: true
        }
    });

    const mutation = useMutation({
        mutationFn: login,
        onSuccess: (data: { token: string }) => {
            // `frontend/src/utils/axios.ts` reads this key to attach `Authorization: Bearer ...`.
            localStorage.setItem('token', data.token);
            navigate('/');
            toast.success("Successfully logged in");
        },
        onError: () => {
            toast.error("Failed to login. \nPlease check your credentials.");
        }
    });

    const onSubmit = (data: LoginValues) => {
        mutation.mutate(data);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
            <Card style={{ width: 400, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
                    <div>
                        <Title level={2} style={{ marginBottom: 0 }}>Welcome Back</Title>
                        <Text type="secondary">Please login to your account</Text>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        
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

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Controller
                                name="remember"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <Checkbox checked={value} onChange={(e) => onChange(e.target.checked)}>
                                        Remember me
                                    </Checkbox>
                                )}
                            />
                            <Link to="/forgot">Forgot password</Link>
                        </div>

                        <Button 
                            type="primary" 
                            htmlType="submit" 
                            size="large" 
                            block 
                            loading={mutation.isPending}
                        >
                            Log in
                        </Button>

                        <Text type="secondary">
                            Don't have an account? <Link to="/signup">Signup now!</Link>
                        </Text>
                    </form>
                </Space>
            </Card>
        </div>
    );
};

export default LoginPage;