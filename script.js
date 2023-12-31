//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener('click', () => {

		let promises=images.map((img)=>{
		return fetch(img.url)
	})

	Promise.all(promises).then(blobs=>{
		images.map(blob=>{
			console.log(blob)
			 let img = document.createElement("img");
        img.src = blob.url;
        img.style.margin = '10px';
        output.appendChild(img);
		})
		
	})
	
})