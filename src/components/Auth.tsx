import { ChangeEvent, useState } from 'react'
import { IconJordan, IconNike } from '../utils/icons'
import AuthJoin from './AuthJoin'
import AuthLookup from './AuthLookup'
import { Route, Routes } from 'react-router-dom'
import AuthLogin from './AuthLogin'

export default function Auth() {
  const [email, setEmail] = useState('')

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleNextStep = () => {
    console.log('ed')
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="w-[400px]">
        <div className="flex gap-4 mb-4">
          <IconNike width={50} />
          <IconJordan width={50} />
        </div>
        <Routes>
          <Route
            path="/lookup"
            element={
              <AuthLookup
                email={email}
                handleChangeEmail={handleChangeEmail}
                handleNextStep={handleNextStep}
              />
            }
          />
          <Route path="/register" element={<AuthJoin email={email} />} />
          <Route path="/signin" element={<AuthLogin email={email} />} />
        </Routes>
      </div>
    </div>
  )
}
