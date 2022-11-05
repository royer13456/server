"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tortasController_1 = __importDefault(require("../controllers/tortasController"));
class TortasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tortasController_1.default.list);
        this.router.get('/:id', tortasController_1.default.getOne);
        this.router.post('/', tortasController_1.default.create);
        this.router.put('/:id', tortasController_1.default.update);
        this.router.delete('/:id', tortasController_1.default.delete);
    }
}
const tortasRoutes = new TortasRoutes();
exports.default = tortasRoutes.router;
