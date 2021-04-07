<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use App\Entities\Book;
use App\Exports\{
    ComeInDocumentsExport,
    ComeOutDocumentsExport,
    PrivateDocumentsExport,
};

class BooksExport implements WithMultipleSheets
{
    protected $books;
    protected $from;
    protected $to;

    public function __construct($books, $from = null, $to = null){
        $this->books = $books;
        $this->from = $from;
        $this->to = $to;
    }

    public function sheets(): array
    {
        $sheets = [];

        foreach ($this->books as $book) {
            $sheets[] = $this->getSheet($book);
        }

        return $sheets;
    }

    protected function getSheet(Book $book)
    {
        if($book->isComeIn()){
            return new ComeInDocumentsExport($book->documents, $book->name, $this->from, $this->to);
        }

        if($book->isComeOut()){
            return new ComeOutDocumentsExport($book->documents, $book->name, $this->from, $this->to);
        }

        if($book->isPrivate()){
            return new PrivateDocumentsExport($book->documents, $book->name, $this->from, $this->to);
        }
    }

}
