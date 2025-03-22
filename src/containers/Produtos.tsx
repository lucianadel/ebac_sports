// Produtos.tsx
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Produto } from '../types';
import ProdutoComponent from '../components/Produto/ProdutoComponent';
import * as S from './styles';

type Props = {
  produtos: Produto[]
  favoritos: Produto[]
  favoritar: (produto: Produto) => void;
  // aoComprar: (produto: Produto) => void;
};

const ProdutosComponent = ({ produtos, favoritos, favoritar }: Props) => {
  const produtoEstaNosFavoritos = (produto: Produto) => {
    return favoritos.some((f) => f.id === produto.id)
  };

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <ProdutoComponent
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
          produto={produto}
          favoritar={favoritar}
          // aoComprar={aoComprar}
        />
      ))}
    </S.Produtos>
  );
};

export default ProdutosComponent;
