<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
        'name'     => 'Admin User',
        'email'    => 'admin@test.com',
        'password' => bcrypt('admin@123'),
        'role'     => 'admin',
        ]);
        User::create([
            'name'     => 'Regular User',
            'email'    => 'user@test.com',
            'password' => bcrypt('user@123'),
            'role'     => 'user',
        ]);
    }
}
