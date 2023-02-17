const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.pegaPessoasAtivas);
router.get('/pessoas/todos', PessoaController.getAllPersons);
router.get('/pessoas/:id', PessoaController.getOnePeople);
router.post('/pessoas', PessoaController.createPeople);
router.put('/pessoas/:id', PessoaController.updatePeople);
router.delete('/pessoas/:id', PessoaController.deleteOnePeople);
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa);

router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula);
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula);
router.delete('/matricula/:matriculaId', PessoaController.apagaMatricula);
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula);
module.exports = router;
