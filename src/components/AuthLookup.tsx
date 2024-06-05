import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import { supabase } from '../db/db'
import { isUserRegistered } from '../api/auth'
import Spinner from './Spinner'

type AuthLookupProps = {
  email: string
  handleNextStep: () => void
  handleChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function AuthLookup({
  handleNextStep,
  handleChangeEmail,
  email,
}: AuthLookupProps) {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleContinue = async () => {
    setLoading(true)
    const isRegistered = await isUserRegistered(email)
    setLoading(false)
    if (!isRegistered) {
      navigate('../register', {
        relative: 'path',
      })
    } else {
      navigate('../signin', {
        relative: 'path',
      })
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-normal">
        Enter your email to join us or sign in.
      </h2>
      <div className="mt-6 mb-6">
        <input
          value={email}
          onChange={handleChangeEmail}
          className="block border border-gray-300 px-2 py-3 rounded-lg w-full"
          placeholder="Email"
          type="email"
        />
      </div>
      <div>
        <p className="text-gray-400">
          By continuing, I agree to Nike’s Privacy Policy and Terms of Use.
        </p>
      </div>
      <div className="mt-5 flex justify-end">
        <Button onClick={handleContinue} variant="solid">
          {loading ? (
            <div className="px-4">
              <Spinner />
            </div>
          ) : (
            'Continue'
          )}
        </Button>
      </div>
    </div>
  )
}
