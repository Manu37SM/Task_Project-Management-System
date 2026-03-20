<?php
namespace App\Http\Controllers;
use App\Models\Task;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;

class TaskController extends Controller {
    public function store(StoreTaskRequest $request) {
        $task = Task::create($request->validated());
        return response()->json(['success' => true, 'data' => $task], 201);
    }

    public function update(UpdateTaskRequest $request, $id) {
        $task = Task::findOrFail($id);
        $user = auth()->user();
        $newStatus = $request->input('status');

        // Users can only update their own assigned tasks
        if ($user->role !== 'admin' && $task->assigned_to !== $user->id) {
            return response()->json(['success' => false, 'message' => 'Forbidden'], 403);
        }

        // Overdue tasks cannot go back to IN_PROGRESS
        if ($task->status === 'OVERDUE' && $newStatus === 'IN_PROGRESS') {
            return response()->json(['success' => false, 'message' => 'Overdue tasks cannot move back to IN_PROGRESS'], 422);
        }

        // Only admin can close (DONE) an overdue task
        if ($task->status === 'OVERDUE' && $newStatus === 'DONE' && $user->role !== 'admin') {
            return response()->json(['success' => false, 'message' => 'Only admin can close overdue tasks'], 403);
        }

        $task->update($request->validated());
        return response()->json(['success' => true, 'data' => $task]);
    }

    public function myTasks() {
        $tasks = Task::with('project')
                     ->where('assigned_to', auth()->id())
                     ->get();
        return response()->json(['success' => true, 'data' => $tasks]);
    }
}