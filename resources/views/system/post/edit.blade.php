@extends('layouts.app')

@section('content')
    <section class="container">
        @if (count($errors))
            <div class="mt-4 alert alert-danger alert-dismissible fade show" role="alert">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        @endif
        
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <h5 class="card-header">
                        CREAR POST
                    </h5>
                    
                    <div class="card-body">
                        {!! Form::model($post, ['route' => ['posts.update', $post->id], 'method' => 'PUT', 'files' => true]) !!}
                            @include('system.post.partials.form')

                            <button type="submit" class="btn btn-sm btn-success">Guardar</button>
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection