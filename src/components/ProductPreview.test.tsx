import {describe, test, expect} from 'vitest';
import {BrowserRouter} from 'react-router-dom'
import {render} from '@testing-library/react'
import ProductPreview from './ProductPreview';
import "@testing-library/jest-dom/vitest"

describe('<ProductPreview />', ()=>{
  const {getByText, getByRole} = render(<BrowserRouter><ProductPreview /></BrowserRouter>)

  test('renders title', ()=>{
    const productName = getByText("Nike Dunk Low");
    expect(productName).toBeInTheDocument();
  })

  test('renders an image', ()=>{
    const image = getByRole("figure");
    expect(image).toBeInTheDocument();
  })
})