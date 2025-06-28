export function geradorDeTagsDeIdentificacao(nome) {
  if (typeof nome !== 'string') throw new Error('Nome deve ser string');
  return nome.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  if (typeof idade !== 'number' || typeof porte !== 'string') {
    return false;
  }
  return idade >= 1 && porte.toUpperCase() === 'M';
}

export function calcularConsumoDeRacao(nome, idade, peso) {
  if (typeof peso !== 'number' || peso <= 0) {
    throw new Error('Peso inválido');
  }
  return Math.round(peso * 300); // Garante número inteiro
}

export function decidirTipoDeAtividadePorPorte(porte) {
  const portes = {
    pequeno: 'brincar dentro de casa',
    médio: 'caminhada no quarteirão',
    grande: 'correr no parque'
  };
  
  return portes[porte.toLowerCase()] || 'porte inválido';
}

export async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Pipoca'), 100); // Simula melhor operação assíncrona
  });
}