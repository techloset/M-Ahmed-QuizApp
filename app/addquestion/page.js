
export default function page() {
  return (
    <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-4 text-center">Add Quiz Question</h1>

    <div class="bg-gray-100  p-10 rounded-lg shadow-xl">
      <form>
        <div class="mb-4">
          <label for="question" class="block text-lg font-semibold mb-2">Question:</label>
          <textarea id="question" name="question" rows="3" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
        </div>

        <div class="mb-4">
          <label for="option1" class="block font-semibold mb-2">Option 1:</label>
          <input type="text" id="option1" name="option1" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
        </div>

        <div class="mb-4">
          <label for="option2" class="block font-semibold mb-2">Option 2:</label>
          <input type="text" id="option2" name="option2" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
        </div>

        <div class="mb-4">
          <label for="option3" class="block font-semibold mb-2">Option 3:</label>
          <input type="text" id="option3" name="option3" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
        </div>

        <div class="mb-4">
          <label for="correctOption" class="block font-semibold mb-2">Correct Option:</label>
          <select id="correctOption" name="correctOption" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Add Question</button>
      </form>
    </div>

  </div>
  )
}
