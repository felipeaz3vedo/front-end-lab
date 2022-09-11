import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Course } from './pages/Course';
import { Login } from './pages/Login';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/course"
        element={
          <ProtectedRoute>
            <Course />
          </ProtectedRoute>
        }
      />
      <Route
        path="/course/lesson/:videoId"
        element={
          <ProtectedRoute>
            <Course />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
