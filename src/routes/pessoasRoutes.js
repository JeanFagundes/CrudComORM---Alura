const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.pegaPessoasAtivas);
router.get('/pessoas/todos', PessoaController.getAllPersons);
router.get('/pessoas/:id', PessoaController.getOnePeople);
router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula);
router.get('/pessoas/matriculas/:turmaId/confirmadas', PessoaController.pegaMatriculaPorTurma);
router.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas);

router.post('/pessoas', PessoaController.createPeople);
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa);
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula);
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula);
router.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa);

router.put('/pessoas/:id', PessoaController.updatePeople);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula);

router.delete('/pessoas/:id', PessoaController.deleteOnePeople);
router.delete('/matricula/:matriculaId', PessoaController.apagaMatricula);

module.exports = router;
