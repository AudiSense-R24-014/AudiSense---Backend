import TherapistPatientService from "../services/TherapistPatient.service.js";

async function getAll(req, res) {
    try {
        const therapistPatients = await TherapistPatientService.getAll();
        res.status(200).json(therapistPatients);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const therapistPatient = await TherapistPatientService.getById(id);
        res.status(200).json(therapistPatient);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function create(req, res) {
    try {
        const therapistPatient = req.body;
        await TherapistPatientService.create(therapistPatient);
        res.status(201).send("TherapistPatient created");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        const therapistPatient = req.body;
        await TherapistPatientService.update(id, therapistPatient);
        res.status(200).send("TherapistPatient updated");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function remove(req, res) {
    try {
        const id = req.params.id;
        await TherapistPatientService.remove(id);
        res.status(200).send("TherapistPatient deleted");
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
