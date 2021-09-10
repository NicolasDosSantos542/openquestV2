const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const SkillSchema = new mongoose.Schema({
    name: {type: String, unique: true},
    base: String,
    category: String,
    shortDesc: String,
    description: String
});

SkillSchema.plugin(uniqueValidator);

const Skills = mongoose.model('skills', SkillSchema);

module.exports = Skills;
