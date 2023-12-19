import { prisma } from '../../server'
import { Request, Response } from "express";

const crearBus = async (req: Request, res: Response) => {
    try {
        const { code,
            route,
            source,
            destiny,
            deleted,
            reason } = req.body;
        const nuevoBus = await prisma.bus.create({
            data: {
                code,
                route,
                source,
                destiny,
                deleted,
                reason
            },
        });
        res.status(200).json({
            'data': nuevoBus,
            'message': "Bus creado con exito"
        });
    } catch (e) {
        res.status(500).json({
            error: e,
            'message': 'error al crear el Bus'
        });
    }
};


const obtenerBus = async (req: Request, res: Response) => {
    try {
        const { code} = req.body;
        const bus = await prisma.bus.findFirst({
            where: {
                code: code,
                deleted: false
            },
        });
        res.status(200).json(bus);
    } catch (e) {
        res.status(500).json({ 'error': e, 'message':"error al obtener el bus" });
    }
};



const eliminarBus = async (req: Request, res: Response) => {
    try {
        const { id, reason } = req.body;
        const eliminarBus = await prisma.bus.update({
            where: {
                id: id,
            },
            data: {
                deleted: true,
                reason: reason
            }
        });
        res.status(200).json(eliminarBus);
    } catch (e) {
        res.status(500).json({ 'error': e, 'message':"error al eliminar el cliente"});
    }
};

export default {
    crearBus,

    obtenerBus,

    eliminarBus
}