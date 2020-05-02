
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', (table) => {
            table.increments("id");
            table.text("name")
                .notNullable()
                .unique();
            table.text("description");
            table.boolean("completed")
                .notNullable()
                .defaultTo(false);
        })
        .createTable('resources', (table) => {
            table.increments("id");
            table.text("name")
                .notNullable()
                .unique();
            table.text("description");
        })
        .createTable('tasks', (table) => {
            table.increments("id");
            table.text("description")
                .notNullable();
            table.text("notes");
            table.boolean("completed")
                .notNullable()
                .defaultTo(false);
            table.integer("project_id")
                .references("id")
                .inTable("projects")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
        })

        .createTable('projects_resources', (table) => {
            table.integer("project_id")
                .references("id")
                .inTable("projects")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table.integer("resource_id")
                .references("id")
                .inTable("resources")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("projects")
        .dropTableIfExists("projects_resources")
        .dropTableIfExists("resources")
        .dropTableIfExists("tasks")
};
