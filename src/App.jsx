import './App.css';
import Navbar from './components/navbar/Navbar';
import Blogs from './components/Blogs/Blogs';
import { useState } from 'react';

function App() {

  const [bookmark, setBookmark] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handledBookmark = (blog) => {
    setBookmark([...bookmark, blog]);
  }

  const handleReadingTime = (id, readingTime) => {
    setReadTime(readTime + readingTime);
    handleRemoveFromBookmark(id);
  }

  const handleRemoveFromBookmark = (id) =>{
   const remainingBookmarks = bookmark.filter((marked) => marked.id !== id);
   setBookmark(remainingBookmarks);
  }
  return (
    <>
      <Navbar></Navbar>


      <section className='flex justify-between gap-4 mt-5'>
        <div id='main-blog-container' className='p-3 rounded min-h-screen w-[100%]'>
          <Blogs handledBookmark={handledBookmark} handleReadingTime={handleReadingTime}></Blogs>
        </div>

        <div id='side-container' className='w-[30%] border border-gray-300 p-3 rounded'>
          <h3 className='text-2xl font-semibold'>Reading Time: {readTime}mins </h3>
          <h3 className='text-2xl font-semibold'>Total Bookmarked: {bookmark.length} </h3>
          <div id='bookmark-container'>
            <ol>
               {bookmark.map((bookmarked) => <li className='bg-gray-800 rounded-lg mt-2 text-gray-200 p-3' key={bookmarked.id}>{bookmarked.title}</li>)}
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
