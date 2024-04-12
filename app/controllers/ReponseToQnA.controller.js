import ReponseToQnAService from "../services/ReponseToQnA.service.js";

async function getAll(req, res) {
    try {
        const reponseToQnAs = await ReponseToQnAService.getAll();
        res.status(200).json(reponseToQnAs);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const reponseToQnA = await ReponseToQnAService.getById(id);
        res.status(200).json(reponseToQnA);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function create(req, res) {
    try {
        const reponseToQnA = req.body;
        await ReponseToQnAService.create(reponseToQnA);
        res.status(201).send("ReponseToQnA created");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        const reponseToQnA = req.body;
        await ReponseToQnAService.update(id, reponseToQnA);
        res.status(200).send("ReponseToQnA updated");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function remove(req, res) {
    try {
        const id = req.params.id;
        await ReponseToQnAService.remove(id);
        res.status(200).send("ReponseToQnA deleted");
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
    remove
};