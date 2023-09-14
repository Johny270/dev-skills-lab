import mongoose from "mongoose";

const Schema = mongoose.Schema

const skillSchema = new Schema({
  skillName: String,
  isAcquired: Boolean
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}