import express, { Request, Response, NextFunction } from "express"
import { Configs } from "./configs";
import { initializeDatabase } from "./database";
import logger from "./utils/logger";
import api from "./api";


import cors from "cors";
import { reqTracker } from "./middlewares/requestTracker";

const app = express();
const port = Configs.project.port

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(reqTracker)
app.use(api);


app.listen(port, async () => {
    logger.info(`${Configs.project.name}`)
    logger.info(`Server initiated on port ${port}`)
    
    ////// STARTUP SCRIPTS //////
    await initializeDatabase();
    // await databaseMigration()
    // enableSubscriptionCheckerRoutine()
    
  
    logger.info(`Server now listening on port ${port}`)
    if(Configs.project.docs){
      logger.info(`See API Documentation at ${Configs.project.docs}`)
    }
  });
