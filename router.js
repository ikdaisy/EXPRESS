// set the router 

import { Router } from "express";
import { getData } from "./requestHandler.js";
 const router=Router()
 router.route("/get").get(getData)

 export default router;
