/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class Db1786583809709 {
    name = 'Db1786583809709'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`ator\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome_ator\` varchar(255) NOT NULL, \`nacionalidade\` varchar(255) NOT NULL, \`foto_ator\` varchar(255) NULL, \`sexo\` enum ('masculino', 'feminino') NOT NULL, \`data_nascimento\` datetime NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`diretor\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome_diretor\` varchar(255) NOT NULL, \`nacionalidade\` varchar(255) NOT NULL, \`foto_diretor\` varchar(255) NULL, \`sexo\` enum ('masculino', 'feminino') NOT NULL, \`data_nascimento\` datetime NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`genero\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome_genero\` varchar(60) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`premiacao\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome_premiacao\` varchar(60) NOT NULL, \`valor_premiacao\` decimal NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`User\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`typeUser\` enum ('admin', 'comum') NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`User\``);
        await queryRunner.query(`DROP TABLE \`premiacao\``);
        await queryRunner.query(`DROP TABLE \`genero\``);
        await queryRunner.query(`DROP TABLE \`diretor\``);
        await queryRunner.query(`DROP TABLE \`ator\``);
    }
}
