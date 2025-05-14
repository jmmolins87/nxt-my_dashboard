

'use client'


import { IoCartOutline } from "react-icons/io5"

import { useAppSelector } from "@/store"

import { SimpleWidget } from "./SimpleWidget"


export const WidgetsGrid = () => {

  const isCart = useAppSelector((state) => state.counter.count)

  return (
      <div className="grid gtid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <SimpleWidget
            title={ `${ isCart }` }
            subTitle="Productos agregados"
            label="Contador"
            icon={ <IoCartOutline size={ 50 } className="text-blue-500" /> }
            href="/dashboard/counter" />
      </div>
  )
}
