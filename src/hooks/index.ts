import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BACKEND_URL } from "../config";

export interface Blog {

    "id": string,
    "title": string,
    "content": string,
    "publishDate": Date | string
    "author": {
        "name": string
    }

}
export const useBlogs = (): { loading: boolean; blogs: Blog[] } => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                "Authorization": localStorage.getItem("userInfo")
            }
        })
            .then(response => {
                setBlogs(response.data.posts);
                // console.log(response.data.posts)
                setLoading(false);
            })
            .catch(error => {
                // console.error("Error fetching blogs:", error);
                setLoading(false); // make sure to handle errors by setting loading state to false
                alert("You are not Signed in ")
            });
    }, [])

    return {
        loading,
        blogs
    }
}
export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("userInfo");
        if (!token) {
        //   console.error("No token found in local storage");
          setLoading(false);
          alert("you are not signed in")
          return;
        }

        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                "Authorization": token
            }
        })
            .then(response => {
                setBlog(response.data); // Assuming response.data is a single blog object
                setLoading(false);
            })
            .catch(error => {
                // console.error("Error fetching blog:", error);
                setLoading(false);
            });

    }, [id]);

    return {
        loading,
        blog
    };
}