db.produtos.find(
  { vendidos: { $gt: 50, $lt: 100 } },
  { nome: 1, vendidos: 1, _id: false },
).sort({ vendidos: 1 });