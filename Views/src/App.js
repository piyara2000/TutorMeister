import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import StudentSignUp from "./pages/studentSignUp";
import StudentSignUpPage02 from "./pages/studentSignUpPage02";
import StudentHome from "./pages/studentHome";
import CreateCourse from "./pages/createCourse";
import InstructorHome from './pages/instructorHome';
import InstructorLogin from './pages/insLogin';
import InstructorCourseHome from './pages/insCourseHome';
import InstructorSignUp from './pages/insSignUp';
import StudentLogin from './pages/studentLogin';
import StudentCourseHome from './pages/studentCourseHome';
import StudentAccountEditPage from "./pages/studentAccountEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <ToastContainer/>
        <Routes>
          <Route exact path="/student-register" element={<StudentSignUp />}/>
          <Route exact path="/student-register-page02" element={<StudentSignUpPage02 />}/>
          <Route exact path="/student-account-edit" element={<StudentAccountEditPage />}/>
          <Route exact path="/student-home" element={<StudentHome />}/>
          <Route exact path="/create-course" element={<CreateCourse />}/>
          <Route exact path="/instructor-home" element={<InstructorHome />}/>
          <Route exact path="/instructor-login" element={<InstructorLogin />}/>
          <Route exact path="/instructor-course-home" element={<InstructorCourseHome />}/>
          <Route exact path="/instructor-register" element={<InstructorSignUp />}/>
          <Route exact path="/student-login" element={<StudentLogin />}/>
          <Route exact path="/student-course-home" element={<StudentCourseHome />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
