import styled from 'styled-components'
import Wrapper from './Wrapper'

const FooterStyled = styled.footer`
  border-top: 1px solid #e5e5e5;
  margin: 2rem 0 0 0;
  padding: 6rem 0 4rem 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  h2 {
    font-size: 1rem;
    font-weight: 500;
    margin: 0 0 3rem 0;
  }
  ul {
    li {
      color: gray;
      font-size: 0.85rem;
      margin: 0 0 0.85rem 0;
    }
  }
`

export default function Footer() {
  return (
    <Wrapper>
      <FooterStyled>
        <div>
          <h2>Resources</h2>
          <ul>
            <li>Gift Cards</li>
            <li>Find a Store</li>
            <li>Become a member</li>
            <li>Nike x NBA</li>
          </ul>
        </div>
        <div>
          <h2>Help</h2>
          <ul>
            <li>Gift Cards</li>
            <li>Find a Store</li>
            <li>Become a member</li>
            <li>Nike x NBA</li>
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li>Gift Cards</li>
            <li>Find a Store</li>
            <li>Become a member</li>
            <li>Nike x NBA</li>
          </ul>
        </div>
        <div>
          <h2>Promotions & Discounts</h2>
          <ul>
            <li>Gift Cards</li>
            <li>Find a Store</li>
            <li>Become a member</li>
            <li>Nike x NBA</li>
          </ul>
        </div>
        <div>
          <h2>United States</h2>
        </div>
      </FooterStyled>
    </Wrapper>
  )
}
