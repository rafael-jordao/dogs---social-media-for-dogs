import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHeader from './UserHeader'
import Feed from "../Feed/Feed"
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'

const User = () => {
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />}></Route>
        <Route path="/postar" element={<UserPhotoPost />}></Route>
        <Route path="/estatisticas" element={<UserStats />}></Route>
      </Routes>
    </section>
  )
}

export default User;