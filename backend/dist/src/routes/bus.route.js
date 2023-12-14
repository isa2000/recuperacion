"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bus_controller_1 = __importDefault(require("../controllers/bus.controller"));
const router = express_1.default.Router();
router.post("/crear/bus", bus_controller_1.default.crearBus);
router.get("/ver/bus", bus_controller_1.default.obtenerBus);
// router.get("/ver/cliente/:id",BusController.obtenerCliente);
// router.patch("/actualizar/cliente/:id",BusController.actualizarCliente);
router.delete("/eliminar/bus", bus_controller_1.default.eliminarBus);
exports.default = router;
