
export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}


export function verificarSePodeSerAdotado(idade, porte) {
  // Porte médio (M) e idade mínima de 1 ano para adoção
  if (idade >= 1 && porte === 'M') {
    return true;
  }
  return false;
}


export function calcularConsumoDeRacao(nome, idade, peso) {
  // Consumo diário: peso * 300 gramas
  return peso * 300;
}


export function decidirTipoDeAtividadePorPorte(porte) {
  let atividade;

  if (porte === 'pequeno') {
    atividade = 'brincar dentro de casa';
  } else if (porte === 'médio') {
    atividade = 'caminhada no quarteirão';
  } else if (porte === 'grande') {
    atividade = 'correr no parque';
  } else {
    atividade = 'porte inválido';
  }

  return atividade;
}

// 5) Função assíncrona que retorna um valor
export async function buscarDadoAsync() {
  // Simula uma operação assíncrona (como uma chamada de API)
  return 'Pipoca';
}
