import React  from 'react'
import { Disclosure  } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { useDispatch, useSelector } from "react-redux"
import {Link, NavLink, useLocation} from "react-router-dom"
import { NavLinks } from "../../navigation"
import { removeAuthedUser } from "../../../redux/actions/authedUser"

function Navbar() {
  const authedUser = useSelector(store => store.auth)
  const users = useSelector(store => store.users)
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  const activeClass = (path) => {
    return pathname === path ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
  }

  const mobileActiveClass = (path) => {
    return pathname === path ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
  }

  const logout = () => {
    dispatch(removeAuthedUser)
  }

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {
                    NavLinks.map((nav) => (
                      <NavLink key={nav.id} to={nav.navLink} className={`${activeClass(nav.navLink)} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                        {nav.title}
                      </NavLink>
                    ))
                  }
                </div>
              </div>
              {
                authedUser && (
                  <>
                    <div className="flex items-center lg:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="hidden lg:ml-4 lg:flex lg:items-center">
                      <h1 className="capitalize">Hello {authedUser}</h1>
                      <div className="ml-4 relative flex-shrink-0">
                        <div>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={users[authedUser].avatarURL}
                            alt=""
                          />
                        </div>
                      </div>

                      <button type="button" onClick={logout} className="ml-6 inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-base ">Logout</button>
                    </div>
                  </>
                )
              }

            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {
                NavLinks.map((nav) => (
                  <Link key={nav.id} to={nav.navLink}>
                      <Disclosure.Button
                      as="button"
                      type="button"
                      className={`${mobileActiveClass(nav.navLink)} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                    >
                      {nav.title}
                    </Disclosure.Button>
                  </Link>
                ))
              }

            </div>
            {
              authedUser && (
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={users[authedUser].avatarURL}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">Hello {authedUser}</div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <button onClick={logout} className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Sign out</button>
                  </div>
                </div>
              )
            }
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar

