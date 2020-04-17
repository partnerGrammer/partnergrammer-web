@extends('layouts.app')

@section('content')
    <section class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <h5 class="card-header">
                        LISTADO
                        <a href="{{ route('categories.create') }}" class="btn btn-sm btn-primary float-right">Crear</a>
                    </h5>
                    
                    <div class="card-body">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Titulo</th>
                                    <th scope="col">Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($categories as $category)
                                    <tr>
                                        <th scope="row">{{ $category->id }}</th>
                                        <td>{{ $category->title }}</td>
                                        <td>
                                            <form action="{{ route('categories.destroy', $category->id) }}" method="POST" class="float-left">
                                                @method('DELETE')
                                                @csrf
                                                <button type="submit" class="btn btn-sm btn-danger">Borrar</button>
                                            </form>
                                            <a href="{{ route('categories.edit', $category->id) }}" class="btn btn-sm btn-info">Editar</a>
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