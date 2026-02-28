<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function store(Request $request)
    {
        $task = Task::create($request->all());
        return $task;
    }

    public function update(Request $request,$id)
    {
        $task = Task::findOrFail($id);
        $task->update($request->all());

        return $task;
    }

    public function myTasks()
    {
        return Task::where('assigned_to',auth()->id())->get();
    }
}
