import MainLayout from '../MainLayout';
import Home from '../pages/Home/Home';
import Colleges from '../pages/Colleges/Colleges';
import Admission from '../pages/Admission/Admission';
import MyCollege from '../pages/MyCollege/MyCollege';
import Profile from '../pages/Profile/Profile';
import Register from '../pages/Authentication/Register';
import SignIn from '../pages/Authentication/SignIn';
import ErrorPage from '../ErrorPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import CollegeDetails from '../components/Colleges/CollegeDetails';

const routers = createRoutesFromElements(
  <Route>
    <Route path="/" element={<MainLayout />}>
      {/* ==================== Header Navlink Start here =================== */}
      <Route index element={<Home />} />
      <Route path="/colleges" element={<Colleges />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/my-college" element={<MyCollege />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/colleges/:_id" element={<CollegeDetails />} />

      {/* ==================== Header Navlink End here ===================== */}
      {/* <Route path="/offer" element={<Offer />} />
      <Route path="/cart" element={<Cart />} />

      <Route
        path="/payment"
        element={
          <PrivetRoute>
            <Payment />
          </PrivetRoute>
        }
      /> */}
    </Route>
    <Route path="/register" element={<Register />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="*" element={<ErrorPage />} />
  </Route>
);

const mainRoute = createBrowserRouter(routers);

export default mainRoute;
