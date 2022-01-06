import { isEmail } from 'src/utils/helper'

export const rules = {
  email: {
    required: {
      value: true,
      message: 'Nhập email'
    },
    minLength: {
      value: 5,
      message: 'Email có độ dài từ 6-160 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Email có độ dài từ 6-160 kí tự '
    },
    validate: {
      email: v => isEmail(v) || 'email không đúng định dạng'
    }
  },
  password: {
    require: {
      value: true,
      message: 'Nhập mật khẩu '
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu có độ dài từ 6- 160 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Mật khẩu có độ dài từ 6 đến 160 kí tự'
    }
  },
  confirmedPassword: {
    require: {
      value: true,
      message: 'Nhập lại mật khẩu'
    },
    minLength: {
      value: 6,
      message: 'Nhập lại mật khẩu có độ dài từ 6 đến 160 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Nhập lại mật khẩu có độ dài từ 6 đến 160 kí tự'
    }
  }
}
