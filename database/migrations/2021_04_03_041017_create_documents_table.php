<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateDocumentsTable.
 */
class CreateDocumentsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('documents', function(Blueprint $table) {
            $table->increments('id');
			$table->string('symbol', 30)->nullable();
			$table->text('abstract')->nullable();
			$table->unsignedInteger('book_id');
			$table->string('type_id', 2);
			$table->unsignedInteger('signer_id')->nullable();
			$table->date('sign_at')->nullable();
			$table->string('creator_id', 20);
			$table->string('writer_id', 20)->nullable();
			$table->date('effective_at');
			$table->string('publisher_id', 30);
			$table->unsignedInteger('link_id')->nullable();
			$table->timestamps();
			
			$table->foreign('book_id')
				->references('id')
				->on('books')
				->onUpdate('cascade');
			$table->foreign('type_id')
				->references('id')
				->on('document_types')
				->onUpdate('cascade');
			$table->foreign('signer_id')
				->references('id')
				->on('signers')
				->onUpdate('cascade');
			$table->foreign('creator_id')
				->references('id')
				->on('users')
				->onUpdate('cascade');
			$table->foreign('writer_id')
				->references('id')
				->on('users')
				->onUpdate('cascade');
			$table->foreign('publisher_id')
				->references('id')
				->on('organizes')
				->onUpdate('cascade');
		});

		Schema::table('documents', function (Blueprint $table) {
			$table->foreign('link_id')
				->references('id')
				->on('documents')
				->onUpdate('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('documents');
	}
}
