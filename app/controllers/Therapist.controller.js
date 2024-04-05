import TherapistService from "../services/Therapist.service.js";

async function getAll(req, res) {
    try {
        const therapists = await TherapistService.getAll();
        res.status(200).json(therapists);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const therapist = await TherapistService.getById(id);
        res.status(200).json(therapist);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function create(req, res) {
    try {
        const therapist = req.body;
        await TherapistService.create(therapist);
        res.status(201).send("Therapist created");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        const therapist = req.body;
        await TherapistService.update(id, therapist);
        res.status(200).send("Therapist updated");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function remove(req, res) {
    try {
        const id = req.params.id;
        await TherapistService.remove(id);
        res.status(200).send("Therapist deleted");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const token = await TherapistService.login(email, password);
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
