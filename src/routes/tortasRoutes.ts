import { Router } from "express";

import tortasController from '../controllers/tortasController';

class TortasRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', tortasController.list);
        this.router.get('/:id', tortasController.getOne);
        this.router.post('/', tortasController.create);
        this.router.put('/:id', tortasController.update);
        this.router.delete('/:id', tortasController.delete);
    }

}

const tortasRoutes = new TortasRoutes();
export default tortasRoutes.router;