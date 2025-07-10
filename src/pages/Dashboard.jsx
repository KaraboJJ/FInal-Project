import { useAuth } from "../context/AuthContext";

const dummyMovies = [
  {
    id: 1,
    title: "The Matrix",
    thumbnail: "https://via.placeholder.com/300x180",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 2,
    title: "Inception",
    thumbnail: "https://via.placeholder.com/300x180",
    videoUrl: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    id: 3,
    title: "Black Panther",
    thumbnail: "https://via.placeholder.com/300x180",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl mb-4">Welcome, {user?.email}</h1>
      <h2 className="text-xl mb-2">🎬 Featured Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dummyMovies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 rounded p-2">
            <img src={movie.thumbnail} alt={movie.title} className="w-full mb-2 rounded" />
            <h3 className="text-lg mb-1">{movie.title}</h3>
            <video controls className="w-full rounded">
              <source src={movie.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
