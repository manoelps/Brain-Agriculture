import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'farmers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('cpf_cnpj', 20).notNullable().unique()
      table.string('nome_produtor', 255).notNullable()
      table.string('nome_fazenda', 255).notNullable()
      table.string('cidade', 100).notNullable()
      table.string('estado', 2).notNullable()
      table.float('area_total_hectares').notNullable()
      table.float('area_agricultavel_hectares').notNullable()
      table.float('area_vegetacao_hectares').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
