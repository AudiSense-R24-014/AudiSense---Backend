import ChildService from "../services/Child.service.js";

async function getAll(req, res) {
    try {
        const children = await ChildService.getAll();
        res.status(200).json(children);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const child = await ChildService.getById(id);
        res.status(200).json(child);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function create(req, res) {
    try {
        const child = req.body;
        await ChildService.create(child);
        res.status(201).send("Child created");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        const child = req.body;
        await ChildService.update(id, child);
        res.status(200).send("Child updated");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function remove(req, res) {
    try {
        const id = req.params.id;
        await ChildService.remove(id);
        res.status(200).send("Child deleted");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const token = await ChildService.login(email, password);
        res.status(200).json({ token: token });
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

export default {
    getAll,
    getById,
    create,
    update,
    remove,
    login
};

