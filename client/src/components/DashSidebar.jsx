
import { Sidebar } from "flowbite-react"
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsPersonBoundingBox, BsPersonFillDash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { singoutSuccess } from "../redux/user/userSlice";

const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState('');
  const dispatch = useDispatch();

  useEffect(()=> {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if (tabFromUrl){
      setTab(tabFromUrl);
    }
  },[location.search]);

  const handleSingout = async () => {
    try {
      const res = await fetch('/api/user/singout', {
        method: 'POST',
      });

      const data = await res.json();

      if(!res.ok){
        console.log(data.message)
      } else {
        dispatch(singoutSuccess())
      }

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item active={tab === 'profile'} icon={BsPersonBoundingBox} label={"User"} labelColor='dark' as='div'>
              Profile
            </Sidebar.Item>
          </Link>

          <Sidebar.Item onClick={handleSingout} icon={BsPersonFillDash} className='cursor-pointer'>
            Sing Out 
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar
