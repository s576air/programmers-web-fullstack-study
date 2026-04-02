import { Request, Response, Router } from "express";

const router = Router();

router.get("/category", (req: Request, res: Response) => {
    return res.json([
        {id: 0, name: "동화"},
        {id: 1, name: "소설"},
        {id: 2, name: "사회"}
    ]);
})

router.post("/users/join", (req: Request, res: Response) => {
    return res.status(201).end();
})

router.post("/users/reset", (req: Request, res: Response) => {
    return res.status(200).end();
})

router.put("/users/reset", (req: Request, res: Response) => {
    return res.status(200).end();
})

router.post("/users/login", (req: Request, res: Response) => {
    let n: number = parseInt(req.body.password);
    if (Number.isNaN(n)) {
        return res.json({
            token: 'token!'
        });
    } else {
        return res.status(n).end();
    }
    
})

export default router;