import connection from '../database/connection';

const dropTable = async (name: string) => {
  await connection.schema.dropTableIfExists(name);
};

const dropTables = async () => {
  await dropTable('creations');
  await dropTable('enabled_fonts');
  await dropTable('fonts');
  await dropTable('role_permissions');
  await dropTable('permissions');
  await dropTable('profiles');
  await dropTable('designs');
  await dropTable('users');
  await dropTable('roles');
  await dropTable('frames');
  await dropTable('categories');
  await dropTable('migrations_lock');
  await dropTable('migrations');
  console.log('TABLES DROPPED');
};

dropTables();
