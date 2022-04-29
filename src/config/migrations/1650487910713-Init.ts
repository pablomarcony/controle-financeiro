import {MigrationInterface, QueryRunner} from "typeorm";
import * as bcrypt from 'bcrypt';

export class Init1650487910713 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		/** --------------
		@USUÁRIO
		-------------- */
		// CRIA SENHA CRIPTOGRAFADA
		var senha = await bcrypt.hash('123456', 12);
		// INSERÇÃO DE USUÁRIO NA TABELA USUARIO
		await queryRunner.query(`
				INSERT INTO security.usuario (nome, email, senha) VALUES
						('Pablo Marcony', 'pablomarconyjf@gmail.com', '${senha}')
		`)
	}

	

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.clearTable('security.usuario');
	}
}
