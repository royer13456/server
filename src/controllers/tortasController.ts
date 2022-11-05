import {query, Request, Response} from 'express';

import pool from '../database'

class TortasController{

    public async list (req: Request, res: Response) {
        const tortas = await pool.query('SELECT * FROM tortas');
        res.json(tortas)
    } 

    public async getOne (req: Request, res: Response): Promise<any> {
       const { id } = req.params;
       const tortas = await pool.query('SELECT * FROM tortas WHERE id_tortas = ?', [id]);
       if (tortas.length > 0){
        return res.json(tortas[0]);
       }
       res.status(404).json({text: 'el juego no existe'});
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO tortas set ?', [req.body]);
        res.json({message: 'torta saved'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE tortas set ? WHERE id_tortas = ?', [req.body, id]);
        res.json({message: 'el juego fue actualizado'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM tortas WHERE id_tortas = ?', [id]);
        res.json({message: 'la torta ha sido eliminada'});
    }

}

const tortasController = new TortasController();
export default tortasController;




