import React, { useEffect } from 'react'

import { Button } from 'src/assets/styles/utils'
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { path } from 'src/constants/path'
import { rules } from 'src/constants/rule'
import ErrorMessage from 'src/Components/ErrorMessage/ErrorMessage'
import InputText from 'src/Components/InputText/InputText'
import InputPassword from 'src/Components/InputPassword/InputPassword'
import * as S from './register.style'
import http from 'src/utils/http'
export default function Register() {
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmedPassword: ''
    }
  })
  const handleRegister = data => {
    console.log(data)
  }

  useEffect(() => {
    http.get('products').then(res => {
      console.log(res)
    })
  }, [])

  return (
    <div>
      <S.StyledRegister>
        <S.Container className="container">
          <S.Banner />
          <S.FormWrapper>
            <S.FormTitle>Register</S.FormTitle>
            <S.Form onSubmit={handleSubmit(handleRegister)} noValidate>
              {/* input email  */}
              <S.FormControl>
                <Controller
                  name="email"
                  control={control}
                  rules={rules.email}
                  render={({ field }) => (
                    <InputText
                      type="email"
                      name="email"
                      placeholder="email"
                      onChange={field.onChange}
                      value={getValues('email')}
                    />
                  )}
                ></Controller>
                <ErrorMessage errors={errors} name="email" />
              </S.FormControl>
              {/* email password  */}
              <S.FormControl>
                <Controller
                  name="password"
                  control={control}
                  rules={rules.password}
                  render={({ field }) => (
                    <InputPassword
                      name="password"
                      placeholder="Password"
                      onChange={field.onChange}
                      value={getValues('password')}
                    />
                  )}
                ></Controller>
                <ErrorMessage errors={errors} name="password" />
              </S.FormControl>
              {/* confirm password  */}
              <S.FormControl>
                <Controller
                  name="confirmedPassword"
                  control={control}
                  rules={{
                    ...rules.confirmedPassword,
                    validate: {
                      samePassword: v =>
                        v === getValues('password') || 'Mật khẩu không khớp'
                    }
                  }}
                  render={({ field }) => (
                    <InputPassword
                      name="confirmedPassword"
                      placeholder="Confirmed Password"
                      onChange={field.onChange}
                      value={getValues('confirmedPassword')}
                    />
                  )}
                ></Controller>
                <ErrorMessage errors={errors} name="confirmedPassword" />
              </S.FormControl>
              <S.FormButton>
                <Button type="submit">Register</Button>
              </S.FormButton>
            </S.Form>
            <S.FormFooter>
              <span>Bạn đã có tài khoản?</span>
              <Link to={path.login} className="link">
                Đăng nhập
              </Link>
            </S.FormFooter>
          </S.FormWrapper>
        </S.Container>
      </S.StyledRegister>
    </div>
  )
}
