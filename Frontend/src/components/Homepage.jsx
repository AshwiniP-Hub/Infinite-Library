import React, {useState} from 'react';
import girl from "../../public/Images/girl2.png";
import book from "../../public/Images/book.png";
import slide1 from "../../public/Images/bk.jpg";
import slide2 from "../../public/Images/bk2.jpg";
import slide3 from "../../public/Images/bk3.jpg";
import slide4 from "../../public/Images/bk4.jpg";
import PopularBooks from './PopularBooks';
import SearchBar from './SearchBar';
import BookCard from './BookCard';

const Homepage = () => {
  // for search bar 
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // New state to track search status


  const handleSearch = async (query) => {
    setHasSearched(true); // Mark that a search has been performed
    try {
      const response = await fetch(`http://localhost:5000/api/search?q=${query}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
// search bar end 
  return (
    <>
      <div>
        <div className='flex items-center justify-between px-4 bg-gradient-to-r from-pink-200 via-purple-500 to-orange-200 '>
          <div className="hidden lg:block"><img src={book} alt="img" className='size-24' /></div>
          <div className='md:text-3xl text-xs m-4 font-semibold uppercase font-serif'>Find your next great read at our
            <span className='text-rose-700 font-bold uppercase'> Infinite Library</span>
          </div>
          <div className="hidden lg:block"><img src={girl} alt="img" className='size-24' /></div>
        </div>
        {/* Carousel  */}
        <div>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src={slide1}
                className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src={slide2}
                className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src={slide3}
                className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src={slide4}
                className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
        </div>
        {/* search bar  */}
        <div className=" p-4">
      <SearchBar onSearch={handleSearch} />
      <div className="mt-4">
        {hasSearched ? (
          results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {results.map((book) => (
                <BookCard key={book._id} book={book} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No results found.</p>
          )
        ) : null}
      </div>
    </div>
{/* search bar end  */} 
      {/* Now Trending  */}
      <main className="p-4">
                <PopularBooks />
            </main>
    


      </div>
      <hr />
    </>
  )
}

export default Homepage