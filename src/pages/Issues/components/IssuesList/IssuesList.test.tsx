import { expect, test } from '@jest/globals';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { IssuesList } from './IssuesList';

test('renders issue list page', () => {
    const component = render(<IssuesList />)
    expect(component.getByTestId('issues-list')).toBeDefined()
})