import ActivityService from "../services/Activity.service.js";

async function getAll(req, res) {
    try {
        const activities = await ActivityService.getAll();
        res.status(200).json(activities);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const activity = await ActivityService.getById(id);
        res.status(200).json(activity);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function create(req, res) {
    try {
        const activity = req.body;
        await ActivityService.create(activity);
        res.status(201).send("Activity created");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        const activity = req.body;
        await ActivityService.update(id, activity);
        res.status(200).send("Activity updated");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function remove(req, res) {
    try {
        const id = req.params.id;
        await ActivityService.remove(id);
        res.status(200).send("Activity deleted");
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