import { ChangeEvent, useState } from 'react'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import Input from './Input'
import { createUser } from '../api/auth'
import Spinner from './Spinner'

type AuthJoinProps = {
  email: string
}

export default function AuthJoin({ email }: AuthJoinProps) {
  const [form, setForm] = useState({
    fullname: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleCreateAccount = async () => {
    setLoading(true)
    const data = await createUser(email, form.password, form.fullname)
    setLoading(false)
    if (data) {
      enqueueSnackbar('Your profile was created successfully', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      })
      navigate('../signin', {
        relative: 'path',
      })
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-normal">
        Now let's make you a Nike Member.
      </h2>
      <div className="mt-4 mb-4">
        <p>We've sent a code to</p>
        <p>{email}</p>
      </div>
      <div className="mt-6 mb-6">
        <Input
          value={form.fullname}
          onChange={handleChange}
          name="fullname"
          placeholder="Full name"
          type="text"
        />
      </div>

      <div className="mt-6 mb-6">
        <Input
          value={form.password}
          onChange={handleChange}
          name="password"
          placeholder="Password"
          type="password"
        />
      </div>
      <div>
        <p className="text-gray-400">
          By continuing, I agree to Nike’s Privacy Policy and Terms of Use.
        </p>
      </div>
      <div className="mt-5 flex justify-end">
        <Button onClick={handleCreateAccount} variant="solid">
          {loading ? (
            <div className="px-4">
              <Spinner />
            </div>
          ) : (
            'Create Account'
          )}
        </Button>
      </div>
    </div>
  )
}
