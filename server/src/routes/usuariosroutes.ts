import {Router} from 'express';
import usuariosController from '../controllers/usuarioscontroller';


class Usuariosroutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', usuariosController.index);
        this.router.post('/', usuariosController.create);
    }
}
const usuariosroutes = new Usuariosroutes();
export default usuariosroutes.router;