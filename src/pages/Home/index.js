import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/chuteira-futsal-nike-beco-2-futsal/26/004-5830-026/004-5830-026_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong> Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/chuteira-futsal-nike-beco-2-futsal/26/004-5830-026/004-5830-026_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong> Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/chuteira-futsal-nike-beco-2-futsal/26/004-5830-026/004-5830-026_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong> Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/chuteira-futsal-nike-beco-2-futsal/26/004-5830-026/004-5830-026_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong> Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/chuteira-futsal-nike-beco-2-futsal/26/004-5830-026/004-5830-026_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong> Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/chuteira-futsal-nike-beco-2-futsal/26/004-5830-026/004-5830-026_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong> Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

export { Home };
