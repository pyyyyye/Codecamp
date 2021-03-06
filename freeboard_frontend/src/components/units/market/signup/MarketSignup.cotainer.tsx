// @ts-nocheck
// ======= 중고마켓 회원가입 | market signup container =======
import { useMutation } from '@apollo/client'
import { CREATE_USER } from './MarketSignup.queries'
import { ChangeEvent, useState } from 'react'
import { IMutation } from '../../../../commons/types/generated/types'
import MarketSignupUI from './MarketSignup.presenter'
import router from 'next/router'

export const SGINUP_INPUT = {
  name: '',
  email: '',
  password: ''
  // repassword: ''
}

export default function MarketSingup() {
  const [signupInput, setSignupInput] = useState(SGINUP_INPUT)
  // const [passwordAgain, setPasswordAgain] = useState('')
  const [createUser] = useMutation<IMutation>(CREATE_USER)
  const [inputError, setInputError] = useState(SGINUP_INPUT)

  // function onChangePasswordAginInput(event: ChangeEvent<HTMLInputElement>) {
  //   setPasswordAgain(event.target.value)
  // }
  function onChangeSignupInput(event: ChangeEvent<HTMLInputElement>) {
    setSignupInput({
      ...signupInput,
      [event.target.name]: event.target.value
    })
  }
  async function onClickSignup() {
    setInputError({
      name: signupInput.name ? '' : '이름을 입력해주세요.',
      email: signupInput.email ? '' : '이메일을 입력해주세요.',
      password: signupInput.password ? '' : '비밀번호를 입력해주세요.'
      // repassword: signupInput.repassword
      //   ? ''
      //   : '비밀번호를 한 번 더 입력해주세요.'
    })

    const isEvery = Object.values(signupInput).every((data) => data)
    if (!isEvery) return
    try {
      await createUser({
        variables: {
          createUserInput: {
            ...signupInput
          }
        }
      })
      alert('회원가입이 완료되었습니다.')
      router.push('/market/login')
    } catch (error) {
      alert('회원가입에 실패했습니다.')
      // alert(error.message);
    }
  }

  return (
    <MarketSignupUI
      onChangeSignupInput={onChangeSignupInput}
      // onChangePasswordAginInput={onChangePasswordAginInput}
      onClickSignup={onClickSignup}
      inputError={inputError}
    />
  )
}
