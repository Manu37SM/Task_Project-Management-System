<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    public function index()
    {
        return Project::with('tasks')->get();
    }

    public function store(Request $request)
    {
        $project = Project::create($request->all());
        return $project;
    }
}
