
export default function page() {
  return (
    <div class="container mx-auto p-8 mt-10">
    
    <div class="bg-gray-100   p-11  rounded-lg shadow-xl">
      <h2 class="text-2xl font-semibold mb-2">Question 1: What is the capital of France?</h2>
      <div class="space-y-2 text-lg">
        <label class="flex items-center">
          <input type="radio" name="q1" value="paris" class="mr-2"/>
          Paris
        </label>
        <label class="flex items-center">
          <input type="radio" name="q1" value="london" class="mr-2"/>
          London
        </label>
        <label class="flex items-center">
          <input type="radio" name="q1" value="berlin" class="mr-2"/>
          Berlin
        </label>
      </div>
    </div>
     <div class="mt-4 text-end mx-6">
      <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Next</button>
    </div>
  </div>
  )
}
