@extends('layouts.app')

@section('content')
    <section class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <h5 class="card-header">
                        {{ $post->title }}
                    </h5>
                    
                    <div class="card-body">
                        <h5>Categoria: {{ $post->category->title }}</h5>
                        {!! $post->body !!}
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection