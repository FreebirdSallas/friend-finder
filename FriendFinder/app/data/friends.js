//this is the object type the we collect for incoming data from the web app
// {
//     "name":"Ahmed",
//     "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//     "scores":[
//         5,
//         1,
//         4,
//         4,
//         5,
//         1,
//         2,
//         5,
//         4,
//         1
//       ]
//   }
var friendArray = [
    {
      name: "",
      photo: "",
      scores: [0],
    },
    {
		name: "Dennis",
		photo: "https://vignette3.wikia.nocookie.net/itsalwayssunny/images/1/13/Dennis_%281%29.jpg",
		scores: [1, 1, 5, 3, 3, 5, 1, 2, 3, 4]
	},
	{
		name: "Mac",
		photo: "https://vignette3.wikia.nocookie.net/itsalwayssunny/images/5/5f/Mac_-_Season_8.jpg",
		scores: [3, 1, 3, 5, 2, 3, 2, 2, 5, 5]
	},
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;
  