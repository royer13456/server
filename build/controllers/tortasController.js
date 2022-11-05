"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class TortasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tortas = yield database_1.default.query('SELECT * FROM tortas');
            res.json(tortas);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const tortas = yield database_1.default.query('SELECT * FROM tortas WHERE id_tortas = ?', [id]);
            if (tortas.length > 0) {
                return res.json(tortas[0]);
            }
            res.status(404).json({ text: 'el juego no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tortas set ?', [req.body]);
            res.json({ message: 'torta saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE tortas set ? WHERE id_tortas = ?', [req.body, id]);
            res.json({ message: 'el juego fue actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tortas WHERE id_tortas = ?', [id]);
            res.json({ message: 'la torta ha sido eliminada' });
        });
    }
}
const tortasController = new TortasController();
exports.default = tortasController;
