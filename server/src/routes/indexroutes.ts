import {Router} from 'express';
import { indexController } from '../controllers/indexcontroller';


class Indexroutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index);
        
         
    }
}
const indexroutes = new Indexroutes();
export default indexroutes.router;
