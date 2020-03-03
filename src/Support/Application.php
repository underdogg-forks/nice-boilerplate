<?php

namespace Support;

use Illuminate\Foundation\Application as LaravelApplication;

class Application extends LaravelApplication
{
    protected $namespace = 'App\\';

    public function path($path = '')
    {
        return $this->basePath . DIRECTORY_SEPARATOR . 'src/App' . ($path ? DIRECTORY_SEPARATOR . $path : $path);
    }
}
