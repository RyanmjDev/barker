import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProfilePage from './Pages/ProfilePage';
import Home from './Pages/Home';
import NotificationsPage from './Pages/NotificationPage';
import MessagePage from './Pages/MessagePage';
import BookmarkPage from './Pages/BookmarkPage';
import SettingsPage from './Pages/SettingsPage';


import './index.css'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="messages" element={<MessagePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="bookmarks" element={<BookmarkPage />} />
          <Route path="settings" element={<SettingsPage />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);


