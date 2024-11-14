import { Appbar } from "../components";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    return (
        <div className="bg-gray-50 min-h-screen">
            <Appbar />
            <div className="flex justify-center w-full pt-8">
                <div className="max-w-screen-lg w-full bg-white p-6 rounded-lg shadow-md">
                    {/* Title Input */}
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="w-full bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 mb-4"
                        placeholder="Title"
                    />

                    {/* Text Editor */}
                    <TextEditor onChange={(e) => setDescription(e.target.value)} />

                    {/* Publish Button */}
                    <button
                        onClick={async () => {
                            const response = await axios.post(
                                `${BACKEND_URL}/api/v1/blog`,
                                {
                                    title,
                                    content: description,
                                    publishDate: new Date(), // Current date and time
                                },
                                {
                                    method: "POST",
                                    headers: {
                                        Authorization: localStorage.getItem("userInfo"),
                                    },
                                }
                            );

                            console.log("Published Blog Response:", response.data);
                            navigate(`/Blog/${response.data.id}`);
                        }}
                        type="submit"
                        className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-700"
                    >
                        Publish Post
                    </button>
                </div>
            </div>
        </div>
    );
};

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return (
        <div className="mt-4">
            <div className="w-full mb-4">
                <div className="flex items-center justify-between border border-gray-300 rounded-lg">
                    <div className="my-2 w-full bg-white rounded-b-lg">
                        <label className="sr-only">Write your post</label>
                        <textarea
                            onChange={onChange}
                            id="editor"
                            rows={8}
                            className="focus:outline-none block w-full px-4 text-sm text-gray-800 bg-white border-0"
                            placeholder="Write your article..."
                            required
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Publish;
