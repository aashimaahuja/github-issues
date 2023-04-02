import { ReactComponent as OpenIssueIcon } from '../../icons/open-issue.svg';
import { IssuesFilters } from '../IssuesFilters/IssuesFilters';
import './IssuesListHeader.css';


type Props = {
    openCount: number,
    closeCount: number,
}

export const IssuesListHeader = ({ openCount, closeCount }: Props) => {
    return (
        <div className='header'>
            <div className="issuesCount" >
                <div className="openCount">
                    <OpenIssueIcon />
                    <span className='open'>{openCount} Open</span>
                </div>
                <div className="closeCount">
                    <span className='close'>{closeCount} Closed</span>
                </div>
            </div>
            <IssuesFilters />
        </div>
    )
}