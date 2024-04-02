import PersonService from "../services/Person.service.js"

async function getAll(req, res) {
    try {
        const persons = await PersonService.getAll();
        res.status(200).json(persons);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const person = await PersonService.getById(id);
        res.status(200).json(person);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function create(req, res) {
    try {
        const person = req.body;
        await PersonService.create(person);
        res.status(201).send("Person created");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        const person = req.body;
        await PersonService.update(id, person);
        res.status(200).send("Person updated");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function remove(req, res) {
    try {
        const id = req.params.id;
        await PersonService.remove(id);
        res.status(200).send("Person deleted");
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