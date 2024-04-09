import PatientCompletedTaskService from "../services/PatientCompletedTask.service.js";

async function getAll(req, res) {
    try {
        const patientCompletedTasks = await PatientCompletedTaskService.getAll();
        res.status(200).json(patientCompletedTasks);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const patientCompletedTask = await PatientCompletedTaskService.getById(id);
        res.status(200).json(patientCompletedTask);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function create(req, res) {
    try {
        const patientCompletedTask = req.body;
        await PatientCompletedTaskService.create(patientCompletedTask);
        res.status(201).send("PatientCompletedTask created");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        const patientCompletedTask = req.body;
        await PatientCompletedTaskService.update(id, patientCompletedTask);
        res.status(200).send("PatientCompletedTask updated");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function remove(req, res) {
    try {
        const id = req.params.id;
        await PatientCompletedTaskService.remove(id);
        res.status(200).send("PatientCompletedTask deleted");
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