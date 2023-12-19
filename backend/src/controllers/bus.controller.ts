import { prisma } from '../../server'
import { Request, Response } from "express";


//estaesunejemplodepractica

const crearBus = async (req: Request, res: Response) => {
    try {
        const { code,
                number,
                to,
                from,
                capacity, } = req.body;
        const nuevoBus = await prisma.flight.create({
            data: {
                code,
                number,
                to,
                from,
                capacity,
                
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


// const obtenerBus = async (req: Request, res: Response) => {
//     try {
//         const { code} = req.body;
//         const bus = await prisma.bus.findFirst({
//             where: {
//                 code: code,
//                 deleted: false
//             },
//         });
//         res.status(200).json(bus);
//     } catch (e) {
//         res.status(500).json({ 'error': e, 'message':"error al obtener el bus" });
//     }
// };



const eliminarBus = async (req: Request, res: Response) => {
    try {
        const { id, reason } = req.body;
        const eliminarBus = await prisma.flight.delete({
            where: {
                id: id,
            },
        });
        res.status(200).json(eliminarBus);
    } catch (e) {
        res.status(500).json({ 'error': e, 'message':"error al eliminar el cliente"});
    }
};

export default {
    crearBus,

    eliminarBus
}