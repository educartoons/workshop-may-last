import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export default function Profile() {
  const { fullname, createdAt } = useSelector((state: RootState) => state.user)
  return (
    <div>
      <div className="mt-5 mb-5">
        <h2 className="text-3xl font-normal">{fullname}</h2>
      </div>
      <div>
        <p className="text-gray-500">Miembro de Nike desde {createdAt}</p>
      </div>
    </div>
  )
}
