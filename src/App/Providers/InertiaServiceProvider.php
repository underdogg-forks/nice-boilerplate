<?php

declare(strict_types=1);

namespace App\Providers;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class InertiaServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->registerMixVersion();
        $this->shareApplication();
        $this->shareAuthentification();
        $this->shareFlashes();
    }

    /**
     * Sets the mix version from the manifest.
     */
    public function registerMixVersion(): void
    {
        Inertia::version(function () {
            return md5_file(public_path('mix-manifest.json'));
        });
    }

    /**
     * Share global application data.
     */
    public function shareApplication(): void
    {
        Inertia::share([
            'app' => function () {
                $composer = json_decode(file_get_contents(base_path('/composer.json')), true);

                return [
                    'name'      => config('app.name'),
                    'laravel'   => Application::VERSION,
                    'version'   => $composer['version'] ?? '0.1',
                    'logo'      => Storage::url('static/logo.png'),
                    'load_time' => (microtime(true) - LARAVEL_START),
                    'route'     => Route::currentRouteName(),
                ];
            },
        ]);
    }

    /**
     * Share authentification data.
     */
    public function shareAuthentification(): void
    {
        Inertia::share([
            'auth' => function () {
                return [
                    'user' => Auth::user() ? [
                        'id'    => Auth::user()->id,
                        'name'  => Auth::user()->name,
                        'email' => Auth::user()->email,
                    ] : null,
                ];
            },
        ]);
    }

    /**
     * Share flashes and errors.
     */
    public function shareFlashes(): void
    {
        Inertia::share([
            'flash' => function () {
                return [
                    'success' => Session::get('success'),
                ];
            },
            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object) [];
            },
        ]);
    }
}
