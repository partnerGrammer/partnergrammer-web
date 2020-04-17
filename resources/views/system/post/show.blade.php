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
                        <div class="row">
                            <div class="col-md-12">
                                <img src="{{ $post->banner }}" width="100%" alt="">
                            </div>
                        </div>
                        <h5>Categoria: {{ $post->category->title }}</h5>
                        {!! $post->body !!}
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection