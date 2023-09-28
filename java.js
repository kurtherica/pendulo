function calcularPosicao(amplitude, comprimento, tempo) {
    return amplitude * Math.cos(Math.sqrt(9.81 / comprimento) * tempo);
  }
  
  
  function calcularVelocidade(amplitude, comprimento, tempo) {
    return -amplitude * Math.sqrt(9.81 / comprimento) * Math.sin(Math.sqrt(9.81 / comprimento) * tempo);
  }
  
  
  function calcularAceleracao(amplitude, comprimento, tempo) {
    return -9.81 * Math.sin(Math.sqrt(9.81 / comprimento) * tempo);
  }
  
  const amplitude = 1.0; // Amplitude em metros
  const comprimento = 9.81; // Comprimento em metros
  
  const tempos = [0, 1, 2, 3, 4];
  
  for (const tempo of tempos) {
    const posicao = calcularPosicao(amplitude, comprimento, tempo);
    const velocidade = calcularVelocidade(amplitude, comprimento, tempo);
    const aceleracao = calcularAceleracao(amplitude, comprimento, tempo);
  
    console.log(`Tempo: ${tempo} s`);
    console.log(`Posição: ${posicao.toFixed(2)} m`);
    console.log(`Velocidade: ${velocidade.toFixed(2)} m/s`);
    console.log(`Aceleração: ${aceleracao.toFixed(2)} m/s²`);
    console.log('------------------------');
  }
  