import shuffle from 'just-shuffle';

export function realizarSorteio(participantes) {
  const totalParticipantes = participantes.length;
  const participantesEmbaralhado = shuffle(participantes);
  const resultado = new Map('');

  for (let index = 0; index < totalParticipantes; index++) {
    const indiceDoProximo = index === totalParticipantes - 1 ? 0 : index + 1;
    resultado.set(
      participantesEmbaralhado[index],
      participantesEmbaralhado[indiceDoProximo]
    );
  }

  return resultado;
}

export default realizarSorteio;
