import { ChangeEvent, useState, useCallback, useMemo } from 'react'
import Input from '../components/Input'
import ProductList from '../components/ProductList'
import Store from '../components/Store'
import Wrapper from '../components/Wrapper'
import { ITEMS } from '../utils/utils'

export default function ProductsPage() {
  const [value, setValue] = useState('')
  const [items, setItems] = useState(ITEMS)

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.isChecked)
  }, [items])

  const handleChangeValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    },
    []
  )

  return (
    <Store>
      <Wrapper>
        <div className="mb-4">
          <Input value={value} onChange={handleChangeValue} />
        </div>
        <div>{filteredItems[0].value}</div>
        <ProductList handleChangeValue={handleChangeValue} />
      </Wrapper>
    </Store>
  )
}
