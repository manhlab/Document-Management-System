<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateDocumentReceiversTable.
 */
class CreateDocumentReceiversTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('document_receivers', function(Blueprint $table) {
			$table->string('user_id', 20);
			$table->unsignedInteger('document_id');
			$table->boolean('seen')->default(false);
            $table->timestamps();
		
			$table->primary(['user_id', 'document_id']);
			$table->foreign('user_id')
				->references('id')
				->on('users')
				->onUpdate('cascade');
			$table->foreign('document_id')
				->references('id')
				->on('documents')
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
		Schema::drop('document_receivers');
	}
}
