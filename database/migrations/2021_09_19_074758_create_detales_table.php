<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detales', function (Blueprint $table) {
            $table->id();
            $table->text('photo')->nullable() ; 
            $table->string('facebook')->nullable()  ; 
            $table->string('instagram')->nullable()  ; 
            $table->integer('whatsapp')->nullable() ;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detales');
    }
}
