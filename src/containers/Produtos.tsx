/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Produto } from '../types';
import ProdutoComponent from '../components/Produto';
import * as S from './styles';

type Props = {
  produtos: Produto[];
  favoritos: Produto[];
  favoritar: (produto: Produto) => void;
};

const ProdutosComponent = ({ produtos, favoritos, favoritar }: Props) => {
  const produtoEstaNosFavoritos = (produto: Produto) => {
    return favoritos.some((f) => f.id === produto.id);
  };

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <ProdutoComponent
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
          produto={produto}
          favoritar={favoritar} aoComprar={function (_produto: async (async function for (let index = 0; index < Array.length; index++) {
            const element = array[index];
            name
          }(params:type) {
            params
          }:type) => {
            ProdutoType
          }): void {
            throw new Error('Function not implemented.');
          } }        />
      ))}
    </S.Produtos>
  );
};

export default ProdutosComponent;
