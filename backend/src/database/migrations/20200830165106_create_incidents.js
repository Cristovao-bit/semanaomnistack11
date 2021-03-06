exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        // sequência de números para o acesso da ong
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        // relacionamentos de tabelas
        table.string('ong_id').notNullable();

        // chave estrangeira
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
