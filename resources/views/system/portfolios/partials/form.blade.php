<div class="form-group">
    {{ Form::label('title', 'Titulo') }}
    {{ Form::text('title', null, ['class' => 'form-control']) }}
</div>

<div class="form-group">
    {{ Form::label('excerpt', 'Extracto') }}
    {{ Form::textarea('excerpt', null, ['class' => 'form-control', 'id' => 'excerpt']) }}
</div>

<div class="form-group">
    {{ Form::label('body', 'Extracto') }}
    {{ Form::textarea('body', null, ['class' => 'form-control', 'id' => 'body']) }}
</div>

<div class="form-group">
    {{ Form::label('logo', 'Logo') }}
    <br>
    {{ Form::file('logo', ['id' => 'logo']) }}
</div>

<div class="form-group">
    {{ Form::label('image', 'Imagen') }}
    <br>
    {{ Form::file('image', ['id' => 'image']) }}
</div>





