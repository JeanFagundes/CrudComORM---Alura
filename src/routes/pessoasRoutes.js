const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.getAllPersons);
router.get("/pessoas/:id", PessoaController.getOnePeople);
router.post("/pessoas", PessoaController.createPeople);
router.put("/pessoas/:id", PessoaController.updatePeople);
router.delete("/pessoas/:id", PessoaController.deleteOnePeople);

module.exports = router;
