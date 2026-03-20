<?php
namespace App\Http\Controllers;
use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;

class ProjectController extends Controller {
    public function index() {
        $projects = Project::with('tasks')->get();
        return response()->json(['success' => true, 'data' => $projects]);
    }

    public function store(StoreProjectRequest $request) {
        $project = Project::create($request->validated());
        return response()->json(['success' => true, 'data' => $project], 201);
    }
}