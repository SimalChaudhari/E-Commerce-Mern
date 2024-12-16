import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../features/upload/uploadSlice";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
  createBlogs,
  getABlog,
  resetState,
  updateABlog,
} from "../features/blogs/blogSlice";
import { getCategories } from "../features/bcategory/bcategorySlice";

const schema = yup.object().shape({
  title: yup.string().required("Title is Required"),
  description: yup.string().required("Description is Required"),
  category: yup.string().required("Category is Required"),
});

const Addblog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[3];

  const imgState = useSelector((state) => state.upload.images);
  const bCatState = useSelector((state) => state.bCategory.bCategories);
  const blogState = useSelector((state) => state.blogs);

  const {
    isSuccess,
    isError,
    createdBlog,
    updatedBlog,
    blogName,
    blogDesc,
    blogCategory,
    blogImages,
  } = blogState;

  useEffect(() => {
    if (getBlogId) {
      dispatch(getABlog(getBlogId));
    } else {
      dispatch(resetState());
    }
    dispatch(getCategories());
  }, [dispatch, getBlogId]);

  useEffect(() => {
    if (isSuccess) {
      if (createdBlog) {
        toast.success("Blog Added Successfully!");
      }
      if (updatedBlog) {
        toast.success("Blog Updated Successfully!");
        navigate("/admin/blog-list");
      }
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, createdBlog, updatedBlog, navigate]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: "",
      description: "",
      category: "",
      images: [],
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const data = getBlogId
        ? { id: getBlogId, blogData: values }
        : values;
      if (getBlogId) {
        dispatch(updateABlog(data));
      } else {
        dispatch(createBlogs(values));
      }
      formik.resetForm();
      dispatch(resetState());
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">
        {getBlogId ? "Edit" : "Add"} Blog
      </h3>
      <form onSubmit={formik.handleSubmit}>
        <CustomInput
          type="text"
          label="Enter Blog Title"
          name="title"
          onChange={(value) => formik.setFieldValue("title", value)}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        <div className="error">
          {formik.touched.title && formik.errors.title}
        </div>

        <select
          name="category"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}
          className="form-control py-3 mt-3"
        >
          <option value="">Select Blog Category</option>
          {bCatState.map((i, j) => (
            <option key={j} value={i.title}>
              {i.title}
            </option>
          ))}
        </select>
        <div className="error">
          {formik.touched.category && formik.errors.category}
        </div>

        <ReactQuill
          theme="snow"
          className="mt-3"
          name="description"
          onChange={(value) => formik.setFieldValue("description", value)}
          value={formik.values.description}
        />
        <div className="error">
          {formik.touched.description && formik.errors.description}
        </div>

        <Dropzone onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}>
          {({ getRootProps, getInputProps }) => (
            <section className="bg-white border-1 p-5 text-center mt-3">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>

        <div className="showimages d-flex flex-wrap mt-3 gap-3">
          {formik.values.images.map((i, j) => (
            <div className="position-relative" key={j}>
              <button
                type="button"
                onClick={() => dispatch(delImg(i.public_id))}
                className="btn-close position-absolute"
                style={{ top: "10px", right: "10px" }}
              ></button>
              <img src={i.url} alt="Uploaded" width={200} height={200} />
            </div>
          ))}
        </div>

        <button
          className="btn btn-success border-0 rounded-3 my-5"
          type="submit"
        >
          {getBlogId ? "Edit" : "Add"} Blog
        </button>
      </form>
    </div>
  );
};

export default Addblog;
