@extends('layouts.app')

@section('content')
    <section class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <h5 class="card-header">
                        {{ $category->title }}
                    </h5>
                    
                    <div class="card-body">
                        {!! $category->title !!}
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection