
export default function Quiz() {
  return (
    <div className="container mx-auto p-8 mt-10">

      <div className="bg-gray-100   p-11  rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-2">Question 1: What is the capital of France?</h2>
        <div className="space-y-2 text-lg">
          <label className="flex items-center">
            <input type="radio" name="q1" value="paris" className="mr-2" />
            Paris
          </label>
          <label className="flex items-center">
            <input type="radio" name="q1" value="london" className="mr-2" />
            London
          </label>
          <label className="flex items-center">
            <input type="radio" name="q1" value="berlin" className="mr-2" />
            Berlin
          </label>
        </div>
      </div>
      <div className="mt-4 text-end mx-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
  )
}
