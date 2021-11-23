import React from "react"
import QuestionNewForm from "./question.new.form"

export default function QuestionNew() {
  return (
    <main className="bg-gray-100 h-screen">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="max-w-none mx-auto bg-white ">
          <div className="overflow-hidden sm:rounded-lg sm:shadow">
            <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
              <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                <div className="ml-4 mt-4">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Create New Question</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <QuestionNewForm/>
        </div>
      </div>
    </main>
  )
}
