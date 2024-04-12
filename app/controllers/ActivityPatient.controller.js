import ActivityPatientService from "../services/ActivityPatient.service.js";

async function getAll(req, res) {
    try {
        const activityPatients = await ActivityPatientService.getAll();
        res.status(200).json(activityPatients);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const activityPatient = await ActivityPatientService.getById(id);
        res.status(200).json(activityPatient);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function create(req, res) {
    try {
        const activityPatient = req.body;
        await ActivityPatientService.create(activityPatient);
        res.status(201).send("ActivityPatient created");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        const activityPatient = req.body;
        await ActivityPatientService.update(id, activityPatient);
        res.status(200).send("ActivityPatient updated");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function remove(req, res) {
    try {
        const id = req.params.id;
        await ActivityPatientService.remove(id);
        res.status(200).send("ActivityPatient deleted");
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