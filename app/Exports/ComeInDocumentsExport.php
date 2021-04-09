<?php

namespace App\Exports;

use PhpOffice\PhpSpreadsheet\Shared\Date;

class ComeInDocumentsExport extends BaseDocumentsExport
{
    public function headings(): array
    {
        return [
            'Дата получения',
            'Место выдачи',
            'Ký hiệu',
            'Тип документа',
            'Краткое содержание',
            'Получатель',
        ];
    }

    public function map($document): array
    {
        return [
            Date::dateTimeToExcel($document->effective_at),
            $document->publisher->name,
            $document->symbol,
            $document->type->name,
            $document->abstract,
            implode(', ', ($document->receivers->map(function($receiver){
                return $receiver->name;
            }))->toArray()),
        ];
    }

}
