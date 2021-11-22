import React from "react"
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux"
import { handleSaveQuestion } from "../../redux/actions/shared"
import { useHistory } from "react-router-dom"

const schema = yup.object().shape({
  optionOne: yup.string().required('Option One a is required'),
  optionTwo: yup.string().required('Option Two a is required')
})


function QuestionNewForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const dispatch = useDispatch()

  const history = useHistory()

  const authedUser = useSelector(state => state.auth)


  const submitPoll = async (data) => {
    const options = { ...data }

    dispatch(handleSaveQuestion({
      optionOneText: options.optionOne,
      optionTwoText: options.optionTwo,
      author: authedUser
    }))
    history.push('/')
  }


  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Would You Rather</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          <span className="font-medium text-indigo-600 hover:text-indigo-500">
            Complete your question:
          </span>
        </p>

      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(submitPoll)}>
            <div>
              <label htmlFor="option-one" className="block text-sm font-medium text-gray-700">
                Option One <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  id="option-one"
                  name="option-one"
                  type="text"
                  {...register("optionOne", { required: true })}
                  autoComplete="option-one"
                  placeholder="Enter Option One"
                  className={`appearance-none block w-full px-3 py-2 border ${errors.optionOne ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
              {errors.optionOne && <p className="mt-1 text-sm text-red-500">{errors.optionOne.message}</p>}

            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-lg font-bold text-gray-500">Or</span>
              </div>
            </div>

            <div>
              <label htmlFor="option-two" className="block text-sm font-medium text-gray-700">
                Option Two <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  id="option-two"
                  name="option-two"
                  type="text"
                  {...register("optionTwo", { required: true })}
                  //required
                  placeholder="Enter Option Two"
                  className={`appearance-none block w-full px-3 py-2 border ${errors.optionTwo ? 'border-red-500' : 'border-gray-300'} border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
              {errors.optionTwo && <p className="mt-1 text-sm text-red-500">{errors.optionTwo.message}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default QuestionNewForm
