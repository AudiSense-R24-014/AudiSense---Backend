import PatientHearingLevelService from "../services/PatientHearingLevel.service.js";

async function getAll(req, res) {
    try {
        const patientHearingLevels = await PatientHearingLevelService.getAll();
        res.status(200).json(patientHearingLevels);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const patientHearingLevel = await PatientHearingLevelService.getById(id);
        res.status(200).json(patientHearingLevel);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function create(req, res) {
    try {
        const patientHearingLevel = req.body;
        await PatientHearingLevelService.create(patientHearingLevel);
        res.status(201).send("PatientHearingLevel created");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        const patientHearingLevel = req.body;
        await PatientHearingLevelService.update(id, patientHearingLevel);
        res.status(200).send("PatientHearingLevel updated");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function remove(req, res) {
    try {
        const id = req.params.id;
        await PatientHearingLevelService.remove(id);
        res.status(200).send("PatientHearingLevel deleted");
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