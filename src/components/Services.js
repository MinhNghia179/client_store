import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { services } from '../utils/constants';
import hinhcay3 from '../assets/hinhcay3.jpg';
const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>Mua sắm theo bộ sưu tập</h3>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, image, title } = service;
            return (
              <div className="container">
                <img
                  src={image}
                  alt={title}
                  style={{ backgroundColor: '#fff' }}
                />
                <span className="text">{title}</span>
                <Link to={`/products/${id}`} className="link"></Link>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
    .container {
      position: relative;
      display: -webkit-flex;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      img {
        width: 100%;
      }
      .text {
        position: absolute;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0.3em;
        text-transform: uppercase;
        padding: 0 15px;
        border-bottom: 1px solid transparent;
      }
    }
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }

  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
