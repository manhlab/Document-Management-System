<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateDocumentOrganizesTable.
 */
class CreateDocumentOrganizesTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('document_organizes', function(Blueprint $table) {
			$table->unsignedInteger('document_id');
			$table->string('organize_id', 30);

			$table->primary(['document_id', 'organize_id']);
			$table->foreign('document_id')
				->references('id')
				->on('documents')
				->onUpdate('cascade')
				->onDelete('cascade');
			$table->foreign('organize_id')
				->references('id')
				->on('organizes')
				->onUpdate('cascade')
				->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('document_organizes');
	}
}
