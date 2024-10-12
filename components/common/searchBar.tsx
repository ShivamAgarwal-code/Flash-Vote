"use client";
import React, {useState, useEffect, ChangeEvent } from "react";

const SearchBar: React.FC = () => {
  const [isSearch, setIsSearch] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    if (searchText == "") {
      setIsSearch(true)
    }
  }, [searchText])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setIsSearch(false)
  }
  const handleSearchCancel = () => {
    setSearchText("");
    setIsSearch(true)
  }

  return (
    <div className="hidden md:flex">
      <label className="text-sm font-medium text-gray-500 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <input
          type="text"
          className="block w-80 p-3 px-3 text-sm shadow-md text-gray-500 rounded-lg bg-[#1A1A1A] focus:ring-transparent focus:outline-none"
          placeholder="Search Duels"
          value={searchText}
          onChange={handleChange}
        />
        <div className="absolute inset-y-0 end-0 flex items-center px-2 rotate-90">
          {
            isSearch && searchText == "" ?
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#6B7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m20 20l-4.05-4.05m0 0a7 7 0 1 0-9.9-9.9a7 7 0 0 0 9.9 9.9"
                ></path>
              </svg>
            </button>
            :
            <button onClick = {handleSearchCancel}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#6B7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                ></path>
              </svg>
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
