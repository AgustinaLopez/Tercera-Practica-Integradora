import { Router } from 'express';
import * as ControlerStudens from '../controllers/student.controllers.js'

const router = Router();

router.get('/', ControlerStudens.GetStudents)
router.post('/', ControlerStudens.ceateStudent)

export default router;



// import { Router } from 'express';
// //import del service repository:
// import {studentService} from '../services/repository/services.js';

// const router = Router();

// //TODO: Migrar a patrón controller:

// router.get('/',async(req,res)=>{
//     try {
//         let students = await studentService.getAll();
//         res.send(students);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({error:  error, message: "No se pudo obtener los estudiantes."});
//     }
    
// })

// router.post('/',async(req,res)=>{
//     try {
//         let result = await studentService.createStudent(req.body);
//         res.status(201).send(result);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({error:  error, message: "No se pudo guardar el estudiante."});
//     }
// })

// export default router;