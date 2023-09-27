const candidates: CandidateType[] = [
  {
    imgUrl: "https://placehold.co/80/EDF4FF/D0E1FF?text=AS",
    name: "Aaliyah Sanderson",
    address: "Riyadh, Saudi Arabia",
    education: "Bachelor - Cambridge University (2023 - 2023)",
    hashes: ["#top_candidate", "#top_candidate"],
    categories: ["New York", "Marketing", "London"],
  },
  {
    imgUrl: "https://placehold.co/80/EDF4FF/D0E1FF?text=AS",
    name: "John Doe",
    address: "Bostom, USA",
    education: "Bachelor - MIT (2023 - 2023)",
    hashes: ["#top_candidate", "#top_candidate"],
    categories: ["New York", "Marketing", "London"],
  },
  {
    imgUrl: "https://placehold.co/80/EDF4FF/D0E1FF?text=AS",
    name: "Thomas Matt",
    address: "Edinburg, UK",
    education: "Bachelor - Harvard University (2023 - 2023)",
    hashes: ["#top_candidate", "#top_candidate"],
    categories: ["New York", "Marketing", "London"],
  },
  {
    imgUrl: "https://placehold.co/80/EDF4FF/D0E1FF?text=AS",
    name: "Kamilia Smith",
    address: "London, UK",
    education: "Bachelor - Boston University (2023 - 2023)",
    hashes: ["#top_candidate", "#top_candidate"],
    categories: ["New York", "Marketing", "London"],
  },
  {
    imgUrl: "https://placehold.co/80/EDF4FF/D0E1FF?text=AS",
    name: "Roy Jade",
    address: "Cambridge,  UK",
    education: "Bachelor - Yale (2023 - 2023)",
    hashes: ["#top_candidate", "#top_candidate"],
    categories: ["New York", "Marketing", "London"],
  },
  {
    imgUrl: "https://placehold.co/80/EDF4FF/D0E1FF?text=AS",
    name: "Ahmed Salman",
    address: "New York, USA",
    education: "Bachelor - Cambridge University (2023 - 2023)",
    hashes: ["#top_candidate", "#top_candidate"],
    categories: ["New York", "Marketing", "London"],
  },
];
export default candidates;

export interface CandidateType {
  imgUrl: string;
  name: string;
  address: string;
  education: string;
  hashes: string[];
  categories: string[];
}
