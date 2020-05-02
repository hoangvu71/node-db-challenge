
exports.seed = function(knex) {
  return knex('projects').insert([
    {name: "Project Xipher.2", description: "Classified", completed: false},
    {name: "Project Superman.MAS", description: "Classified", completed: false}
  ])
    
};
