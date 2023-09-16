// import { skills } from "../data/skill-data.js";
import { Skill } from "../models/skill.js"

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills,
      time: req.time
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newSkill(req, res) {
  console.log('In')
  res.render('skills/new')
}

function show(req, res) {
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/skills')
  })
}

function create(req, res) {
  req.body.isAcquired = false
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.skillId)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/skills')
  })
}


export {
  index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete
  
}