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
    
        $input = $request->input();
        $validator = Validator::make($request->all(),
            [
                'category_name' => 'required',
                'file' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:20048'
            ]
        );

        if($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "Validation error", "errors" => $validator->errors()]);
        }

        if($request->has('file')) {
            $filenameWithExt = $request->file("file")->getClientOriginalName();
            $filename= pathinfo($filenameWithExt,PATHINFO_FILENAME);
            $extension = $request->file("file")->getClientOriginalExtension();
            $fileNameToStore = $filename."_".time().".".$extension;
            $input['cat_image'] = $fileNameToStore;
            $request->file->move(public_path('/uploads'), $fileNameToStore);
            $response["status"] = "successs";
            $response["message"] = "Success! image(s) uploaded";
        }
        else {
            $response["status"] = "failed";
            $response["message"] = "Failed! image(s) not uploaded";
        }
        DB::table('product_category')->insert($input);
        return response()->json($response);
        
    }
    
       
        // if($request->hasFile("file")){
        //     $filenameWithExt = $request->file("file")->getClientOriginalName();
        //     $filename= pathinfo($filenameWithExt,PATHINFO_FILENAME);
        //     $extension = $request->file("file")->getClientOriginalExtension();
        //     $fileNameToStore = $filename."_".time().".".$extension;
        //     $path= $request->file("file")->storeAs("public/images",$fileNameToStore);
        // }
        // else{
        //     $fileNameToStore = "no-image.svg";
        //     $path="public/images/no-image.svg";
        // };
       

    // }
}