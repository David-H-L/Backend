import { Router } from "express";
import VoteRouter from "../modules/vote/votos.routes";

const router = Router();

router.use('/voto', VoteRouter);


router.use((req, res) => {
  res.status(404).send({
    message: 'page not found ...',
    status: 404,
    ok: false,
  })
})

export default router;