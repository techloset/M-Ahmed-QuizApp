
export default function page() {
  return (
    <div className="container mx-auto p-8">
    <h1 className="text-3xl font-bold mb-4 text-center">Add Quiz Question</h1>

    <div className="bg-gray-100  p-10 rounded-lg shadow-xl">
      <form>
        <div className="mb-4">
          <label for="question" className="block text-lg font-semibold mb-2">Question:</label>
          <textarea id="question" name="question" rows="3" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
        </div>

        <div className="mb-4">
          <label for="option1" className="block font-semibold mb-2">Option 1:</label>
          <input type="text" id="option1" name="option1" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
        </div>

        <div className="mb-4">
          <label for="option2" className="block font-semibold mb-2">Option 2:</label>
          <input type="text" id="option2" name="option2" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
        </div>

        <div className="mb-4">
          <label for="option3" className="block font-semibold mb-2">Option 3:</label>
          <input type="text" id="option3" name="option3" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
        </div>

        <div className="mb-4">
          <label for="correctOption" className="block font-semibold mb-2">Correct Option:</label>
          <select id="correctOption" name="correctOption" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Add Question</button>
      </form>
    </div>

  </div>
  )
}
