function calculateBetter(amountCinemas, priceCinemas, arrStreaming) {
  let totalCinemas = amountCinemas * priceCinemas;
  let totalStreaming = arrStreaming.reduce((z, x) => z + x, 0);

  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  let min = Math.min(...[totalStreaming, totalCinemas]);
  let result = {};
  if (totalCinemas == totalStreaming) {
    result = {
      winner: null,
      amount: min,
      result: `¡Empate! En cuanto a lo económico ambos cuestan ${formatter.format(
        min
      )}.`,
    };
  } else if (min == totalCinemas) {
    result = {
      winner: "cinema",
      amount: totalCinemas,
      result: `Te conviene más ir al Cine. En total costaría ${formatter.format(
        min
      )}.`,
    };
  } else if (min == totalStreaming) {
    result = {
      winner: "streaming",
      amount: totalStreaming,
      result: `Te conviene más ${`suscribirte a ${
        arrStreaming.filter((x) => x != 0).length > 1
          ? "las plataformas"
          : "la plataforma"
      }`}. En total costaría ${formatter.format(min)}.`,
    };
  }

  return result;
}

const streamingPlatforms = [
  "Netflix",
  "Disney +",
  "Amazon Prime Video",
  "HBO",
  "Crunchyroll",
];
