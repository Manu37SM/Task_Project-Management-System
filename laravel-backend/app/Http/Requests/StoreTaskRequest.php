<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class StoreTaskRequest extends FormRequest {
    public function authorize() { return auth()->user()->role === 'admin'; }
    public function rules() {
        return [
            'title'       => 'required|string|max:255',
            'priority'    => 'required|in:LOW,MEDIUM,HIGH',
            'due_date'    => 'required|date',
            'project_id'  => 'required|exists:projects,id',
            'assigned_to' => 'required|exists:users,id',
        ];
    }
}