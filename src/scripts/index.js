function calculateBetter(amountCinemas, priceCinemas, arrStreaming) {
  let totalCinemas = amountCinemas * priceCinemas;
  let totalStreaming = arrStreaming.reduce((z, x) => z + x, 0);
  let result = "";
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  if (totalCinemas == totalStreaming)
    result = `¡Empate! En cuanto a lo económico ambos cuestan ${formatter.format(
      totalCinemas
    )}.`;
  else
    result = `Te conviene más ${
      totalCinemas < totalStreaming
        ? "ir al Cine"
        : `suscribirte a ${
            arrStreaming.filter((x) => x != 0).length > 1
              ? "las plataformas"
              : "la plataforma"
          }`
    }. En total costaría ${formatter.format(
      Math.min(...[totalStreaming, totalCinemas])
    )}.`;
  return result;
}

const streamingPlatforms = [
  "Netflix",
  "Disney +",
  "Amazon Prime Video",
  "HBO",
  "Crunchyroll",
];
