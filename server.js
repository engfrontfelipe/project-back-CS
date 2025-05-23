const app = require("./app");
const port = 5000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
