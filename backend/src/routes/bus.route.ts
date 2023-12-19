import express from "express";
import BusController from "../controllers/bus.controller";

const router = express.Router();

router.post("/crear/flight",BusController.crearBus);
router.get("/ver/flight",BusController.obtenerBus);
// router.get("/ver/cliente/:id",BusController.obtenerCliente);
// router.patch("/actualizar/cliente/:id",BusController.actualizarCliente);
router.delete("/eliminar/flight",BusController.eliminarBus);

export default router;