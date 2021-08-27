const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const SkillSchema = new mongoose.Schema({

});

SkillSchema.plugin(uniqueValidator);

const Skills = mongoose.model('skills', SkillSchema);

module.exports = Skills;
