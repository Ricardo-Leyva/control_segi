"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioscontroller_1 = __importDefault(require("../controllers/usuarioscontroller"));
class Usuariosroutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usuarioscontroller_1.default.index);
        this.router.post('/', usuarioscontroller_1.default.create);
    }
}
const usuariosroutes = new Usuariosroutes();
exports.default = usuariosroutes.router;
