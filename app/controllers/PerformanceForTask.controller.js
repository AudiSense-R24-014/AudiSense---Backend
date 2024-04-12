import PerformanceForTaskService from "../services/PerformanceForTask.service.js";

async function getAll(req, res) {
    try {
        const performanceForTasks = await PerformanceForTaskService.getAll();
        res.status(200).json(performanceForTasks);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const performanceForTask = await PerformanceForTaskService.getById(id);
        res.status(200).json(performanceForTask);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function create(req, res) {
    try {
        const performanceForTask = req.body;
        await PerformanceForTaskService.create(performanceForTask);
        res.status(201).send("PerformanceForTask created");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        const performanceForTask = req.body;
        await PerformanceForTaskService.update(id, performanceForTask);
        res.status(200).send("PerformanceForTask updated");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function remove(req, res) {
    try {
        const id = req.params.id;
        await PerformanceForTaskService.remove(id);
        res.status(200).send("PerformanceForTask deleted");
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
