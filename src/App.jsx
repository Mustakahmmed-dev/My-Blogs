import './App.css';
import Navbar from './components/navbar/Navbar';
import Blogs from './components/Blogs/Blogs';

function App() {

  return (
    <>
      <Navbar></Navbar>


      <section className='flex justify-between gap-4 mt-5'>
        <div id='main-blog-container' className='p-3 rounded min-h-screen w-[100%]'>
          <Blogs></Blogs>
        </div>

        <div id='side-container' className='w-[30%] border p-3 rounded'>
          <h3 className='text-2xl font-semibold'>Reading Time: 0 </h3>
          <h3 className='text-2xl font-semibold'>Total Bookmarked: 0 </h3>
        </div>
      </section>
    </>
  )
}

export default App
