import React, {useState} from "react"
import { ANSWERED_QUESTION, ANSWERED_QUESTION_label, UNANSWERED_QUESTION, UNANSWERED_QUESTION_label } from "@utils/string"
import PropTypes from "prop-types"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardTabs({setCurrentTab}) {

  const [tabs, setTabs] = useState([
    {name: UNANSWERED_QUESTION, href: '#', current: true, label: UNANSWERED_QUESTION_label},
    {name: ANSWERED_QUESTION, href: '#', current: false, label: ANSWERED_QUESTION_label}
  ])

  const handleTabs = (tab) => {
    setTabs(
      tabs.map(item => (item.name === tab.name
            ? {...item, current: true}
            : {...item, current: false}
        )
      )
    )
    setCurrentTab(tab.name)
  }
  return (
    <div>
      <div className="sm:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          onChange={(e) => handleTabs(tabs.find((tab) => tab.name === e.target.value))}
          className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>{tab.label}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
          {tabs.map((tab, tabIdx) => (
            <a
              key={tab.name}
              href={tab.href}
              onClick={() => handleTabs(tab)}
              className={classNames(
                tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              <span>{tab.label}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.current ? 'bg-indigo-500' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5'
                )}
              />
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

DashboardTabs.propTypes = {
  setCurrentTab: PropTypes.func.isRequired
}

