/* eslint-disable prettier/prettier */
import { useSelector } from 'react-redux';
import * as S from './styles';

import cesta from '../../assets/cesta.png';
import { paraReal } from '../Produto/ProdutoComponent';

import { RootReducer } from '../../store';

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens);

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco;
    return acc;
  }, 0);

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <img src={cesta} alt="Cesta" />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  );
};

export default Header;
