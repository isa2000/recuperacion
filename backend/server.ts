// import http from 'http';
import express, { Request, Response  } from 'express'
import {  PrismaClient} from '@prisma/client'
import BusRouter from './src/routes/bus.route'
import cors from 'cors';
// import path from 'path';

export const prisma = new PrismaClient();
// const exphbs  = require('express-handlebars');


const app = express();
const port = process.env.PORT;
app.use(cors({ origin: 'http://localhost:4200' }));

async function main() {
  app.use(express.json());

  app.use("/api/v1/",BusRouter);
  // app.use('/', ServerViews);


  // Catch unregistered routes
  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Ruta ${req.originalUrl} no encontrada` });
  });

  app.listen(port, () => {
    console.log(`Server escuchando en el puerto ${port}`);
  });
}

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });