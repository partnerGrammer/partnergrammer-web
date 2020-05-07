@extends('layouts.app')

@section('content')
    <section class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <h5 class="card-header">
                        CREAR PORTAFOLIO
                    </h5>
                    
                    <div class="card-body">
                        {!! Form::open(['route' => 'portfolios.store', 'files' => true]) !!}
                            @include('system.portfolios.partials.form')

                            <button type="submit" class="btn btn-sm btn-success">Guardar</button>
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection