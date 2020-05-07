@extends('layouts.app')

@section('content')
    <section class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <h5 class="card-header">
                        LISTADO
                        <a href="{{ route('portfolios.create') }}" class="btn btn-sm btn-primary float-right">Crear</a>
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
                                @foreach ($portfolios as $portfolio)
                                    <tr>
                                        <th scope="row">{{ $portfolio->id }}</th>
                                        <td>{{ $portfolio->title }}</td>
                                        <td>
                                            <form action="{{ route('portfolios.destroy', $portfolio->id) }}" method="POST" class="float-left">
                                                @method('DELETE')
                                                @csrf
                                                <button type="submit" class="btn btn-sm btn-danger">Borrar</button>
                                            </form>
                                            <a href="{{ route('portfolios.edit', $portfolio->id) }}" class="btn btn-sm btn-info">Editar</a>
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