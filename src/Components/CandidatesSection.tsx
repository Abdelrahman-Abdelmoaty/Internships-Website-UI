// import { uuid } from "uuidv4";
import uuid from "react-uuid";
import Candidate from "./Candidate";
import candidates, { CandidateType } from "./MockUpData";

export default function CandidatesSection() {
  const data = candidates;
  return (
    <div>
      {data.map((candidate: CandidateType) => {
        return <Candidate key={uuid()} candidate={candidate} />;
      })}
    </div>
  );
}
