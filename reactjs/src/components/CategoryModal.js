
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import AuthUser from './AuthUser';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useState} from 'react';
import PictureInput from './PictureInput';

export const CategoryModal = () => {
    const {http} = AuthUser();
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(undefined);
    const [catName, setCatName] = useState('');


    const SignupSchema = Yup.object().shape({
        category_name: Yup.string().required("Please enter category name."),
         cat_image: Yup.mixed().required('Please choose category file')
        
    });

    const initialValues = {
        category_name: '',
        cat_image: undefined,
    }


    // form submit method 
  const onSubmit =  async (data) =>{
    //  console.log(selectedFile)
    // let cat_image = data.cat_image;
    // let customevalue = {...data, cat_image}
    // console.log(data)
    const formData = new FormData()

    formData.append('category_name', data.category_name)
    formData.append('file', data.cat_image)
    // console.log(data)
    //   data.append('cat_image', data.cat_image);
    try {
    //   const response = await http.get('/add-product-category');
       const response = await http.post('/add-product-category',formData);
    //   console.log(data.cat_image)
      toast.success("Product category added success");    
    
    } catch (error) {
        if (error.response.status === 401) {
        localStorage.clear();
        navigate('/login');
        }
      toast.error("Product category added failed");
    }  
  }
  return (
    <>
      <button type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#sizedModalMd">
            Add Category
            </button>
            <div className="modal fade" id="sizedModalMd" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-md" role="document">
                <Formik initialValues={initialValues} validationSchema={SignupSchema}  onSubmit={onSubmit}>
                {({ errors, touched }) => (
                     <Form autoComplete="off">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Category Information</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body m-3">
                            <div className="col-12 col-xl-12">                              
                               
                                    <div className="form-group">
                                        <label className="form-label">Category Name</label>
                                        <Field type="text" name="category_name" className="form-control input-lg" placeholder="Category Name" />
                                        <div className='text-danger'> {errors.category_name && touched.category_name ? (
                                            <div>{errors.category_name}</div>
                                        ) : null}</div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label className="form-label w-100">Category Picture</label>
                                        <Field component={PictureInput} />
                                        <div className='text-danger'> {errors.cat_image && touched.cat_image ? (
                                            <div>{errors.cat_image}</div>
                                        ) : null}</div>
                                        <small className="form-text text-muted">Example block-level help text here.</small>
                                    </div>                                    
                               
                            </div>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Save Information</button>
                        </div>
                    </div>
                    </Form>
                      )}
                 </Formik>
                </div>
                <ToastContainer />
            </div>
    </>
  )
}
