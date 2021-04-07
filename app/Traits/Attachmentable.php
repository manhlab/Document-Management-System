<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use App\Contracts\Repositories\AttachmentRepository;
use Illuminate\Support\Facades\Storage;
use App\Entities\Attachment;

/**
 * Trait Attachmentable
 */
trait Attachmentable
{
    protected function attachment(UploadedFile $file, $document_id)
    {
        $path = Storage::putFileAs($this->getStoreFolderName(), $file, $this->getFileName($file));
        
        return $this->repository()->create([
            'document_id' => $document_id,
            'name' => $file->getClientOriginalName(),
            'extension' => $file->getClientOriginalExtension(),
            'size' => Storage::size($path) / 100000,
            'path' => $path,
            'downloads' => 0,
        ]);
    }

    protected function attachments($files, $document_id)
    {
        if(!is_array($files))
            $this->attachment($files, $document_id);

        foreach ($files as $file) {
            $this->attachment($file, $document_id);
        }
    }

    protected function downloadAttachment(Attachment $attachment){
        $response = Storage::download($attachment->path, $attachment->name);
        $attachment->increment('downloads');
        return $response;
    }

    protected function removeAttachment(Attachment $attachment){
        return Storage::delete($attachment->path);
    }

    protected function getFileName(UploadedFile $file){
        return explode('.', $file->hashName())[0].'.'.$file->getClientOriginalExtension();
    }

    protected function getStoreFolderName(){
        return 'attachments';
    }

    protected function repository(){
        return resolve(AttachmentRepository::class);
    }
}
