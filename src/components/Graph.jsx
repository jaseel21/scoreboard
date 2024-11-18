import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useRef, useContext, useState, useEffect } from "react";
import { DataOfOne } from "../store/dataBase"; // Ensure the import path is correct

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Graph() {
  const chartRef = useRef(null); // Reference for the chart
  const [emojiPositions, setEmojiPositions] = useState([]); // Array to store positions for each emoji

  // Access context values using useContext hook
  const { nizamiyya, faqriyya, maqbariyya } = useContext(DataOfOne);

  // Log context values for debugging purposes
  console.log("Context values: ", nizamiyya, faqriyya, maqbariyya);

  // Data for the bar chart
  const data = {
    labels: ["Fqriyya", "Nizamiyya", "Maqbariyya"], // Categories
    datasets: [
      {
        label: "Scores", // Add label for dataset
        data: [faqriyya, nizamiyya, maqbariyya], // Team scores from context
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Red
          "rgba(54, 162, 235, 0.6)", // Blue
          "rgba(75, 192, 192, 0.6)", // Green
        ],
        barThickness: 100, // Bar width
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow dynamic scaling
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 18, // Set font size for x-axis labels
          },
          color: "#000", // Optional: Set the label color
        },
        grid: {
          display: false, // Hide grid lines on x-axis
        },
      },
      y: {
        ticks: {
          font: {
            size: 18, // Set font size for y-axis labels
          },
          color: "gray", // Optional: Set the label color
        },
        beginAtZero: true,
      },
    },

    animation: {
      onComplete: () => {
        // Get the chart instance and calculate the positions for the emojis
        const chart = chartRef.current;
        if (!chart) return;

        const datasetMeta = chart.getDatasetMeta(0); // First dataset
        const positions = data.datasets[0].data.map((_, index) => {
          const bar = datasetMeta.data[index]; // Bar element
          if (bar) {
            const { x, y } = bar.tooltipPosition(); // Get bar's position
            return { left: x, top: y - 40 }; // Position emoji slightly above the bar
          }
          return { left: 0, top: 0 }; // Default position if bar not found
        });
        setEmojiPositions(positions); // Update emoji positions
      },
    },
  };

  // Use effect to update chart data and emoji positions when context values change
  useEffect(() => {
    // Update emoji positions whenever the context values change
    setEmojiPositions([]); // Clear previous positions to update for the new values
  }, [nizamiyya, faqriyya, maqbariyya]); // Run effect when any of the context values change

  let array =[faqriyya,nizamiyya,maqbariyya]

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center  bg-gray-100">
      <div className=" flex flex-col items-center justify-center bg-gray-100">
       {/* Logo placeholder */}
       <div className=" mb-2    justify-center ">
         {/* Replace the src with your program logo when ready */}
         {/* <img 
           src="/logo.svg"
           alt="Meharjan-2024 Logo" 
           className="w-24 h-24 object-cover rounded-full shadow-lg" 
         /> */}
       </div>
       <h1 className="text-gray-800 mb-16 text-2xl font-light pb-3">Meharjan-2024</h1>
  
       {/* Event Title */}
  
    
     </div>
      <div className=" max-w-7xl h-[700px] w-full bg-white rounded-lg shadow-md p-6 relative">
        {/* Animated emojis positioned dynamically */}
        {emojiPositions.map((position, index) => {
  const scores = data.datasets[0].data;
  const score = scores[index];

  // Determine which emoji to display based on the score
  let emojiSrc;

  if (score === Math.max(...scores)) {
    emojiSrc = "https://media.tenor.com/lKO2y9bmZhUAAAAi/smile-emoji-smile.gif"; // Smiling emoji
  } else if (score === Math.min(...scores)) {
    emojiSrc = "https://media.tenor.com/yoMMbzDjFl4AAAAj/crying-emoji.gif"; // Crying emoji
  } else {
    emojiSrc = "https://media.tenor.com/sKDzNg2OwAsAAAAi/sad-face-emoji.gif"; // Sad emoji
  }

  return (
    <div
      key={index}
      className="absolute animate-bounce flex flex-col items-center"
      style={{
        left: position.left, // Center horizontally
        top: position.top - 40, // Adjust vertically above the bar
        transform: "translate(-50%, -50%)", // Center relative to the position
      }}
    >
      <h1 className="text-center font-serif text-2xl  text-gray-700">{array[index]}</h1>
      <img className="ml-[-20px] mr-[80px] " src={emojiSrc} alt="Emoji" style={{ width: 80, height: 80 }} />
    </div>
  );
})}
        <Bar ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
}

export default Graph;
