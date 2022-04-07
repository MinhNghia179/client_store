import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';
const CartItems = () => {
  const { cart, clearCart } = useCartContext();

  const fakeCart = [
    {
      id: 'SMXMXMW000039',
      image:
        'https://cdn.pnj.io/images/thumbnails/485/485/detailed/118/smxmxmw000039-mat-day-chuyen-bac-dinh-da-pnjsilver-1.png',
      name: 'Mặt dây chuyền Bạc đính đá Silver True Love',
      price: 545000,
      amount: '1',
    },
    {
      id: 'SBXMZTW000003',
      image:
        'https://cdn.pnj.io/images/thumbnails/485/485/detailed/70/sbxmztw000003-bong-tai-bac-dinh-da-pnjsilver-aura-01.png',
      name: 'Bông tai bạc đính đá Silver Aura',
      price: 795000,
      amount: '2',
    },
    {
      id: 'SCXMZTW000003',
      image:
        'https://cdn.pnj.io/images/thumbnails/485/485/detailed/70/scxmztw000003-day-co-bac-dinh-da-pnjsilver-aura.png',
      name: 'Dây cổ Bạc đính đá STYLE By Aura',
      price: 878500,
      amount: '1',
    },
  ];

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {fakeCart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn btn-coutinue-shopping">
          continue shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;
export default CartItems;
