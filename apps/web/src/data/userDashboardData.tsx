
import {BsHeart} from 'react-icons/bs'
import {AiOutlineDashboard} from 'react-icons/ai'
import {GrDocument} from 'react-icons/gr';
import {BiUser} from 'react-icons/bi';
export const UserDashBoardData=[
  {
    id:1,
    name:'Dashboard',
    icon:<AiOutlineDashboard />,
    destination:'/dashboard'
  },
  {
    id:2,
    name:'Purchase History',
    icon:<GrDocument/>,
    destination:'/purchase_history'
  },
  {
    id:3,
    name:'Wishlist',
    icon:<BsHeart />,
    destination:'/wishlist'
  },
  {
    id:4,
    name:'Manage Profile',
    icon:<BiUser/>,
    destination:'/profile'
  }
]