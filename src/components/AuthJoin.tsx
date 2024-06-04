import { ChangeEvent, useState } from 'react'
import Button from './Button'
import Input from './Input'
import { createUser } from '../api/auth'

type AuthJoinProps = {
  email: string
}

export default function AuthJoin({ email }: AuthJoinProps) {
  const [form, setForm] = useState({
    fullname: '',
    password: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleCreateAccount = async () => {
    const data = await createUser(email, form.password, form.fullname)
    console.log(data)
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
          Create Account
        </Button>
      </div>
    </div>
  )
}
