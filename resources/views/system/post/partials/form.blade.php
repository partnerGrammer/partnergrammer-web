<div class="form-group">
    {{ Form::label('title', 'Titulo') }}
    {{ Form::text('title', null, ['class' => 'form-control']) }}
</div>

<div class="form-group">
    {{ Form::label('category_id', 'Categoria') }}
    {{ Form::select('category_id', $categories, null, ['class' => 'form-control']) }}
</div>

<div class="form-group">
    {{ Form::label('file-input', 'Banner') }}
    <br>
    {{ Form::file('banner', ['id' => 'file-input']) }}
</div>

<div class="form-group">
    {{ Form::label('body', 'Cuerpo') }}
    {{ Form::textarea('body', null, ['class' => 'form-control my-editor', 'id' => 'editor']) }}
</div>

<div class="form-group">
    <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
</div>

@section('js')
    {{-- <script src="//cdn.tinymce.com/4/tinymce.min.js"></script> --}}
    <script src="https://cdn.ckeditor.com/4.14.0/standard/ckeditor.js"></script>

    <script>
        var options = {
            filebrowserImageBrowseUrl: '/laravel-filemanager?type=Images',
            filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token={{csrf_token()}}',
            filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
            filebrowserUploadUrl: '/laravel-filemanager/upload?type=Files&_token={{csrf_token()}}'
        };
        setTimeout(() => {
            const editor = CKEDITOR.replace('editor', options)
        },400);
    </script>
@endsection


