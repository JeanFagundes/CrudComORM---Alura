const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.getAllPersons);
router.get("/pessoas/:id", PessoaController.getOnePeople);
router.post("/pessoas", PessoaController.createPeople);
router.put("/pessoas/:id", PessoaController.updatePeople);
router.delete("/pessoas/:id", PessoaController.deleteOnePeople);
router.get(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.pegaUmaMatricula
);
router.post("/pessoas/:estudanteId/matricula", PessoaController.criaMatricula);
router.put(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.atualizaMatricula
);
router.delete("/matricula/:matriculaId", PessoaController.apagaMatricula);
module.exports = router;
