const count = db.produtos.countDocuments({});

db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: count,
});

db.resumoProdutos.find({}, { _id: false });