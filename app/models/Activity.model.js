class Activity {
    /**
     * @type {number}
     */
    id;
    
    /**
     * @type {string}
     */
    name;
    
    /**
     * @type {string}
     */
    description;
    
    /**
     * @type {string}
     */
    AVTLevel;
    
    /**
     * @type {string}
     */
    difficulty;

    /**
     * Creates an Activity object.
     * @param {number} id - The ID of the activity.
     * @param {string} name - The name of the activity.
     * @param {string} description - The description of the activity.
     * @param {string} AVTLevel - The AVT level of the activity.
     * @param {string} difficulty - The difficulty level of the activity.
     */
    constructor(id, name, description, AVTLevel, difficulty) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.AVTLevel = AVTLevel;
        this.difficulty = difficulty;
    }
}

export default Activity;
