import express, { Application } from "express";
// import morgan from 'morgan';
// import cors from 'cors'; 
import cors from "cors";
import morgan from "morgan"

import indexroutes from "./routes/indexroutes";
import usuariosroutes from "./routes/usuariosroutes";


class Server {
  public  app : Application;

    constructor(){
       this.app = express();
       this.config();
       this.routes(); 
    }

    config(): void{
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes(): void{
        this.app.use('/', indexroutes);
        this.app.use('/api/usuarios',usuariosroutes);
    }
    start(): void{
        this.app.listen( this.app.get('port'), () =>{
            console.log('Server on port ', this.app.get('port'));
            
        });
    }

}
const server = new Server();
server.start();