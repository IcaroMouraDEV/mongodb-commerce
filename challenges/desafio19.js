db.produtos.updateMany(
  {},
  {
    $pull: {
      ingredientes: "cebola",
    },
  },
);

db.produtos.find(
  {},
  {
    _id: false,
    nome: 1,
    ingredientes: 1,
  },
);