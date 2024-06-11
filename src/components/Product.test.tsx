import {describe, test, expect} from 'vitest';
import userEvent from '@testing-library/user-event'
import {render} from '@testing-library/react'

import "@testing-library/jest-dom/vitest"
import Product from './Product';


describe("<Product />", ()=>{
  const {queryByTestId} = render(<Product name="Nike Sneaker" url="nike-product-sneaker" />)

  test('renders an non-filled heart icon', ()=>{{
    const nonFilled = queryByTestId("non-filled");
    const filled = queryByTestId("filled");
    expect(nonFilled).toBeInTheDocument();
    expect(filled).not.toBeInTheDocument();
  }})

  test('renders a filled heart icon when the user clicks on nonFilled icon',async ()=>{
    const nonFilled = queryByTestId("non-filled")!;
    await userEvent.click(nonFilled);

    const filled = queryByTestId("filled")!;
    const nonFilled2 = queryByTestId("non-filled")!;

    expect(filled).toBeInTheDocument();
    expect(nonFilled2).not.toBeInTheDocument();

  })
})