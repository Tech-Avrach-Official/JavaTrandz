import Navbar from "@/components/Layout/Navbar/Navbar";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@/components/ui/button";

const AddBlog = () => {
  const [content, setContent] = useState("");
  const [formData, setFormData] = useState({
    slug: "",
    authorName: "",
    authorPosition: "",
    duration: "",
    title: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSave = () => {
    const dataToSave = {
      ...formData,
      content,
    };

    console.log("Blog Data:", dataToSave);
    // Perform your save operation here (e.g., API call)
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex justify-center">
        <div className="bg-white w-3/4 p-8 rounded-lg shadow-lg flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <FilePicker
                onImageSelect={(image) =>
                  setFormData((prev) => ({ ...prev, image }))
                }
              />
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex flex-col gap-4">
                <div>
                  <label htmlFor="slug" className="block mb-1 font-medium">
                    Slug
                  </label>
                  <Input
                    id="slug"
                    type="text"
                    placeholder="Slug"
                    value={formData.slug}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="authorName" className="block mb-1 font-medium">
                    Author Name
                  </label>
                  <Input
                    id="authorName"
                    type="text"
                    placeholder="Author Name"
                    value={formData.authorName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="authorPosition"
                    className="block mb-1 font-medium"
                  >
                    Author Position
                  </label>
                  <Input
                    id="authorPosition"
                    type="text"
                    placeholder="Author Position"
                    value={formData.authorPosition}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="duration" className="block mb-1 font-medium">
                    Duration
                  </label>
                  <Input
                    id="duration"
                    type="text"
                    placeholder="Duration"
                    value={formData.duration}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-gray-100 p-4 rounded-lg gap-4">
            <div>
              <label htmlFor="title" className="block mb-1 font-medium">
                Title
              </label>
              <Input
                id="title"
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="description" className="block mb-1 font-medium">
                Description
              </label>
              <Input
                id="description"
                type="text"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="content" className="block mb-1 font-medium">
                Content
              </label>
              <Editor
  id="content"
  value={content}
  onEditorChange={(newContent) => setContent(newContent)}
  apiKey="a6jwek7e0lh81a0wdzi5vevcs4g0rvgnuwll2tygptxtu1tr"
  init={{
    height: 600,
    menubar: true, // Enable menu bar for more options
    plugins: [
      "advlist autolink lists link image charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table paste code help wordcount",
      "table emoticons codesample fullscreen colorpicker textcolor",
    ],
    toolbar:
      "undo redo | formatselect | bold italic underline strikethrough | \
      forecolor backcolor | alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | link image media | table codesample | \
      removeformat | help fullscreen",
    content_style: "body { font-family:Arial,sans-serif; font-size:14px }",
  }}
/>
            </div>
          </div>

          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </>
  );
};

const FilePicker = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      onImageSelect(file); // Pass the file back to parent
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    onImageSelect(null); // Remove the image in parent state
  };

  return (
    <div className="p-6">
      {selectedImage ? (
        <FilePreview image={selectedImage} onRemove={handleRemoveImage} />
      ) : (
        <label
          htmlFor="file-input"
          className="relative p-6 border-2 border-dashed border-gray-500 rounded-lg group flex flex-col items-center justify-center hover:border-primary transition h-72 cursor-pointer"
        >
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <svg
          className="w-14 h-14 group-hover:scale-125 transition-transform"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Open_Folder-2" data-name="Open Folder">
            <path
              d="m45 18h-4v-4a2.996 2.996 0 0 0 -3-3h-15.25a2.9991 2.9991 0 0 1 -2.33-1.11l-1.96-2.41a3.9846 3.9846 0 0 0 -3.1-1.48h-11.36a2.996 2.996 0 0 0 -3 3v29.57a3.3672 3.3672 0 0 0 1.01 2.42 3.3672 3.3672 0 0 0 2.42 1.01h33.66a3.441 3.441 0 0 0 3.3-2.47l5.53-18.97a2.003 2.003 0 0 0 -1.92-2.56z"
              fill="#ff9900"
            />
            <path
              d="m44.9987 18h-28.4262a3.43 3.43 0 0 0 -3.2925 2.47l-5.56 19.0614a3.4286 3.4286 0 0 1 -3.2914 2.4686h33.6638a3.43 3.43 0 0 0 3.2933-2.47l5.5331-18.97a2 2 0 0 0 -1.9201-2.56z"
              fill="#ffef42"
            />
          </g>
        </svg>
          <p className="text-gray-500 mt-4">Click to upload</p>
        </label>
      )}
    </div>
  );
};

const FilePreview = ({ image, onRemove }) => {
  return (
    <div className="relative w-full h-72 flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden">
      <img src={image} alt="Selected Preview" className="h-full w-full object-cover" />
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold hover:bg-red-600"
      >
        &times;
      </button>
    </div>
  );
};

export default AddBlog;
