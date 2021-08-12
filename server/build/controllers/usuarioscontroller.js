"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosController = void 0;
const database_1 = __importDefault(require("../database"));
class UsuariosController {
    index(req, res) {
        database_1.default.query('Describe login');
        res.json('USERS');
    }
    create(req, res) {
        res.json({ text: 'add game' });
    }
}
exports.usuariosController = new UsuariosController();
exports.default = exports.usuariosController;
