import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Flex from '../DeginLayout/Flex';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { FaCaretDown, FaSearch, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import colleges from '../../utils/constanc/collegeData';

const NavSearch = () => {
  const users = useSelector((state) => state.userSlice);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [show, ref]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = colleges.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="w-full bg-gray-100 relative">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div
            onClick={() => setShow(!show)}
            ref={ref}
            className="flex h-14 cursor-pointer items-center gap-2 text-primeColor"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5" />
          </div>
          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px] border-none hover:border-none"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Search...."
            />
            <FaSearch className="w-5 h-5" />
            {searchQuery && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {searchQuery &&
                  filteredProducts.map((item) => (
                    <div
                      onClick={() =>
                        navigate(`/colleges/${item.id}`) &
                        setShowSearchBar(true) &
                        setSearchQuery('')
                      }
                      key={item.id}
                      className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3 px-5"
                    >
                      <img
                        className="w-24 rounded"
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg">{item.name}</p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            <p>{users?.name}</p>
            <div onClick={() => setShowUser(!showUser)} className="flex">
              <FaUser />
              <FaCaretDown />
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-6 left-1 lg:-left-24 z-50 bg-black w-44 text-[#767676] h-auto p-4 pb-6"
              >
                <Link to="/signin">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Login
                  </li>
                </Link>
                <Link onClick={() => setShowUser(false)} to="/register">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Register
                  </li>
                </Link>
                <Link to="/profile">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Profile
                  </li>
                </Link>
              </motion.ul>
            )}
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default NavSearch;
