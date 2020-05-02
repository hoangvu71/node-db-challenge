
exports.seed = function(knex) {
  return knex("resources").insert([
    {name: "MX 201-T", description: "Track and vaporize"},
    {name: "XRocket .22", description: "Speed: 3 mach. Vomit? Yes."}
  ])
};
