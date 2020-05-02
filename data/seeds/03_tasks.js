
exports.seed = function(knex) {
  return knex('tasks').insert([
    {description: "Eliminate the target. Codename: The Melted-Face", notes: "Last seen at Tristan da Cunha.", project_id: 1},
    {description: "Capture the encrypted code", notes: "", project_id: 1},
    {description: "Human Trials with the SM-201", notes: "Get a mop since subjects tend to ...explode", project_id: 2}
  ])
};
