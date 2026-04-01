import { Request, Response, Router } from "express";

const router = Router();

router.get("/category", (req: Request, res: Response) => {
    res.json([
        {id: 0, name: "동화"},
        {id: 1, name: "소설"},
        {id: 2, name: "사회"}
    ]);
})

router.post("/users/join", (req: Request, res: Response) => {
    res.status(201).end();
})

export default router;