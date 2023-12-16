import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Logo from './../../assets/images/logo.png';
import { HomeIcon, CalendarDaysIcon, UserIcon } from '@heroicons/react/24/solid';

export default () => {
  return (
    <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div class="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        <button type="button" class="inline-flex flex-col items-center justify-center px-3 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <HomeIcon className="w-7 h-6 mb-1 text-primary" />
          <span class="text-xs text-primary dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">ホーム</span>
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-3 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <HomeIcon className="w-7 h-6 mb-1 text-primary" />
          <span class="text-xs text-primary dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">選考対策</span>
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-3 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <HomeIcon className="w-7 h-6 mb-1 text-primary" />
          <span class="text-xs text-primary dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">選考状況</span>
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-3 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <CalendarDaysIcon className="w-7 h-6 mb-1 text-primary" />
          <span class="text-xs text-primary dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">予約</span>
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-3 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <UserIcon className="w-7 h-6 mb-1 text-primary" />
          <span class="text-xs text-primary dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">マイページ</span>
        </button>
      </div>
    </div>
  )
}