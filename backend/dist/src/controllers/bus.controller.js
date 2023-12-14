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
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../../server");
const crearBus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code, route, source, destiny, deleted, reason } = req.body;
        const nuevoBus = yield server_1.prisma.bus.create({
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
    }
    catch (e) {
        res.status(500).json({
            error: e,
            'message': 'error al crear el Bus'
        });
    }
});
const obtenerBus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.body;
        const bus = yield server_1.prisma.bus.findFirst({
            where: {
                code: code,
                deleted: false
            },
        });
        res.status(200).json(bus);
    }
    catch (e) {
        res.status(500).json({ 'error': e, 'message': "error al obtener el bus" });
    }
});
const eliminarBus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, reason } = req.body;
        const eliminarBus = yield server_1.prisma.bus.update({
            where: {
                id: Number(id),
            },
            data: {
                deleted: true,
                reason: reason
            }
        });
        res.status(200).json({
            'data': eliminarBus,
            'message': "bus eliminado con exito"
        });
    }
    catch (e) {
        res.status(500).json({ 'error': e, 'message': "error al eliminar el cliente" });
    }
});
exports.default = {
    crearBus,
    obtenerBus,
    eliminarBus
};
