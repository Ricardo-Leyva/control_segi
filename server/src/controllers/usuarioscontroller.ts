import {Request, Response} from 'express';
import pool from '../database';

class UsuariosController {
    
    public index (req: Request, res:Response){
        pool.query('Describe login');
        res.json('USERS');
    }
    public create (req: Request, res: Response){
        res.json({text: 'add game'});
    }

}

export const usuariosController = new UsuariosController();
export default usuariosController;