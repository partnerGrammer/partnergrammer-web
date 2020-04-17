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
    {{-- <script src="https://cdn.ckeditor.com/4.14.0/standard/ckeditor.js"></script> --}}

    {{-- <script>
        var options = {
            filebrowserImageBrowseUrl: '/laravel-filemanager?type=Images',
            filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token={{csrf_token()}}',
            filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
            filebrowserUploadUrl: '/laravel-filemanager/upload?type=Files&_token={{csrf_token()}}'
        };
        setTimeout(() => {
            const editor = CKEDITOR.replace('editor', options)
        },400);
    </script> --}}
    <script src="//cdn.tinymce.com/4/tinymce.min.js"></script>
    
    <script>
        var editor_config = {
            path_absolute : "/",
            selector: "textarea.my-editor",
            plugins: [
            "advlist autolink lists link image charmap print preview hr anchor pagebreak",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime media nonbreaking save table contextmenu directionality",
            "emoticons template paste textcolor colorpicker textpattern"
            ],
            toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media",
            relative_urls: false,
            file_browser_callback : function(field_name, url, type, win) {
            var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
            var y = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight;

            var cmsURL = editor_config.path_absolute + 'laravel-filemanager?field_name=' + field_name;
            if (type == 'image') {
                cmsURL = cmsURL + "&type=Images";
            } else {
                cmsURL = cmsURL + "&type=Files";
            }

            tinyMCE.activeEditor.windowManager.open({
                file : cmsURL,
                title : 'Filemanager',
                width : x * 0.8,
                height : y * 0.8,
                resizable : "yes",
                close_previous : "no"
            });
            }
        };

        tinymce.init(editor_config);
    </script>
@endsection


