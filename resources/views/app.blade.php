<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ mix('/build/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/build/app.js') }}" defer></script>
    <title>{{ config('app.name', 'Laravel Boilerplate') }}</title>
    {{-- <link rel="stylesheet" href="https://rsms.me/inter/inter.css"> --}}
  </head>
  
  {{-- You can change data-theme to change your theme if you're using Tailwind Theming --}}
  {{-- <body data-theme="dark"> --}}
  <body>
    @inertia
  </body>
</html>
