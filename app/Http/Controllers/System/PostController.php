<?php

namespace App\Http\Controllers\System;

use App\Post;
use App\Category;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Symfony\Component\Console\Input\Input;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::orderBy('id', 'DESC')->get();
        return view('system.post.index', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all()->pluck('title', 'id');

        return view('system.post.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $v = \Validator::make($request->all(), [
            'title' => 'required',
            'category_id' => 'required',
            'excerpt' => 'required',
            'body' => 'required',
            'slug' => 'required|unique:posts,slug',
            'banner' => 'required|mimes:jpeg,png,jpg',
        ]);
 
        if ($v->fails())
        {
            return redirect()->back()->withInput()->withErrors($v->errors());
        }

        // $input  = array('image' => Input::file('banner'));
        // $reglas = array('image' => 'mimes:jpeg,png,jpg');

        // $v = \Validator::make($input,  $reglas);
 
        // if ($v->fails())
        // {
        //     return redirect()->back()->withInput()->withErrors($v->errors());
        // }

        $post = Post::create($request->all());
        
        // Store in AWS S3
        if($archivo = $request->file('banner')){

            $md5Name = md5_file($archivo->getRealPath());
            $guessExtension = $archivo->guessExtension();
            $path = $archivo->storeAs('blog', $md5Name.'.'.$guessExtension  ,'s3');

            $url = 'https://partner-grammer.s3.us-east-1.amazonaws.com/';

            $post->fill(['banner' => asset($url.$path)])->save();
        }

        return redirect()->route('posts.edit', $post->id)
            ->with('info', 'Post creado con exito');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::find($id);

        return view('system.post.show', compact('post'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = Post::find($id);
        $categories = Category::all()->pluck('title', 'id');

        return view('system.post.edit', compact('post', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $v = \Validator::make($request->all(), [
            'title' => 'required',
            'category_id' => 'required',
            'excerpt' => 'required',
            'body' => 'required',
        ]);
 
        if ($v->fails())
        {
            return redirect()->back()->withInput()->withErrors($v->errors());
        }

        $post = Post::find($id);

        //Comprobamos que el slug no se repita pero ignoramos el slug propio
        $v = \Validator::make($request->all(), [
            'slug' => ['required', Rule::unique('posts')->ignore($post->id)],
        ]);
 
        if ($v->fails())
        {
            return redirect()->back()->withInput()->withErrors($v->errors());
        }

        $post->fill($request->all())->save();
        // Store in AWS S3
        if($archivo = $request->file('banner')){

            $md5Name = md5_file($archivo->getRealPath());
            $guessExtension = $archivo->guessExtension();
            $path = $archivo->storeAs('blog', $md5Name.'.'.$guessExtension  ,'s3');

            $url = 'https://partner-grammer.s3.us-east-1.amazonaws.com/';

            $post->fill(['banner' => asset($url.$path)])->save();
        }

        return redirect()->route('posts.edit', $post->id)
            ->with('info', 'Post creado con exito');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::find($id);
        $post->delete();

        return redirect()->route('posts.index')
            ->with('info', 'Post eliminado con exito');
    }

    public function mainArticle()
    {
        $post = Post::orderBy('id', 'DESC')->first();
        return $post;
    }

    public function showMainArticle($slug)
    {
        $post = Post::where('slug', $slug)->first();
        return $post;
    }

    public function getArticles()
    {
        $posts = Post::orderBy('id', 'DESC')->paginate(3);
        return $posts;
    }
}
