<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Queries\OrdersQuery;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(OrdersQuery::class, function ($app) {
            return new OrdersQuery();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
