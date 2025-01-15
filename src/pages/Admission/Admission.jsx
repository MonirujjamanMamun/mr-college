import { useState } from 'react';

const Admission = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [formData, setFormData] = useState({
    candidateName: '',
    subject: '',
    email: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    image: '',
  });

  const colleges = [
    {
      id: 1,
      image: 'https://i.ibb.co.com/0244kv4/versity-1.jpg',
      name: 'Green Valley College',
    },
    {
      id: 2,
      image: 'https://i.ibb.co.com/K2gCpD4/versity-2.jpg',
      name: 'Blue Ridge University',
    },
    {
      id: 3,
      image: 'https://i.ibb.co.com/yd5k0vz/versity-3.jpg',
      name: 'Golden State College',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const submission = { ...formData, collegeId: selectedCollege };
    console.log('Submitted Data:', submission);
    // Save submission to backend or state
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center font-bold">Admission</h1>
      {!selectedCollege ? (
        <ul className="my-4 md:my-11 flex gap-7 items-center justify-center">
          {colleges.map((college) => (
            <li
              key={college.id}
              className="text-xl cursor-pointer text-primary border rounded-lg shadow-lg p-4"
              onClick={() => setSelectedCollege(college.id)}
            >
              {college.name}
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px] bg-white">
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formData.candidateName}
                  onChange={(e) =>
                    setFormData({ ...formData, candidateName: e.target.value })
                  }
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="address"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter your address"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Birth Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={formData.dateOfBirth}
                    onChange={(e) =>
                      setFormData({ ...formData, dateOfBirth: e.target.value })
                    }
                  />
                </div>
              </div>

              <input
                type="file"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    image: URL.createObjectURL(e.target.files[0]),
                  })
                }
              />

              <div>
                <button
                  type="submit"
                  className="mt-5 hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admission;
