import { useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom"

import MvFooter from "@layout/MvFooter/MvFooter"
import MvHeader from "@layout/MvHeader/MvHeader"

import HomeView from "@views/HomeView/HomeView"
import ComicView from "@views/ComicView/ComicView"
import ComicDetailsView from "@views/ComicDetailsView/ComicDetailsView"
import CharacterView from "@views/CharacterView/CharacterView"
import CharacterDetailsView from "@views/CharacterDetailsView/CharacterDetailsView"

/**
 * RouteProvider.
 * 
 * Purpose:
 * - Set all routes.
 * 
 * References:
 * - https://reactrouter.com/en/main
 * 
 * @returns Routes provider.
 */
export const RouteProvider = () => {
  return (
    <BrowserRouter>
      <MvHeader />
      <Routes>
        <Route path="/" element={<HomeView />}/>
        <Route path="/comic" element={<ComicView />}/>
        <Route path="/comic/:id" element={<ComicDetailsView />}/>
        <Route path="/character" element={<CharacterView />}/>
        <Route path="/character/:id" element={<CharacterDetailsView />}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
      <MvFooter />
    </BrowserRouter>
  )
}
