import { ChangeEvent, useState } from 'react'
import { useSnackbar } from 'notistack'
import Button from './Button'
import Input from './Input'
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../api/auth'

type AuthJoinProps = {
  email: string
}

export default function AuthLogin({ email }: AuthJoinProps) {
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleLogin = async () => {
    const data = await signin(email, password)

    if (data) {
      enqueueSnackbar('You have signed in successfully', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      })
      navigate('/')
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-normal">What's your password?</h2>
      <div className="mt-4 mb-4">
        <p>{email}</p>
      </div>
      <div className="mt-6 mb-6">
        <Input
          value={password}
          onChange={handleChange}
          name="password"
          placeholder="Password"
          type="password"
        />
      </div>

      <div className="mt-6 mb-6">
        <Link to="/" className="text-gray-400 font-normal text-sm underline">
          Forgot password?
        </Link>
      </div>
      <div className="mt-5 flex justify-end">
        <Button onClick={handleLogin} variant="solid">
          Sign In
        </Button>
      </div>
    </div>
  )
}
