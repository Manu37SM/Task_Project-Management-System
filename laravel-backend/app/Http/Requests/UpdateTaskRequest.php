<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class UpdateTaskRequest extends FormRequest {
    public function authorize() { return true; }
    public function rules() {
        return [
            'status' => 'sometimes|in:TODO,IN_PROGRESS,DONE,OVERDUE',
        ];
    }
}