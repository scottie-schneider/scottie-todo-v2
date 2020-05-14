import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { Overview } from "./index"
/**
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {any} state - Initial state for setup
 * @returns {ShallowWrapper}
 */

const initialTodos = []

const setup = (props = {}, state = null) => {
  return shallow(<Overview />)
}

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - value of data-test attr to search.
 * @returns {ShallowWrapper}
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="component-${val}"]`)
}

configure({ adapter: new Adapter() })

describe("<TodoList />", () => {
  test("renders without error", () => {
    const wrapper = setup()
    const appComponent = findByTestAttr(wrapper, "Overview")
    expect(appComponent.length).toBe(1)
  })
  // test("renders at least one todo list item", () => {
  //   const wrapper = setup()
  //   const appComponent = findByTestAttr(wrapper, "TodoListItem")
  //   expect(appComponent.length).toBeGreaterThanOrEqual(1)
  // })
})
