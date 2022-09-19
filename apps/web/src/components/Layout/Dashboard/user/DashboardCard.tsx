import { UserDashBoardData } from '@data/userDashboardData';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const DashboardCard = () => {
  const [menuItem, setMenuItem] = useState('Dashboard');

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/dashboard') setMenuItem('Dashboard');
    if (pathname === '/profile') setMenuItem('Manage Profile');
    if (pathname === '/purchase_history') setMenuItem('Purchase History');
    if (pathname === '/wishlist') setMenuItem('WishList');
  }, [pathname]);
  return (
    <div className="mt-8 flex flex-col">
      {UserDashBoardData.map((menu) => (
        <div
          key={menu.id}
          className={`${
            menu.name === menuItem
              ? 'bg-gray-200 border-4 border-l-red-400 '
              : ''
          }`}
        >
          <button
            onClick={() => setMenuItem(menu.name)}
            className={`text-gray-600 w-full text-base hover:text-white hover:bg-red-500 h-[60px]`}
          >
            <Link href={menu.destination}>
              <a className="flex items-center ml-6 gap-2">
                <span className="text-gray-400 text-xl">{menu.icon}</span>
                <h6 className="text-base hover:text-white">{menu.name}</h6>
              </a>
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default DashboardCard;
