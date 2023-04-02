import { describe, expect, test } from '@jest/globals';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { IssueDetails } from './IssueDetails';

test('renders issue details page', () => {
    const component = render(<IssueDetails />)
    expect(component.getByTestId('issue-details-page')).toBeDefined()
})