<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }



    /**
     * Insert the Project data.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function productCategoryStore(Request $request){
        // print_r($request->all());
        // $this->validate($request, [
        //     'category_name' => 'required',
        //     'cat_image' => 'required',
        // ]);
        $imagesName = [];
        $response = [];

        $validator = Validator::make($request->all(),
            [
                'category_name' => 'required',
                'cat_image.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:20048'
            ]
        );

        if($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "Validation error", "errors" => $validator->errors()]);
        }

        if($request->has('cat_image')) {
            foreach($request->file('cat_image') as $image) {
                $filename = time().rand(3). '.'.$image->getClientOriginalExtension();
                // print $filename;
                $image->move('uploads/', $filename);

                // Image::create([
                //     'image_name' => $filename
                // ]);
            }

            $response["status"] = "successs";
            $response["message"] = "Success! image(s) uploaded";
        }

        else {
            $response["status"] = "failed";
            $response["message"] = "Failed! image(s) not uploaded";
        }
        return response()->json($response);
    
    
       

        // return response()->json(['message' => 'This is a test'], 200);
        // if($request->all()){
        //     DB::table('product_category')->insert($request->all());
        //     return response()->json(['message' => 'Success'], 201);
        // }else{
        //     return response()->json(['error' => 'Unauthorized'], 401);
        // }
    }
}