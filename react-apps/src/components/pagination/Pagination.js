import React, {useState, useEffect} from 'react';
import './pagination.css';

export default function Pagination(){
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    const indexOfLastPage = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPage - postsPerPage;
    const currentPagePosts = posts.slice(indexOfFirstPage, indexOfLastPage);
    const totalPages = Math.ceil(posts.length/postsPerPage);

    useEffect(() => {
        fetchPosts();
    },[])

    async function fetchPosts(){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setPosts(data);
    }

     function handlePageClick(index){
        setCurrentPage(index);
    }

    return(
        <div className="pagination-container">
            <div className="posts-container">
                <h3>Pagination</h3>
                {currentPagePosts.map((post) => {
                    return <div className='post'>{post.title}</div>
                })}
            </div>
            <div className="navigation-buttons">
               {[...Array(totalPages)].map((page, index) => {
                    index +=1;
                    return <button key={index} onClick={() => {handlePageClick(index)}}>{index}</button>
               })}
            </div>
        </div>
    )
}