import React, { useState, useContext } from "react";
import { DataOfOne } from "../store/dataBase"; // Import the context

function Admin() {
  const { updateScores } = useContext(DataOfOne); // Access the updateScores function from context

  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateScores(Number(input2), Number(input1), Number(input3)); // Update scores using context
    console.log("Scores updated:", input1, input2, input3);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        <h1 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Admin Panel
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Input field 1 */}
            <div>
              <label
                htmlFor="input1"
                className="block text-sm font-medium text-gray-700"
              >
                Faqriyya
              </label>
              <input
                type="number"
                id="input1"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter number"
              />
            </div>

            {/* Input field 2 */}
            <div>
              <label
                htmlFor="input2"
                className="block text-sm font-medium text-gray-700"
              >
                Nazamiyya
              </label>
              <input
                type="number"
                id="input2"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter number"
              />
            </div>

            {/* Input field 3 */}
            <div>
              <label
                htmlFor="input3"
                className="block text-sm font-medium text-gray-700"
              >
                Maqbariyya
              </label>
              <input
                type="number"
                id="input3"
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter number"
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="justify-center flex mt-4">
            <button
              type="submit"
              className="w-1/3 bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin;
