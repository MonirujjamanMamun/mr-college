import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Image from '../DeginLayout/Images';

const CollegeDetails = () => {
  const [colleges, setColleges] = useState([]);

  const { id } = useParams();
  const college = colleges?.find((clg) => clg.id === parseInt(id));

  useEffect(() => {
    fetch('/collegeData.json')
      .then((response) => response.json())
      .then((data) => setColleges(data))
      .catch((error) => console.error('Error fetching college data:', error));
  }, []);

  if (!college) {
    return <p> College not found </p>;
  }

  return (
    <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
      <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
        <a
          href="#"
          className="text-xl sm:text-4xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-11"
        >
          {college.name}
        </a>

        <div className="relative">
          <a href="#">
            <Image
              className="w-full"
              imgSrc={college.image}
              alt="Sunset in the mountains"
            />
          </a>
          <a
            href="#!"
            className="hidden absolute z-10 text-xs bottom-0 left-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out sm:flex items-center"
          >
            <span className="text-lg">|</span>&nbsp;&nbsp;
            <span>Visit University</span>
          </a>

          <a
            href="#!"
            className="hidden absolute z-10 text-xs bottom-0 right-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out sm:flex items-center"
          >
            <span className="text-lg">|</span>&nbsp;&nbsp;
            <span>Read more</span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="border rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-semibold">Events</h2>
            <ul className="list-disc list-inside mt-2">
              {college?.events.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </div>
          <div className="border rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-semibold ">Research History</h2>
            <ul className="list-disc list-inside mt-2">
              {college?.researchHistory.map((research, index) => (
                <li key={index}>{research}</li>
              ))}
            </ul>
          </div>
          <div className="border rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-semibold ">Sports</h2>
            <ul className="list-disc list-inside mt-2">
              {college?.sports.map((sport, index) => (
                <li key={index}>{sport}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-5 text-sm font-regular text-gray-900 flex">
          <span className="mr-3 flex flex-row items-center">
            <svg
              className="text-indigo-600"
              fill="currentColor"
              height="13px"
              width="13px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              // style="enable-background:new 0 0 512 512;"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                  ></path>
                </g>
              </g>
            </svg>
            <span>
              {' '}
              <strong className="mx-1">Admission Dates:</strong>{' '}
              {college?.admissionDates}
            </span>
          </span>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CollegeDetails;
