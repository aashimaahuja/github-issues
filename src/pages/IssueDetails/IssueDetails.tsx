import { useParams } from "react-router-dom";

export const IssueDetails = () => {
  const { issueId } = useParams();
  return (
    <div data-testid='issue-details-page'>
      <h1 >Issue #{issueId}</h1>
    </div>
  )
}