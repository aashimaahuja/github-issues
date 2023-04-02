import { expect, test } from '@jest/globals';
import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react';
import { FilterContext } from '../../context/FilterContext';
import { IssueLabel } from '../../enums/IssueLabel';
import { IssueState } from '../../enums/IssueState';
import { IssuesListHeader } from './IssuesListHeader';

const defaultValues = {
    issueState: IssueState.OPEN,
    issueLabel: IssueLabel.BUG,
    setIssueState: () => { },
    setIssueLabel: () => { },
}

test('renders issue list header', () => {
    const component = render(
        <FilterContext.Provider value={{
            ...defaultValues,
            issueState: IssueState.OPEN
        }}>
            <IssuesListHeader />
        </FilterContext.Provider>
    )
    expect(component.getByTestId('issue-list-header')).toBeDefined()
})

test('displays open count', async () => {
    const component = render(
        <FilterContext.Provider value={{
            ...defaultValues,
            issueState: IssueState.OPEN
        }}>
            <IssuesListHeader />
        </FilterContext.Provider>
    )
    await waitFor(() => expect(component.getByTestId('open-count')).toBeDefined())
})

test('displays close count', async () => {
    const component = render(
        <IssuesListHeader />
    )
    await waitFor(() => expect(component.getByTestId('closed-count')).toBeDefined())
})