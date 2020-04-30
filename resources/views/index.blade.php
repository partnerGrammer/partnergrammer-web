@extends('layouts.web')

@section('content')
    <router-view :key="$route.fullPath"></router-view>
@endsection