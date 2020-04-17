@extends('layouts.app')

@section('content')
    <section class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <h5 class="card-header">
                        LISTADO
                        <a href="{{ route('posts.create') }}" class="btn btn-sm btn-primary float-right">Crear</a>
                    </h5>
                    
                    <div class="card-body">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Titulo</th>
                                    <th scope="col">Autor</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($posts as $post)
                                    <tr>
                                        <th scope="row">{{ $post->id }}</th>
                                        <td>{{ $post->title }}</td>
                                        <td>{{ $post->user->name }}</td>
                                        <td>{{ $post->created_at->format('d M Y') }}</td>
                                        <td>
                                            <form action="{{ route('posts.destroy', $post->id) }}" method="POST" class="float-left">
                                                @method('DELETE')
                                                @csrf
                                                <button type="submit" class="btn btn-sm btn-danger">Borrar</button>
                                            </form>
                                            <a href="{{ route('posts.edit', $post->id) }}" class="btn btn-sm btn-info">Editar</a>
                                            <a href="{{ route('posts.show', $post->id) }}" class="btn btn-sm btn-success">Ver</a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection