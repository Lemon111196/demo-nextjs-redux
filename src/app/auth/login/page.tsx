'use client';
import PersonIcon from '@mui/icons-material/Person';


import { LoginContainer } from "./style";
import { Controller, useForm } from 'react-hook-form';
import { Button, Checkbox, CircularProgress, FormControlLabel, IconButton, InputAdornment, TextField } from '@mui/material';
import { schema } from './schema';
import { yupResolver } from "@hookform/resolvers/yup";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import Link from 'next/link';



export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);



  const formDefaultValues = {
    username: '',
    password: '',
  }
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: formDefaultValues
  })

  //!Show password
  const toggleBtn = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginContainer>
      <div className="wrapper">
        <h1>Login</h1>
        <div className="inputForm">
          <Controller
            control={control}
            name="username"
            render={({ field }) =>
              <TextField
                className="input"
                {...field}
                color="success"
                label="Username"
                variant="filled"
                sx={{ input: { color: 'white' } }}
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
              />}
          />
          <PersonIcon className="icon" />
          {errors.username && (
            <span className="error">{errors?.username?.message?.toString()}</span>
          )}
        </div>
        <div className="inputForm">
          <Controller
            control={control}
            name="password"
            render={({ field }) =>
              <TextField
                className="input"
                {...field}
                color="success"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                variant="filled"
                sx={{ input: { color: 'white' } }}
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleBtn} edge="end">
                        {showPassword ? <VisibilityIcon className="iconPassword" /> : <VisibilityOffIcon className="iconPassword" />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />}
          />
        </div>
        {errors.password && (
          <span className="error">{errors?.password?.message?.toString()}</span>
        )}
        <div>
          <div className="checkbox">
            <FormControlLabel control={<Checkbox sx={{ color: "white" }} color="success" />} label="Remember me" />
            <p><Link href='' >Forgot Password? </Link></p>
          </div>
          <Button color="success"
            type="submit"
            variant="contained"
            className="btn"
            // onClick={handleSubmit(gotoDashboard)}
            disabled={loading}
          >{loading ? <CircularProgress color="success" /> : 'Log in'}</Button>
          <p className="register">Don't you have an account?<Link className="link" href='/auth/register'>Register</Link></p>
        </div>
      </div>
    </LoginContainer>
  )
}
