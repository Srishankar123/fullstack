import {Navigate,Route,Routes} from "react-router-dom"
import LazySuspense from "./components/LazySuspense"
import { lazy } from "react"
  const LazyLogin = lazy(()=> import('./pages/auth/login'))
const LazyMain = lazy(()=> import('./pages/user/Main'))
const LazyUserMain = lazy(()=> import('./pages/user/Main'))
const LazyHome = lazy(()=> import('./pages/user/Home'))
const LazyReg =lazy(()=> import('./pages/auth/Register'))
const LazyAdminMain = lazy(()=> import('./pages/admin/Main'))
const LazyDashboard = lazy(()=> import('./pages/admin/Dashboard'))
const LazyAboutus =lazy(()=> import('./pages/user/AboutUs'))
const LazyUserinfo =lazy(() => import('./pages/admin/Userinfo'))
const LazyCities =lazy(() => import('./pages/admin/Cities'))
const lazyThemes =lazy(() => import('./pages/admin/Themes'))
const lazyForgotPass =lazy(() => import('./pages/auth/forgotpass'))
const lazyTerms =lazy(() => import('./pages/user/terms'))
const lazyPrivacy =lazy(() => import('./pages/user/Privacy'))
const lazyFaq =lazy(() => import('./pages/user/Faq'))
const lazyGallery =lazy(() => import('./pages/user/Gallery'))
const lazytodllergen =lazy(() => import ('./pages/user/toddlergen'))
const lazyPlaces =lazy(() => import('../src/pages/user/places'))
const lazyContactus =lazy(() => import('./pages/user/Contactus'))
const UserRoutes = () => {
    return(
        <LazyUserMain>
            <Routes>
                <Route path="/home" element={<LazySuspense component={LazyHome}/>}/>
                <Route path="/about" element={<LazySuspense component={LazyAboutus}/>}/>
                <Route path="/terms" element={<LazySuspense component={lazyTerms}/>}/>
                <Route path="/privacy" element={<LazySuspense component={lazyPrivacy}/>}/>
                <Route path="/faq" element={<LazySuspense component={lazyFaq}/>}/>
                <Route path="/gallery" element={<LazySuspense component={lazyGallery}/>}/>
                <Route path="/toddlergen" element={<LazySuspense component={lazytodllergen}/>}/>
                <Route path="/places" element={<LazySuspense component={lazyPlaces}/>}/>
                <Route path="/contactus" element={<LazySuspense component={lazyContactus}/>}/>
            </Routes>
        </LazyUserMain>
    ) 
}
const AdminRoutes = () => {
    return(
        <LazyAdminMain>
            <Routes>
                <Route path="/dashboard" element={<LazySuspense component={LazyDashboard}/>}/>
                <Route path="/user-info" element={<LazySuspense component={LazyUserinfo}/>}/>
                <Route path="/cities" element={<LazySuspense component={LazyCities}/>}/>
                <Route path="/themes" element={<LazySuspense component={lazyThemes}/>}/>
            </Routes>
        </LazyAdminMain>
    )
}
function App(){
    return(
        <Routes>
            <Route exact path = "/" element={<Navigate to={"/login"}/>}/>
            <Route path = "/login" element={<LazySuspense component={LazyLogin}/>}/>
            <Route path = "/forgotpass" element={<LazySuspense component={lazyForgotPass}/>}/>
            <Route path = "/reg" element={<LazySuspense component={LazyReg}/>}/>
            <Route path="/user/*" element={<LazySuspense component={UserRoutes}/>}/>
            <Route path="/admin/*" element={<LazySuspense component={AdminRoutes}/>}/>
            <Route/>
        </Routes>
    )
}
export default App;